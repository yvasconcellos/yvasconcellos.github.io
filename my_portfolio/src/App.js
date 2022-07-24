import React from 'react';
import About from './components/component/About';
import HamburguerMenu from './components/component/Hamburguer';
import Projects from './components/component/Projects';
import SideApresentation from './components/component/SideApresentation';
import Skills from './components/component/Skills';

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
