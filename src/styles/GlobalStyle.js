// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: #121212;
    color: #e0e0e0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    scroll-behavior: smooth;
    width: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  #root {
    height: 100%;
  }

  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
  }

  /* For smaller screens */
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: center;
    }

    .nav-list {
      flex-direction: column;
      align-items: center;
    }

    .nav-item {
      margin-bottom: 10px;
    }

    .profile {
      margin-top: 20px;
      text-align: center;
    }

    .headshot {
      width: 80px; /* Smaller headshot size */
      height: 80px;
    }

    .social-links {
      margin-top: 10px;
    }

    .social-icon {
      width: 25px;
      height: 25px;
      margin: 0 5px;
    }

    h1 {
      font-size: 20px; /* Adjusted font size */
    }

    .contact-info, .button {
      width: 90%; /* Full width on smaller screens */
      margin: 10px 0;
    }
  }

  /* For larger screens */
  @media (min-width: 769px) {
    .section {
      height: 100vh;
    }
  }

  .contact-info, .button {
    background-color: #03dac6;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-top: 20px;
    display: inline-block;
    text-decoration: none;
  }

  .contact-info:hover, .button:hover {
    background-color: #121212;
    color: yellow;
  }

  .footer {
    padding: 20px;
    text-align: center;
    border-top: 1px solid #444;
    background-color: #121212;
  }

  .footer p {
    margin: 0;
    color: white;
  }

  .footer p:hover {
    color: yellow;
  }

  h1, h2, p {
    color: white;
  }

  h1:hover, h2:hover, p:hover {
    color: yellow;
  }
`;

export default GlobalStyle;
