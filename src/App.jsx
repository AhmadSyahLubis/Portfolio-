import { useState, useEffect, useRef } from 'react';
import './index.css';
import './App.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

const projects = [
  {
    id: 1,
    title: 'Zoom Monitor Website',
    description: 'Sistem monitoring berbasis web untuk Zoom meeting yang dikembangkan menggunakan ekosistem Laravel modern. Dilengkapi fitur dashboard interaktif, manajemen jadwal meeting, pencarian & booking ruangan, serta monitoring cloud recording secara real-time.',
    tags: ['Laravel 11', 'Livewire 4', 'Tailwind CSS 4', 'MySQL'],
    cover: '/assets/project/zoom-monitor/dashboard.png',
    screenshots: [
      { src: '/assets/project/zoom-monitor/login page.png', caption: 'Login Page' },
      { src: '/assets/project/zoom-monitor/dashboard.png', caption: 'Dashboard Utama' },
      { src: '/assets/project/zoom-monitor/schedule.png', caption: 'Jadwal Meeting' },
      { src: '/assets/project/zoom-monitor/search and booking.png', caption: 'Search & Booking' },
      { src: '/assets/project/zoom-monitor/cloud recording.png', caption: 'Cloud Recording' },
    ]
  },
  {
    id: 2,
    title: 'BRM QuickAccess',
    description: 'Aplikasi internal berbasis web untuk pengelolaan memo dinas, integrasi akses cepat aplikasi kerja, dan manajemen hierarki user di lingkungan perusahaan dengan sistem otorisasi multi-role (Admin & User).',
    tags: ['Laravel', 'Alpine.js', 'Tailwind CSS', 'PostgreSQL'],
    cover: '/assets/project/BRM-QuickAccess/dashboard BRM.png',
    screenshots: [
      { src: '/assets/project/BRM-QuickAccess/dashboard BRM.png', caption: 'Dashboard BRM' },
      { src: '/assets/project/BRM-QuickAccess/memo.png', caption: 'Halaman Memo' },
      { src: '/assets/project/BRM-QuickAccess/kelola memo (admin).png', caption: 'Kelola Memo (Admin)' },
      { src: '/assets/project/BRM-QuickAccess/kelola aplikasi (admin).png', caption: 'Kelola Aplikasi (Admin)' },
      { src: '/assets/project/BRM-QuickAccess/kelola user (admin).png', caption: 'Kelola User (Admin)' },
    ]
  }
];

const certifications = [
  {
    id: 1,
    title: 'Assistant Web Developer',
    issuer: 'BNSP',
    image: '/assets/sertif/BNSP Web Development.png',
    document: '/assets/sertif/BNSP Web Development.pdf'
  },
  {
    id: 2,
    title: 'MagangHub Batch 3',
    issuer: 'PTPN IV Regional 1',
    image: '/assets/sertif/sertif maganghub.png',
    document: '/assets/sertif/sertif maganghub.pdf'
  },
  {
    id: 3,
    title: 'Database Course',
    issuer: 'Multimatics - ITS',
    image: '/assets/sertif/multimatics-database-AhmadSyahLubis.png',
    document: '/assets/sertif/multimatics-database-AhmadSyahLubis.pdf'
  },
  {
    id: 4,
    title: 'TOEFL Score 450',
    issuer: 'Briton English Education',
    image: '/assets/sertif/sertif toefl ahmad.png',
    document: '/assets/sertif/sertif toefl ahmad.pdf'
  },
  {
    id: 5,
    title: 'Belajar Dasar-Dasar SQL',
    issuer: 'Dicoding Indonesia',
    image: '/assets/sertif/dicoding-sql.png',
    document: '/assets/sertif/dicoding-sql.pdf'
  }
];

// Intersection Observer Hook for fade-in animations
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

