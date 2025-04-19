import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero'; // مهم جدًا
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';

function App() {
  return (
    <div className="white_mode" id="home">
      <section className="hero">
        <Header />
        <Hero /> 
      </section>

      <main>
      <About />
      <Skills />
      <Services />
      </main>

      
    </div>
  );
}

export default App;
