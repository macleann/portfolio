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
      <div id="scroll-container">
        <NavBar />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
