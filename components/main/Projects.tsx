
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
       Samples 
      </h1>
      <h5 className="text-md md:text-lg cursive px-5 pb-5 text-white" >Note: These are just a demo and doesn't claim any of my end product </h5>
      <div className={`h-screen md:h-full w-full flex flex-col md:flex-row gap-10 px-10 md:px-40 rounded-xl `}>
        <ProjectCard
          src="/homeAbsite.mp4"
          title="Prev-ABSite"
          description="https://amanbhardwaj-git.github.io/oldABsite/index.html"
         
          />
        <ProjectCard
         
          src="/NextWebsite.mp4.mp4"
          title="Cuberto-Home |Clone"
          description="https://amanbhardwaj-git.github.io/cubertoClone/"
          />
        <ProjectCard
         
          src="/rejouice.mp4"       
          title="Rejouice-Home |Clone"
          description="https://amanbhardwaj-git.github.io/rejouiceCloneHomeAnimation/"
        />
      </div>
    </div>
  );
};

export default Projects;
