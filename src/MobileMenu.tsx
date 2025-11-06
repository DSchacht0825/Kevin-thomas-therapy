import React, { useState, useEffect } from 'react';

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'approach', 'expectations', 'faqs'];
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        style={{
          position: 'fixed',
          right: '1rem',
          top: '1.5rem',
          background: '#6b8e9e',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '4px',
          color: 'white',
          fontSize: '1.4rem',
          cursor: 'pointer',
          padding: '0.5rem 0.8rem',
          minHeight: '40px',
          minWidth: '40px',
          zIndex: 999999,
          display: 'none',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}
        className="mobile-only-button"
      >
        ☰
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: '0',
            right: '0',
            backgroundColor: '#6b8e9e',
            zIndex: 99999,
            padding: '20px 0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                style={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  fontSize: '18px',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: activeSection === 'home' ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#approach"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('approach');
                }}
                style={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  fontSize: '18px',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: activeSection === 'approach' ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                My Approach
              </a>
            </li>
            <li>
              <a
                href="#expectations"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('expectations');
                }}
                style={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  fontSize: '18px',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: activeSection === 'expectations' ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                What to Expect
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
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  fontSize: '18px',
                  backgroundColor: activeSection === 'faqs' ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;