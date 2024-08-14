// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import headshot from '../assets/images/Calvin.JPG';
import linkedinIcon from '../assets/images/Linkln.png';
import githubIcon from '../assets/images/github-mark-white.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggling menu:', !isOpen); // Debug statement
    setIsOpen(!isOpen);
  };

  console.log('Header component is rendering with isOpen:', isOpen); // Debug statement

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="profile">
        <img src={headshot} alt="Calvin Nguyen" className="headshot" />
        <h1>Calvin Nguyen</h1>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/calvin-n-990a4a193" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/narucalo" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

