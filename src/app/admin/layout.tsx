import Sidebar from '@/components/Sidebar';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Use email or extract name if available in metadata
  const userDisplayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
  const userInitials = userDisplayName.substring(0, 2).toUpperCase();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fafafa', color: '#111', fontFamily: 'var(--font-main)' }}>
      
      {/* Sidebar (Client Component) */}
      <Sidebar />

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        
        {/* Top Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 48px', borderBottom: '1px solid #eaeaea', backgroundColor: '#fff' }}>
          
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#111', marginBottom: '8px', letterSpacing: '-0.5px' }}>Good morning, {userDisplayName} 👋</h1>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Here's what's happening with your business today.</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            
            {/* Search Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#f5f5f5', padding: '8px 16px', borderRadius: '8px', width: '280px', border: '1px solid #eee' }}>
              <Search size={16} color="#888" />
              <input type="text" placeholder="Search anything..." style={{ border: 'none', backgroundColor: 'transparent', outline: 'none', fontSize: '0.9rem', width: '100%' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.7rem', color: '#666' }}>
                <span>⌘</span><span>K</span>
              </div>
            </div>

            {/* Notifications */}
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Bell size={20} color="#444" />
              <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%', border: '2px solid #fff' }}></span>
            </button>

            {/* Profile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#111', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontWeight: 600 }}>
                {userInitials}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111' }}>{userDisplayName}</span>
                <span style={{ fontSize: '0.75rem', color: '#666' }}>Admin</span>
              </div>
              <ChevronDown size={16} color="#666" />
            </div>

          </div>
        </header>

        {/* Dashboard Content Container */}
        <div style={{ flex: 1, padding: '32px 48px', overflowY: 'auto' }}>
          {children}
        </div>

      </main>
    </div>
  );
}
