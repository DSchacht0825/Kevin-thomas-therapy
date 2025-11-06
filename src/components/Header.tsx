import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'approach', 'faqs'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'transparent',
        padding: '5rem 0'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Center Logo */}
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <img
            src="/images/TshepoLogo-transparent.png"
            alt="Tshepo Logo"
            style={{
              height: '120px',
              width: 'auto',
              opacity: 0.95
            }}
          />
        </div>

        {/* Desktop Navigation - Right */}
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '1.5rem',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            <li>
              <a
                href="#approach"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('approach');
                }}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: activeSection === 'approach' ? 500 : 400,
                  transition: 'all 0.3s ease',
                  opacity: activeSection === 'approach' ? 1 : 0.85,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'approach') {
                    e.currentTarget.style.opacity = '0.85';
                  }
                }}
              >
                My Approach
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('faqs');
                }}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: activeSection === 'faqs' ? 500 : 400,
                  transition: 'all 0.3s ease',
                  opacity: activeSection === 'faqs' ? 1 : 0.85,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== 'faqs') {
                    e.currentTarget.style.opacity = '0.85';
                  }
                }}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('footer')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 400,
                  transition: 'all 0.3s ease',
                  opacity: 0.85,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.85';
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Book Now Button */}
          <a
            href="https://care.headway.co/providers/kevin-thomas-2"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#6b8e9e',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: '500',
              padding: '0.75rem 1.75rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.5px',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#5a7d8d';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#6b8e9e';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            }}
          >
            Book Now
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;