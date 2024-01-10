import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full max-w-[100vw] overflow-hidden" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="sm:rotate-180 absolute sm:top-[-340px]  h-full w-full sm:left-0 z-[1] object-cover 
        rotate-[145deg] top-[-240px] sm:scale-[1] scale-[1.2] left-[-70px] sm:brightness-50 brightness-[0.3]
        "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
