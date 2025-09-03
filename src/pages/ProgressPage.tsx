import React, { useState, useEffect } from 'react';
import { Page } from '../components/ui/Page';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

interface ProgressData {
  surah_id: string;
  last_ayah: number;
  xp: number;
  updated_at: string;
}

export function ProgressPage() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      loadProgress();
    }
  }, [user]);

  const loadProgress = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setProgress(data || []);
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async (surahId: string, field: 'last_ayah' | 'xp', increment: number) => {
    if (!user) return;

    try {
      const current = progress.find(p => p.surah_id === surahId);
      const newValue = (current?.[field] || 0) + increment;

      const { error } = await supabase
        .from('progress')
        .upsert({
          user_id: user.id,
          surah_id: surahId,
          [field]: newValue,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,surah_id'
        });

      if (error) throw error;
      
      // Optimistic update
      setProgress(prev => 
        prev.map(p => 
          p.surah_id === surahId 
            ? { ...p, [field]: newValue, updated_at: new Date().toISOString() }
            : p
        )
      );
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  if (loading) {
    return (
      <Page>
        <Header title="Progress" />
        <div>Loading...</div>
      </Page>
    );
  }

  return (
    <Page>
      <Header title="Progress" />
      
      <div className="space-y-4">
        {progress.length === 0 ? (
          <div className="text-center text-muted py-8">
            No progress data yet. Start reading to track your progress!
          </div>
        ) : (
          progress.map((item) => (
            <div key={item.surah_id} className="border border-border rounded-lg p-4">
              <h3 className="font-medium mb-2">{item.surah_id}</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-sm text-muted">Last Ayah</div>
                  <div className="text-lg font-medium">{item.last_ayah}</div>
                </div>
                <div>
                  <div className="text-sm text-muted">XP</div>
                  <div className="text-lg font-medium">{item.xp}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => updateProgress(item.surah_id, 'last_ayah', 1)}
                >
                  +1 Ayah
                </Button>
                <Button
                  size="sm"
                  onClick={() => updateProgress(item.surah_id, 'xp', 10)}
                >
                  +10 XP
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </Page>
  );
}