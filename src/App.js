// src/App.js
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import FrontPageScene from './components/FrontPageScene';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  console.log("App component is rendering");

  return (
    <>
      <GlobalStyle />
      <Header />
      <FrontPageScene />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
