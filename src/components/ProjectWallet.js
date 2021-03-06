import React, { useState } from "react";
import walletImg from '../images/capaWallet.png'

function ProjectWallet() {
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
      <a href="https://hylian-wallet.vercel.app/"
      target='_blank'
      rel="noreferrer"
      >
      <img  src={walletImg} alt='Wallet' />
      
      {isHovering && 
        <p className='italic
        text-center
        text-white
        absolute
        bottom-8
        bg-slate-600/50
        '>
            A The Legend of Zelda thematic currency exchange management wallet.
        </p>
      }
      </a>
    </div>
  )
}

export default ProjectWallet