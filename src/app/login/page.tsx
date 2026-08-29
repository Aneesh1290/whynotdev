'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { login } from './actions';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);
    if (result?.error) {
      setError(result.error);
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#050505', color: '#fff', fontFamily: 'var(--font-main)' }}>
      {/* Simple Header */}
      <div style={{ padding: '40px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: '#fff' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.2 }}>WHYNOTDEV</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#888', letterSpacing: '1px', marginTop: '4px' }}>SOFTWARE STUDIO</span>
        </Link>
        <Link href="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#aaa', letterSpacing: '1px', textDecoration: 'none' }}>
          &larr; BACK TO SITE
        </Link>
      </div>

      {/* Login Form Container */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#0a0a0a', padding: '48px', border: '1px solid #1a1a1a', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
          
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 600, marginBottom: '8px', color: '#eee' }}>Client Portal</h1>
          <p style={{ fontFamily: 'var(--font-main)', fontSize: '0.85rem', color: '#888', marginBottom: '40px' }}>Sign in to manage your projects.</p>

          {error && (
            <div style={{ backgroundColor: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '24px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#aaa', letterSpacing: '1px' }}>EMAIL ADDRESS</label>
              <input 
                id="email"
                name="email"
                type="email" 
                placeholder="you@company.com"
                required
                disabled={isLoading}
                style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '12px 0', color: '#fff', fontSize: '1rem', outline: 'none', fontFamily: 'var(--font-main)', opacity: isLoading ? 0.5 : 1 }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="password" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#aaa', letterSpacing: '1px' }}>PASSWORD</label>
              <input 
                id="password"
                name="password"
                type="password" 
                placeholder="••••••••"
                required
                disabled={isLoading}
                style={{ backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '12px 0', color: '#fff', fontSize: '1rem', outline: 'none', fontFamily: 'var(--font-main)', opacity: isLoading ? 0.5 : 1 }}
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              style={{ 
                marginTop: '16px',
                fontFamily: 'var(--font-mono)', 
                backgroundColor: isLoading ? '#ccc' : '#fff', 
                color: '#000', 
                padding: '16px', 
                fontWeight: 600, 
                fontSize: '0.85rem', 
                letterSpacing: '1px', 
                cursor: isLoading ? 'not-allowed' : 'pointer', 
                border: 'none',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                transition: 'background-color 0.2s'
              }}
            >
              {isLoading ? (
                <>
                  <style>{`
                    @keyframes spin { 
                      from { transform: rotate(0deg); } 
                      to { transform: rotate(360deg); } 
                    }
                    .animate-spin { animation: spin 1s linear infinite; }
                  `}</style>
                  <Loader2 size={16} className="animate-spin" />
                  SIGNING IN...
                </>
              ) : (
                'SIGN IN →'
              )}
            </button>
          </form>

        </div>
      </div>
      
    </div>
  );
}
