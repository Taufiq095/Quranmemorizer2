import { supabase } from './supabase';
import type { User } from '@supabase/supabase-js';

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) throw error;
  
  if (data.user) {
    await ensureProfile(data.user);
    await ensureProgress(data.user);
  }
  
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  
  if (data.user) {
    await ensureProfile(data.user);
    await ensureProgress(data.user);
  }
  
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function ensureProfile(user: User) {
  const { error } = await supabase
    .from('profiles')
    .upsert({
      id: user.id,
      email: user.email!,
    }, {
      onConflict: 'id'
    });
  
  if (error) throw error;
}

export async function ensureProgress(user: User, surahId = 'al-Fatihah') {
  const { data: existing } = await supabase
    .from('progress')
    .select('*')
    .eq('user_id', user.id)
    .eq('surah_id', surahId)
    .single();
  
  if (!existing) {
    const { error } = await supabase
      .from('progress')
      .insert({
        user_id: user.id,
        surah_id: surahId,
        last_ayah: 0,
        xp: 0,
      });
    
    if (error) throw error;
  }
}