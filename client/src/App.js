import React from 'react';
// import ContactForm from './components/ContactForm'
import Header from './components/Header'
import './App.css';
import Projects from './components/Projects';
import About from './components/About'
import Footer from './components/Footer'
import Interests from './components/Interests';
import MyForm from './components/MyForm';

function App() {

  
  return (
    <div className="">
      <Header />
      <Interests />
      <About/>
      <Projects />
      <MyForm/>
      <Footer />
    </div>
  );
}

export default App;
