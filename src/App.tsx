import React from 'react';
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Stack } from './components/stack/Stack';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';


function App() {
  return (
      <>
      <NavBar />
      <div className="scroll-container">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </div>
      </>
  );
}

export default App;
