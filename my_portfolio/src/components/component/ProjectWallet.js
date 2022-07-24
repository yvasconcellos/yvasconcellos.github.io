import React, { useState } from "react";
import walletImg from '../../images/capaWallet.png'

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
      <a href="/wallet">

      <img  src={walletImg} alt='Wallet' />
      {isHovering && <p className='italic
    text-center
    text-white
    absolute
    bottom-10
    '>A cost and exchange management portfolio using react, tailwind and redux
    </p>}
    </a>
    </div>
    
  )
}

export default ProjectWallet