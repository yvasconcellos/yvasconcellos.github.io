import React from "react";
import Footer from './Footer'

function SideApresentation() {

  return(
    <div className="fixed w-full">
      <div className='flex flex-col h-screen px-12 w-1/3 bg-orange-600 justify-evenly'>
        <div className="h-1/2 flex justify-center items-center">
          <p className="
          text-slate-100
          text-5xl
          text-apresentation
          ">Hello, <br />
          i'm Yuri Vasconcellos <br /> 
          and this is my portfolio!</p>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default SideApresentation