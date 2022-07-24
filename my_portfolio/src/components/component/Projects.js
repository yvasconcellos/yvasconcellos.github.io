import React from "react";
import ProjectWallet from "./ProjectWallet";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";


import "./styles.css";
import { useInView } from "react-intersection-observer";

function Projects() {

  const { ref, inView } = useInView({
    threshold: 0.5
  });

  return(
      <div 
      className={`w-2/3
      h-screen
      flex
      flex-col
      justify-center
      p-10
      ${inView ? 'fade-in' : 'fade-out'}
      `}
      
      id="projects"
      ref={ref}
      >
        <h1
        className="text-center py-10
        text-topics"
        >Projects</h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="
        w-1/3
        "
      >
        <SwiperSlide>
          <ProjectWallet />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWallet />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWallet />
        </SwiperSlide>
   
      </Swiper>
    </div>
  )
}

export default Projects