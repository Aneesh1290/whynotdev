import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="responsive-nav-padding" style={{ backgroundColor: '#050505', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1a1a1a', fontFamily: 'var(--font-main)' }}>
      
      {/* Logo */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.2 }}>WHYNOTDEV</Link>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#888', letterSpacing: '1px', marginTop: '4px' }}>SOFTWARE STUDIO</span>
      </div>

      {/* Navigation Links */}
      <div className="mobile-nav-links" style={{ display: 'flex', gap: '40px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px' }}>
        <Link href="/" style={{ borderBottom: '2px solid #fff', paddingBottom: '4px', color: '#fff' }}>HOME</Link>
        <Link href="#work" style={{ color: '#888', paddingBottom: '4px' }}>WORK</Link>
        <Link href="#services" style={{ color: '#888', paddingBottom: '4px' }}>SERVICES</Link>

      </div>

      {/* CTA Button (Temporarily Hidden for Public Release) */}
      <div>
        {/* <Link href="/login" style={{ fontFamily: 'var(--font-mono)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '10px 24px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1px', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
          CLIENT LOGIN <span>&rarr;</span>
        </Link> */}
      </div>

    </nav>
  );
}
