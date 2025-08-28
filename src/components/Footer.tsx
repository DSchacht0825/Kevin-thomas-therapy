import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Daniel Schacht Design. All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/approach">My Approach</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/expectations">What to Expect</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;