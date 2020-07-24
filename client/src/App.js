import React from 'react';
import ContactForm from './components/ContactForm'
import Header from './components/Header'
import './App.css';
import Projects from './components/Projects';
import About from './components/About'
import Footer from './components/Footer'

function App() {

  
  return (
    <div className="">
      <Header />
      <About
      id="about"
      />
      <Projects />
      <ContactForm
      id="contact"
      />
      <Footer />
    </div>
  );
}

export default App;
