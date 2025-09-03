import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp, signOut } from '../../lib/auth';
import { useAuth } from '../../hooks/useAuth';
import { Button } from './Button';

export function AuthButton() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return <div className="text-muted text-sm">Loading...</div>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
          {user.email?.[0]?.toUpperCase() || 'U'}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-fg">{user.email}</span>
          <button
            onClick={handleSignOut}
            className="text-xs text-muted hover:text-fg text-left"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <Button
      variant="primary"
      size="sm"
      onClick={() => navigate('/auth')}
    >
      Create Account
    </Button>
  );
}