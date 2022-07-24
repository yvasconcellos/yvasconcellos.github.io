import React from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.5
  });

  return(
<div
      className={`flex
      flex-col
      justify-center	
      h-screen items-center w-2/3
      p-10
      ${inView ? 'fade-in' : 'fade-out'}
      `}
      
      id="about"
      ref={ref} 
      > 
      <h1
        className="text-center py-10
        text-topics
        "
        >About Me</h1>

      <img 
      className='h-1/3 rounded-full'
      src='https://premierleaguebrasil.com.br/wp-content/uploads/2021/07/Salah-Profile-Photo-300x300-1.png' 
      alt='fotoperfil'
      />
      <p
      className='p-12 italic
      text-center
      '
      >
        
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap i
        
        </p>
      </div>
  )
}

export default About