// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Calvin Nguyen. All rights reserved.</p>
      <p>
        <a href="https://www.linkedin.com/in/calvin-n-990a4a193" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="https://github.com/narucalo" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </footer>
  );
}

export default Footer;
