'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Target,
  CheckSquare,
  MessageSquare,
  FileText,
  Receipt,
  CreditCard,
  PieChart,
  Wallet,
  Calendar,
  StickyNote,
  Settings,
  User,
  Plus
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const isCurrent = (path: string) => pathname === path;

  return (
    <aside style={{ width: '280px', backgroundColor: '#0d0d0d', color: '#fff', display: 'flex', flexDirection: 'column', flexShrink: 0, borderRight: '1px solid #1a1a1a', height: '100vh', position: 'sticky', top: 0, overflowY: 'auto' }}>

      {/* Logo */}
      <div style={{ padding: '32px 32px 40px 32px' }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: '#fff' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.2 }}>WHYNOTDEV</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: '#888', letterSpacing: '1px', marginTop: '4px' }}>SOFTWARE STUDIO</span>
        </Link>
      </div>

      {/* Dashboard Link */}
      <div style={{ padding: '0 16px', marginBottom: '32px' }}>
        <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', backgroundColor: isCurrent('/admin') ? '#222' : 'transparent', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
          <LayoutDashboard size={18} />
          Dashboard
        </Link>
      </div>

      {/* Navigation Sections */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>

        <NavSection title="MANAGEMENT">
          <NavItem icon={<Users size={18} />} label="Clients" />
          <NavItem icon={<FolderKanban size={18} />} label="Projects" />
          <NavItem icon={<Target size={18} />} label="Leads" />
          <NavItem icon={<CheckSquare size={18} />} label="Tasks" />
          <NavItem icon={<MessageSquare size={18} />} label="Messages" />
          <NavItem icon={<FileText size={18} />} label="Documents" />
        </NavSection>

        <NavSection title="FINANCE">
          <NavItem icon={<Receipt size={18} />} label="Invoices" />
          <NavItem icon={<CreditCard size={18} />} label="Payments" />
          <NavItem icon={<Wallet size={18} />} label="Expenses" />
          <NavItem icon={<PieChart size={18} />} label="Financial Overview" />
        </NavSection>

        <NavSection title="OTHERS">
          <NavItem icon={<Calendar size={18} />} label="Calendar" />
          <NavItem icon={<StickyNote size={18} />} label="Notes" />
        </NavSection>

        <NavSection title="SETTINGS">
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <NavItem icon={<User size={18} />} label="Profile" />
        </NavSection>

      </div>

      {/* Quick Actions */}
      <div style={{ padding: '32px 16px', marginTop: 'auto' }}>
        <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', letterSpacing: '1px', marginBottom: '16px', paddingLeft: '16px' }}>Quick Actions</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <QuickActionItem icon={<Plus size={14} />} label="New Project" />
          <QuickActionItem icon={<Plus size={14} />} label="New Invoice" />
          <QuickActionItem icon={<Plus size={14} />} label="Add Client" />
          <QuickActionItem icon={<Plus size={14} />} label="Log Expense" />
        </div>
      </div>

      <div style={{ padding: '32px', borderTop: '1px solid #1a1a1a', fontSize: '0.75rem', color: '#666' }}>
        <p>&copy; 2026 WhyNotDev.</p>
        <p>All rights reserved.</p>
      </div>

    </aside>
  );
}

// Helper Components
function NavSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div style={{ padding: '0 16px' }}>
      <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', letterSpacing: '1px', marginBottom: '16px', paddingLeft: '16px' }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {children}
      </div>
    </div>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', color: '#aaa', textDecoration: 'none', fontSize: '0.9rem', borderRadius: '8px', transition: 'all 0.2s' }}>
      {icon}
      {label}
    </Link>
  );
}

function QuickActionItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', color: '#ddd', backgroundColor: 'transparent', border: 'none', fontSize: '0.85rem', cursor: 'pointer', textAlign: 'left', borderRadius: '8px' }}>
      {icon}
      {label}
    </button>
  );
}
