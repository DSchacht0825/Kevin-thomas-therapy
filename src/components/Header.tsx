import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-layout">
          {/* Desktop Navigation - Left */}
          <nav className="nav-left desktop-nav">
            <ul>
              <li>
                <Link to="/" className={isActive('/') ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Center Title */}
          <div className="header-center"></div>

          {/* Desktop Navigation - Right */}
          <nav className="nav-right desktop-nav">
            <ul>
              <li>
                <Link to="/approach" className={isActive('/approach') ? 'active' : ''}>
                  My Approach
                </Link>
              </li>
              <li>
                <Link to="/expectations" className={isActive('/expectations') ? 'active' : ''}>
                  What to Expect
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

        </div>

      </div>
    </header>
  );
};

export default Header;