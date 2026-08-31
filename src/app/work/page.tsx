import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Work() {
  const projects = [
    { id: '01', title: 'Parshuram Seashore Cafe and Rooms', type: 'Business Website', desc: 'A clean, modern website for a local business to represent their services and build trust online.', link: 'https://parashuramhomestay.com/', image: '/parshuramhomestay.png' },
    { id: '02', title: 'NexTap', type: 'NFC Product Platform', desc: 'E-commerce platform for NFC review cards and smart products for modern businesses.', link: 'https://nextap.whynotdev.in/', image: '/nextap.png' },
    { id: '03', title: 'Havoc EFS', type: 'Business Website', desc: 'Educational website for a young learners program focused on aeromodelling, RC flying, flight simulation, RC cars, and F1 & GT sim racing.', link: 'https://havocefs.in/', image: '/havocefs.png' },
    { id: '04', title: 'Havoc Aviation', type: 'Business Website', desc: 'A professional and comprehensive digital platform for aviation services, flight training, and aerial solutions.', link: 'https://havocaviation.in/', image: '/havocaviation.png' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#050505', color: '#fff' }}>
      <Navbar />
      
      <main style={{ flexGrow: 1, padding: '120px 40px 80px', maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: '80px' }}>
          <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#888', letterSpacing: '2px', marginBottom: '16px' }}>PORTFOLIO</h4>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', fontWeight: 600, lineHeight: 1.1, marginBottom: '32px', color: '#eee' }}>
            All Projects
          </h1>
          <div style={{ width: '40px', height: '1px', backgroundColor: '#444', marginBottom: '32px' }}></div>
          <p style={{ fontFamily: 'var(--font-mono)', color: '#888', fontSize: '1rem', lineHeight: 1.8, maxWidth: '400px' }}>
            A complete collection of things we've built, deployed, and delivered.
          </p>
        </div>

        <div className="responsive-grid-3" style={{ display: 'grid', gap: '24px' }}>
          {projects.map((project) => (
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
      </main>
      
      <Footer />
    </div>
  );
}
