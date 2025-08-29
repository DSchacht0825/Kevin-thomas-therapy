import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
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
              <Link
                to="/"
                onClick={closeMenu}
                style={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  fontSize: '18px',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: isActive('/') ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/approach"
                onClick={closeMenu}
                style={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  fontSize: '18px',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: isActive('/approach') ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                My Approach
              </Link>
            </li>
            <li>
              <Link
                to="/expectations"
                onClick={closeMenu}
                style={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  fontSize: '18px',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  backgroundColor: isActive('/expectations') ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                What to Expect
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                style={{
                  display: 'block',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  fontSize: '18px',
                  backgroundColor: isActive('/contact') ? 'rgba(255,255,255,0.2)' : 'transparent'
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;