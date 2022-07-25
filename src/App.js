import React from 'react';
import About from './components/About';
import HamburguerMenu from './components/Hamburguer';
import Projects from './components/Projects';
import SideApresentation from './components/SideApresentation';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <HamburguerMenu />
      <SideApresentation />
    <div className='flex flex-col items-end'>
      <About  />
      <Projects />
      <Skills  />
    </div>
    </>
  );
}

export default App;
