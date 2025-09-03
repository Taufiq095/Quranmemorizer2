import { useState } from 'react';
import { signIn, signOut, useAuth } from '../lib/user';

export default function AuthButton() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSigningIn(true);
    setMessage('');
    
    try {
      const result = await signIn(email);
      setMessage(result.message);
      setEmail('');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Sign in failed');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage('');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Sign out failed');
    }
  };

  if (loading) {
    return <div style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>Loading...</div>;
  }

  if (user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ color: 'var(--text)', fontSize: '0.9em' }}>
          {user.email}
        </span>
        <button
          className="button"
          onClick={handleSignOut}
          style={{ 
            background: 'var(--btn-bg)', 
            color: 'var(--btn-text)',
            padding: '4px 8px',
            fontSize: '0.8em'
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
      <form onSubmit={handleSignIn} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input
          type="email"
          placeholder="Enter email to sync progress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSigningIn}
          style={{
            background: 'var(--panel)',
            border: '1px solid var(--divider)',
            borderRadius: 6,
            padding: '4px 8px',
            color: 'var(--text)',
            fontSize: '0.8em',
            width: 200
          }}
        />
        <button
          type="submit"
          className="button"
          disabled={isSigningIn || !email.trim()}
          style={{ 
            background: 'var(--accent)', 
            color: 'var(--accent-contrast)',
            border: 'none',
            padding: '4px 8px',
            fontSize: '0.8em'
          }}
        >
          {isSigningIn ? 'Sending...' : 'Sign In'}
        </button>
      </form>
      {message && (
        <div style={{ 
          color: message.includes('Check your email') ? 'var(--accent)' : 'var(--text-muted)', 
          fontSize: '0.75em',
          maxWidth: 250,
          textAlign: 'right'
        }}>
          {message}
        </div>
      )}
    </div>
  );
}