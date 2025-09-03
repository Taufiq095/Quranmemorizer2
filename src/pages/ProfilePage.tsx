import React, { useState, useEffect } from 'react';
import { Page } from '../components/ui/Page';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { TextField } from '../components/ui/TextField';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

export function ProfilePage() {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      if (data) {
        setDisplayName(data.display_name || '');
        setAge(data.age?.toString() || '');
        setGender(data.gender || '');
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          display_name: displayName || null,
          age: age ? parseInt(age) : null,
          gender: gender || null,
        })
        .eq('id', user.id);

      if (error) throw error;
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Page>
        <Header title="Profile" />
        <div>Loading...</div>
      </Page>
    );
  }

  return (
    <Page>
      <Header title="Profile" />
      
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSave} className="space-y-4">
          <TextField
            label="Email"
            type="email"
            value={user?.email || ''}
            disabled
          />
          
          <TextField
            label="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          
          <TextField
            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Profile'}
          </Button>
        </form>
      </div>
    </Page>
  );
}