import { supabase } from './supabase';

export async function getProgress(surahId: string) {
  if (!supabase) {
    return { last_ayah: 0, xp: 0 };
  }
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { last_ayah: 0, xp: 0 };
  }

  const { data, error } = await supabase
    .from('progress')
    .select('last_ayah, xp')
    .eq('user_id', user.id)
    .eq('surah_id', surahId)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching progress:', error);
    return { last_ayah: 0, xp: 0 };
  }

  return data || { last_ayah: 0, xp: 0 };
}

export async function setLastAyah(surahId: string, ayahNumber: number) {
  if (!supabase) {
    return;
  }
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return;
  }

  const { error } = await supabase
    .from('progress')
    .upsert({
      user_id: user.id,
      surah_id: surahId,
      last_ayah: ayahNumber,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error('Error updating progress:', error);
  }
}

export async function addXP(surahId: string, delta: number) {
  if (!supabase) {
    return;
  }
  
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return;
  }

  // Get current progress
  const current = await getProgress(surahId);
  
  const { error } = await supabase
    .from('progress')
    .upsert({
      user_id: user.id,
      surah_id: surahId,
      xp: current.xp + delta,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error('Error updating XP:', error);
  }
}