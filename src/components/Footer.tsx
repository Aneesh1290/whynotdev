import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#030303', color: 'var(--color-text-inverse)', fontFamily: 'var(--font-main)' }}>
      
      {/* Contact CTA Section */}
      <div style={{ borderBottom: '1px solid #1a1a1a' }}>
        <div className="responsive-flex responsive-padding-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left: Text & Button */}
          <div className="mobile-w-full" style={{ flexShrink: 0 }}>
            <h2 style={{ fontFamily: 'var(--font-main)', fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px', letterSpacing: '-1px', lineHeight: 1 }}>HAVE AN IDEA?</h2>
            <p style={{ fontFamily: 'var(--font-main)', color: '#999', fontSize: '1rem', marginBottom: '32px', maxWidth: '300px', lineHeight: 1.6 }}>
              Let's build something great together.<br/>
              Tell us about your project.
            </p>
            <a href="tel:+918618796251" style={{ fontFamily: 'var(--font-mono)', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 24px', fontSize: '0.75rem', fontWeight: 700, color: '#fff', letterSpacing: '1.5px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              GET IN TOUCH <span style={{ fontSize: '1rem', fontWeight: 400 }}>&rarr;</span>
            </a>
          </div>

          {/* Right: Provided Banner Image (Handwriting + Desk) */}
          <div className="mobile-w-full mobile-image-container" style={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1, paddingLeft: '40px' }}>
            <img 
              src="/contact_banner.png" 
              alt="Good ideas deserve good code" 
              style={{ 
                width: '100%', 
                maxWidth: '800px', 
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="responsive-padding-footer">
        <div className="responsive-grid-footer" style={{ display: 'grid', gap: '40px', fontSize: '0.85rem' }}>
          <div className="footer-brand">
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px' }}>WHYNOTDEV</span>
          </div>
          <p style={{ color: 'var(--color-text-sidebar-muted)' }}>&copy; 2026 WhyNotDev.<br/>All rights reserved.</p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: 'var(--color-text-sidebar-muted)', fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '8px' }}>NAVIGATION</h4>
          <Link href="/">Home</Link>
          <Link href="#work">Work</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#process">Process</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: 'var(--color-text-sidebar-muted)', fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '8px' }}>SERVICES</h4>
          <Link href="#services">Web Development</Link>
          <Link href="#services">Web Applications</Link>
          <Link href="#services">Mobile Apps</Link>
          <Link href="#services">Custom Software</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: 'var(--color-text-sidebar-muted)', fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '8px' }}>CONTACT</h4>
          <a href="tel:+918618796251">+91 8618796251</a>
          <span style={{ color: 'var(--color-text-sidebar-muted)' }}>Bengaluru, India</span>
        </div>


        </div>
      </div>
    </footer>
  );
}
