import React, { useState } from "react";
import triviaImg from '../images/trivia.png'

function ProjectTrivia() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return(
    <div className="flex flex-col items-center static" 
      onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <a href="https://trivia-time-tau.vercel.app/"
      target='_blank'
      rel="noreferrer"
      >
      <img  src={triviaImg} alt='Trivia' />
      
      {isHovering && 
        <p className='italic
        text-center
        text-white
        absolute
        bottom-8
        bg-slate-600/50
        '>
            A Trivia App Game made with React, Redux, Api.
        </p>
      }
      </a>
    </div>
  )
}

export default ProjectTrivia