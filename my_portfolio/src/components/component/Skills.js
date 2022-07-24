import React from "react";
import htmllogo from '../../images/htmllogo.png'
import jestlogo from '../../images/jest.png'
import csslogo from '../../images/csslogo.png'
import jslogo from '../../images/jslogo.png'
import reactlogo from '../../images/reactlogo.png'
import reduxlogo from '../../images/redux.png'
import tailwindlogo from '../../images/tailwind.png'
import { useInView } from "react-intersection-observer";


function Skills() {

  const { ref, inView } = useInView({
    threshold: 0.5
  });
  
  return(
    <div
    className="w-2/3
      h-screen
      p-10
      "
      id="skills"
      ref={ref} 
      >
        <div
        className={`flex
        flex-col
        items-center
        ${inView ? 'fade-in' : 'fade-out'}
        `}
        >
        <h1 className="text-center py-10
        text-topics"
        >Skills</h1>
        <div className="flex flex-wrap w-1/2 justify-center">
        <>
          <img  className="w-1/3" src={htmllogo} alt=" logo"/>
          <img className="w-1/3"  src={csslogo} alt=" logo"/>
          <img className="w-1/3" src={jslogo} alt=" logo"/>
          <img className="w-1/3" src={reactlogo} alt=" logo"/>
          <img className="w-1/3" src={reduxlogo} alt=" logo"/>
          <img className="w-1/3" src={jestlogo} alt=" logo"/>
          <img className="w-1/3" src={tailwindlogo} alt=" logo"/>
        </>
        </div>
        </div>
    </div>
  )
}

export default Skills