function ProjectScrollShowcase({ project, index }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top;
      const windowHeight = window.innerHeight;
      
      if (scrollProgress >= 0) {
        let idx = Math.floor(scrollProgress / windowHeight);
        if (idx < 0) idx = 0;
        if (idx >= project.screenshots.length) idx = project.screenshots.length - 1;
        setActiveIndex(idx);
      } else {
        setActiveIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [project.screenshots.length]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        height: `${project.screenshots.length * 100}vh`, 
        position: 'relative',
        marginBottom: '60px'
      }}
    >
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          width: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'radial-gradient(circle at center, rgba(30, 30, 35, 0.6) 0%, rgba(10, 10, 12, 0.98) 70%, #050505 100%)',
          padding: '100px 20px 40px 20px',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ maxWidth: '1200px', width: '100%', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', zIndex: 50 }}>
            <div style={{ flex: '1 1 400px' }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.4rem, 4vw, 2.5rem)', fontWeight: 900, color: '#fff', margin: '0 0 12px 0' }}>
                  <span style={{ color: 'var(--accent-red)', marginRight: '10px' }}>0{index + 1}.</span>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.7rem', padding: '5px 12px', borderRadius: '50px',
                      background: 'rgba(255,255,255,0.08)', color: '#eee',
                      border: '1px solid rgba(255,255,255,0.15)', fontWeight: 500
                    }}>{tag}</span>
                  ))}
                </div>
            </div>
            <div style={{ flex: '1 1 350px', display: 'flex', alignItems: 'center' }}>
                <p style={{ color: '#bbb', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', margin: 0, lineHeight: 1.6, background: 'rgba(0,0,0,0.3)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {project.description}
                </p>
            </div>
        </div>

        {/* Modal container */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          flex: 1,
          minHeight: '0',
          perspective: '1500px'
        }}>
          {project.screenshots.map((shot, i) => {
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;
            const isFuture = i > activeIndex;

            let transform = 'translateY(0) scale(1) rotateX(0deg)';
            let opacity = 1;
            let zIndex = 10;

            if (isActive) {
              transform = 'translateY(0) scale(1) rotateX(0deg)';
              opacity = 1;
              zIndex = 20;
            } else if (isPast) {
              transform = 'translateY(-100px) scale(1.05) rotateX(5deg)';
              opacity = 0;
              zIndex = 10;
            } else if (isFuture) {
              const offset = i - activeIndex;
              transform = `translateY(${offset * 35}px) scale(${1 - offset * 0.05})`;
              opacity = offset <= 2 ? 1 - (offset * 0.3) : 0;
              zIndex = 20 - offset;
            }

            return (
              <div key={i} className="stacked-modal-card" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.6s ease',
                transform,
                opacity,
                zIndex,
                boxShadow: isActive ? '0 30px 80px rgba(0,0,0,0.8)' : '0 10px 40px rgba(0,0,0,0.5)',
                visibility: (isPast || (isFuture && i - activeIndex > 2)) ? 'hidden' : 'visible'
              }}>
                <div className="modal-chrome-bar">
                  <div className="modal-dots">
                    <span className="modal-dot modal-dot-red" />
                    <span className="modal-dot modal-dot-amber" />
                    <span className="modal-dot modal-dot-green" />
                  </div>
                  <div className="modal-caption-pill">
                    <span style={{ color: 'var(--accent-red)', fontSize: '0.85rem' }}>⚡</span>
                    <span>{shot.caption}</span>
                  </div>
                  <span className="modal-counter-badge">
                    0{i + 1} / 0{project.screenshots.length}
                  </span>
                </div>
                <div className="modal-image-wrapper" style={{ height: 'calc(100% - 50px)' }}>
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    loading="eager"
                    className="modal-image"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', background: '#050505' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


function App() {
  useScrollAnimation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Sticky Navbar on Scroll */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        background: 'rgba(10, 10, 10, 0.75)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--glass-border)', padding: '16px 0',
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        transform: scrolled ? 'translateY(0)' : 'translateY(-10px)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.3rem', letterSpacing: '2px', fontFamily: "'Syne', sans-serif" }}>
            <span className="text-gradient">AHMAD</span> SYAH
          </h2>
          <div style={{ display: 'flex', gap: '28px' }}>
            {navLinks.map(link => (
              <a key={link.name} href={link.href} style={{ fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
                 onMouseOver={(e) => e.target.style.color = 'var(--accent-red)'}
                 onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section - Magazine Editorial Style */}
      <section id="home" style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between', 
        background: 'radial-gradient(ellipse 75% 65% at 50% 38%, #5a0707 0%, #200303 45%, #050505 85%)',
        overflow: 'hidden',
        padding: '36px 48px 28px',
        boxSizing: 'border-box'
      }}>
        {/* Ambient Red Lighting Behind Portrait */}
        <div style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.42) 0%, rgba(153, 27, 27, 0.12) 55%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        {/* Top Header Row */}
        <header className="hero-header">
          <span style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)', fontWeight: 700, letterSpacing: '2.5px', color: '#eaeaea', textTransform: 'uppercase' }}>
            AHMAD SYAH LUBIS
          </span>
          <span style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)', fontWeight: 600, letterSpacing: '2px', color: '#888888' }}>
            ©2026
          </span>
        </header>

        {/* Editorial Sub-Nav Bar (Cleanly placed below top bar, matching reference) */}
        <div className="hero-subnav">
          <div style={{ display: 'flex', gap: '28px' }}>
            <a href="#home" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: '#fff', textTransform: 'uppercase' }}>HOME</a>
            <a href="#projects" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', color: '#999', textTransform: 'uppercase', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='#999'}>PROJECTS</a>
            <a href="#certifications" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', color: '#999', textTransform: 'uppercase', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='#999'}>CERTIFICATIONS</a>
          </div>
          <div style={{ display: 'flex', gap: '28px' }}>
            <a href="#contact" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', color: '#999', textTransform: 'uppercase', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='#999'}>ABOUT</a>
            <a href="https://github.com/ahmadsyahlubis" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', color: '#999', textTransform: 'uppercase', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='#999'}>GITHUB</a>
            <a href="#contact" style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', color: '#999', textTransform: 'uppercase', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#fff'} onMouseOut={e => e.target.style.color='#999'}>CONTACT</a>
          </div>
        </div>

        {/* Giant Background Typography */}
        <h1 className="hero-title">
          AHMAD
        </h1>

        {/* Foreground Transparent Portrait */}
        <div className="hero-img-container">
          <img 
            src="/assets/foto ahmad/ahmad_nobg.png" 
            alt="Ahmad Syah Lubis" 
            style={{ 
              maxHeight: '100%', 
              width: 'auto', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.9)) brightness(1.02)'
            }} 
          />
        </div>

        {/* Left Side Content - Upper */}
        <div className="hero-text-left-upper">
          <p style={{ fontSize: '0.85rem', color: '#c8c8c8', lineHeight: '1.6', margin: 0 }}>
            We build <strong style={{ color: '#ffffff', fontWeight: 700 }}>digital solutions</strong> through robust full stack architecture and modern UI design.
          </p>
        </div>

        {/* Left Side Content - Lower */}
        <div className="hero-text-left-lower">
          <p style={{ fontSize: '0.82rem', color: '#909090', lineHeight: '1.6', margin: 0 }}>
            A creative software engineer shaping modern full stack architectures.
          </p>
        </div>

        {/* Right Side Content - Upper */}
        <div className="hero-text-right-upper">
          <p style={{ fontSize: '1rem', color: '#e0e0e0', margin: 0, fontWeight: 700, letterSpacing: '0.5px' }}>
            Full Stack Engineer
          </p>
        </div>

        {/* Circular "START A PROJECT" Button */}
        <a href="#contact" className="hero-start-btn">
          <span>START A</span>
          <span>PROJECT</span>
        </a>

        {/* Bottom Floating Pill Badges */}
        <footer className="hero-footer-pills">
          <a href="#contact" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 22px', 
            borderRadius: '50px', 
            background: 'rgba(255, 255, 255, 0.08)', 
            backdropFilter: 'blur(12px)', 
            border: '1px solid rgba(255, 255, 255, 0.12)', 
            color: '#eaeaea', 
            fontSize: '0.78rem', 
            fontWeight: 600, 
            letterSpacing: '0.5px', 
            textDecoration: 'none',
            transition: 'background 0.2s ease, border-color 0.2s ease'
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          }}>
            <span style={{ fontSize: '0.9rem' }}>↗</span> Buka Profil & CV
          </a>

          <a href="#projects" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 22px', 
            borderRadius: '50px', 
            background: 'rgba(255, 255, 255, 0.08)', 
            backdropFilter: 'blur(12px)', 
            border: '1px solid rgba(255, 255, 255, 0.12)', 
            color: '#eaeaea', 
            fontSize: '0.78rem', 
            fontWeight: 600, 
            letterSpacing: '0.5px', 
            textDecoration: 'none',
            transition: 'background 0.2s ease, border-color 0.2s ease'
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          }}>
            Explore Projects ⚡
          </a>
        </footer>
      </section>

      {/* Projects Section - Unified Stacked Showcase */}
      <section id="projects" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="container" style={{ marginBottom: '50px' }}>
          <div className="animate-on-scroll" style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '3px', color: 'var(--accent-red)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>PORTFOLIO SHOWCASE</p>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '16px', lineHeight: 1.1 }}>Featured <span className="text-gradient">Projects</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              Koleksi project pilihan dengan live stacked preview. Scroll ke bawah untuk menjelajahi alur dan tampilan interface setiap aplikasi.
            </p>
          </div>
        </div>

        {/* Stacked Project Presentations using Scroll */}
        {projects.map((project, pIndex) => (
          <ProjectScrollShowcase key={`project-stack-${project.id}`} project={project} index={pIndex} />
        ))}
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container" style={{ padding: 'var(--section-spacing) 0' }}>
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>My <span className="text-gradient">Certifications</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Professional achievements and skills verified.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '40px' }}>
          {certifications.map((cert, index) => (
            <div key={cert.id} className={`glass-card animate-on-scroll delay-${index * 100}`} style={{ display: 'flex', flexDirection: 'column', padding: '24px' }}>
              <div style={{ width: '100%', height: '280px', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px', border: '1px solid var(--glass-border)', position: 'relative', group: 'cert-img' }}>
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                     onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} 
                     onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <a href={cert.document} target="_blank" rel="noreferrer" style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.5)', opacity: 0, transition: 'opacity 0.3s ease', color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none'
                }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0}>
                  View Certificate ↗
                </a>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{cert.title}</h3>
              <p style={{ color: 'var(--accent-light)', fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" style={{ borderTop: '1px solid var(--glass-border)', padding: '80px 0 40px', background: 'var(--bg-secondary)', marginTop: '80px' }}>
        <div className="container animate-on-scroll" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Let's Work <span className="text-gradient">Together</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 40px' }}>
            Tertarik untuk berkolaborasi atau memiliki proyek yang ingin dikembangkan? Jangan ragu untuk menghubungi saya melalui email atau media sosial.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '60px' }}>
            <a href="mailto:ahmadsyahlubis62@gmail.com" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-light)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>Email</a>
            <a href="https://linkedin.com/in/ahmadsyahlubis" target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#0a66c2'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>LinkedIn</a>
            <a href="https://github.com/ahmadsyahlubis" target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--accent-red)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>GitHub</a>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © 2026 Ahmad Syah Lubis. All rights reserved.
          </p>
        </div>
      </footer>

    </>
  );
}

export default App;
