import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

function Footer() {
  return (
    <footer
      className="
    fixed
    bottom-0
    w-1/3
    left-0
    flex
    flex-col
    p-2
    items-center"
    >
      <p
      className='text-white'
      >{`Let's work together!`}</p>
      <div
      className='flex'
      >

      <a 
      className='social-buttons'
      href="https://github.com/yvasconcellos" target="_blank" rel="noreferrer">
        <img src={ github } alt="github" className="w-8 m-1" />
      </a>

      <a 
        className='social-buttons'
        href="https://www.linkedin.com/in/yvasconcellos/" target="_blank" rel="noreferrer">
        <img src={ linkedin } alt="linkedin" className="w-8 m-1" />

      </a>
        </div>
    </footer>
  );
}

export default Footer;
