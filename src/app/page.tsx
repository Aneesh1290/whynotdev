import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <section className="responsive-padding" style={{ backgroundColor: '#f4f4f4', color: '#000', minHeight: 'calc(100vh - 89px)', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <div className="responsive-flex" style={{ display: 'flex', width: '100%', maxWidth: '1600px', position: 'relative' }}>
            
            {/* Left Column (Text) */}
            <div className="mobile-w-full" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#555', letterSpacing: '1.5px', fontWeight: 600 }}>&gt; SOFTWARE STUDIO</span>
                <div style={{ width: '24px', height: '1px', backgroundColor: '#999' }}></div>
              </div>
              
              <h1 className="hero-heading" style={{ fontFamily: '"Oswald", sans-serif', fontWeight: 700, marginBottom: '32px', lineHeight: 0.95, letterSpacing: '-1px', color: '#050505' }}>
                WE BUILD<br />THINGS THAT<br />ACTUALLY WORK.
              </h1>
              
              <div style={{ width: '32px', height: '1px', backgroundColor: '#000', marginBottom: '32px' }}></div>
              
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: '#333', marginBottom: '60px', maxWidth: '420px', lineHeight: 1.8, fontWeight: 500 }}>
                We help businesses and organizations turn ideas into reliable digital products that solve real problems.
              </p>
              
              <div style={{ display: 'flex', gap: '40px', alignItems: 'center', marginBottom: '80px', flexWrap: 'wrap' }}>
                <a href="tel:+918618796251" style={{ fontFamily: 'var(--font-mono)', backgroundColor: '#000', color: '#fff', padding: '16px 32px', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px', cursor: 'pointer', border: 'none', textDecoration: 'none', display: 'inline-block' }}>
                  START A PROJECT &rarr;
                </a>
                <a href="#work" style={{ fontFamily: 'var(--font-mono)', backgroundColor: 'transparent', color: '#000', borderBottom: '1px solid #000', padding: '4px 0', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px', cursor: 'pointer', borderTop: 'none', borderLeft: 'none', borderRight: 'none', textDecoration: 'none', display: 'inline-block' }}>
                  VIEW OUR WORK
                </a>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#333', letterSpacing: '1.5px', fontWeight: 600, lineHeight: 1.6 }}>
                  BASED IN INDIA<br />WORKING WITH CLIENTS WORLDWIDE.
                </p>
              </div>
            </div>
            
            {/* Right Column (Image & Overlays) */}
            <div className="mobile-w-full mobile-image-container" style={{ flex: '1', position: 'relative', display: 'flex', paddingRight: '60px' }}>
              {/* The grayscale architecture image */}
              <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src="/hero_architecture.jpg" 
                  alt="Architectural structure" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1) brightness(0.9)' }} 
                />
                
                {/* Floating Black Box */}
                <div style={{ position: 'absolute', top: '0', right: '-20px', backgroundColor: '#050505', padding: '30px 40px', zIndex: 20 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', lineHeight: 2, color: '#fff' }}>
                    IDEA.<br />BUILD.<br />DEPLOY.<br />REPEAT.
                  </p>
                </div>
              </div>
            </div>

            {/* Far Right Sidebar Details */}
            <div className="hide-on-mobile" style={{ position: 'absolute', right: '0px', top: '0', bottom: '0', width: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '60px 0' }}>
              <div style={{ transform: 'rotate(90deg)', whiteSpace: 'nowrap', transformOrigin: 'top center', marginTop: '120px' }}>
                 <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '4px', color: '#000', fontWeight: 600 }}>
                   CODE . DESIGN . SOLVE .
                 </p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginTop: 'auto' }}>
                <div style={{ width: '1px', height: '60px', backgroundColor: '#ccc' }}></div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700, color: '#000' }}>01</div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="responsive-padding-work" style={{ backgroundColor: '#050505', color: '#fff' }}>
          <div className="responsive-flex" style={{ display: 'flex', gap: '60px', maxWidth: '1600px', margin: '0 auto' }}>
            
            {/* Left Column (Sticky Text) */}
            <div className="mobile-w-full sticky-desktop" style={{ display: 'flex', flexDirection: 'column', height: 'fit-content', flexShrink: 0, width: '350px' }}>
               <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#888', letterSpacing: '2px', marginBottom: '32px' }}>SELECTED WORK</h4>
               
               <h2 className="work-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '3.2rem', fontWeight: 600, lineHeight: 1.1, marginBottom: '32px', color: '#eee' }}>
                 A few things<br/>we've built.
               </h2>
               
               <div style={{ width: '40px', height: '1px', backgroundColor: '#444', marginBottom: '32px' }}></div>
               
               <p style={{ fontFamily: 'var(--font-mono)', color: '#888', fontSize: '0.85rem', marginBottom: '60px', lineHeight: 1.8, maxWidth: '240px' }}>
                 Projects that we're proud of and that make an impact.
               </p>
               
               <a href="#work" style={{ fontFamily: 'var(--font-mono)', backgroundColor: 'transparent', color: '#aaa', padding: '4px 0', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '2px', cursor: 'pointer', border: 'none', borderBottom: '1px solid #444', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                 VIEW ALL PROJECTS <span>&rarr;</span>
               </a>
            </div>
            
            {/* Right Column (Project Cards Grid) */}
            <div className="responsive-grid-3" style={{ flex: 1, display: 'grid', gap: '24px' }}>
              {[
                { id: '01', title: 'Parshuram Seashore Cafe and Rooms', type: 'Business Website', desc: 'A clean, modern website for a local business to represent their services and build trust online.', link: 'https://parashuramhomestay.com/', image: '/parshuramhomestay.png' },
                { id: '02', title: 'NexTap', type: 'NFC Product Platform', desc: 'E-commerce platform for NFC review cards and smart products for modern businesses.', link: 'https://nextap.whynotdev.in/', image: '/nextap.png' }
              ].map((project) => (
                <div key={project.id} style={{ display: 'flex', flexDirection: 'column' }}>
                  
                  {/* Thumbnail Image */}
                  <div style={{ height: '240px', backgroundColor: '#111', borderTop: '1px solid #222', borderLeft: '1px solid #222', borderRight: '1px solid #222', position: 'relative', overflow: 'hidden' }}>
                     <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  {/* Card Content Box */}
                  <div style={{ border: '1px solid #222', padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', color: '#666', fontSize: '0.75rem' }}>{project.id}</span>
                      <div style={{ height: '1px', width: '24px', backgroundColor: '#333' }}></div>
                    </div>
                    
                    <h3 style={{ fontFamily: 'var(--font-main)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: '#eee' }}>{project.title}</h3>
                    <p style={{ fontFamily: 'var(--font-main)', fontSize: '0.75rem', color: '#777', marginBottom: '24px' }}>{project.type}</p>
                    
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#888', marginBottom: '40px', lineHeight: 1.8, flexGrow: 1 }}>{project.desc}</p>
                    
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', backgroundColor: 'transparent', color: '#aaa', padding: '4px 0', fontWeight: 600, fontSize: '0.65rem', letterSpacing: '2px', cursor: 'pointer', border: 'none', borderBottom: '1px solid #333', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                      VISIT WEBSITE <span>&rarr;</span>
                    </a>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{ backgroundColor: '#f4f4f4', color: '#000', padding: '60px 40px', borderTop: '1px solid #ddd' }}>
          <div className="responsive-flex" style={{ display: 'flex', gap: '40px' }}>
            
            {/* Left Header Column */}
            <div className="mobile-w-full" style={{ width: '280px', flexShrink: 0, paddingRight: '40px' }}>
               <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#555', letterSpacing: '2px', marginBottom: '16px', fontWeight: 700 }}>WHAT WE DO</h4>
               <div style={{ width: '24px', height: '1px', backgroundColor: '#999', marginBottom: '32px' }}></div>
               
               <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 600, lineHeight: 1.2, marginBottom: '48px', color: '#111' }}>
                 We build digital<br/>solutions end-to-end.
               </h2>
               
               <a href="#services" style={{ fontFamily: 'var(--font-mono)', backgroundColor: 'transparent', color: '#000', border: '1px solid #000', padding: '16px 24px', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
                 SEE ALL SERVICES <span>&rarr;</span>
               </a>
            </div>
            
            {/* Right Services Grid (4 columns) */}
            <div className="responsive-grid-4 mobile-border-top" style={{ flex: '1', display: 'grid', borderLeft: '1px solid #e0e0e0' }}>
              {[
                { 
                  id: '01', title: 'Web Development', desc: 'Fast, responsive and modern websites that represent your brand perfectly.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="14" y1="4" x2="10" y2="20"></line></svg>
                },
                { 
                  id: '02', title: 'Web Applications', desc: 'Custom web apps, dashboards and portals built for your business workflows.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                },
                { 
                  id: '03', title: 'Mobile Apps', desc: 'Cross-platform mobile apps that bring your ideas to your users\' pockets.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                },
                { 
                  id: '04', title: 'Custom Software', desc: 'Tailored software solutions built exactly the way your business needs.',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                }
              ].map((service) => (
                <div key={service.id} className="service-item" style={{ borderLeft: '1px solid #ddd', padding: '0 32px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: '#111', marginBottom: '40px' }}>{service.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-main)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', color: '#111' }}>{service.title}</h3>
                  
                  <p style={{ fontFamily: 'var(--font-main)', fontSize: '0.9rem', color: '#444', marginBottom: '40px', flexGrow: 1, lineHeight: 1.6 }}>{service.desc}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#111', fontSize: '0.75rem', fontWeight: 600 }}>{service.id}</span>
                    <div style={{ height: '1px', width: '24px', backgroundColor: '#aaa' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
