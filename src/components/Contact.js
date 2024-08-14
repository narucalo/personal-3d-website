// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact Information</h2>
        <p> (813) 553-0350</p>
        <p> <a href="mailto:caltannguyen@gmail.com">caltannguyen@gmail.com</a></p>
        <a href="/Resume.pdf" download="Calvin_Nguyen_Resume.pdf" className="resume-link">Download My Resume</a>
      </div>
    </section>
  );
}

export default Contact;
