import React from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.5
  });

  return(
    <div className={`flex
      flex-col
      justify-center	
      h-screen items-center w-2/3
      p-10
      ${inView ? 'fade-in' : 'fade-out'}
      `}
      id="about"
      ref={ref} > 
      <h1
        className="text-center py-10
        text-topics
        ">
          About Me
      </h1>
      <img 
      className='h-1/3 rounded-full'
      src='https://media-exp1.licdn.com/dms/image/C4E03AQECG_1fW5H3xA/profile-displayphoto-shrink_200_200/0/1648737707457?e=1664409600&v=beta&t=7Fhq-HAJ_4yZ_qXh3a92t_JnlSZp_GRteIoWNHqIwaI' 
      alt='fotoperfil'
      />
      <p
      className='p-12 italic text-center'
      >
        Born and raised in Bahia since 1994. {"I'm"} currently a front end software engineer. I have a degree on Mechanical Engineering, but coding has become my preciooous {"(smeagle's voice)"} thing. 
        Inventing and creating everytime and everywhere, {"I'm "}crazy about games since my first time with Nintendo Entertainment System and Marios Bros 3 (aka: best Mario game ever).
      </p>
    </div>
  )
}

export default About