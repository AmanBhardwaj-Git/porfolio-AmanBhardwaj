"use client"

import React, { useRef } from "react";

interface Props {
  src: string;
  title: string;
  description: string;

}


const ProjectCard = ({ src, title, description }: Props) => {


  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg hover:border   border-[#2A0E61] `}
    >
      <video
        preload="false"
        playsInline
        loop
        muted
        autoPlay
        src={src}
        title={title}
        width={1000}
        height={1000}
        className="w-full object-contain  blur-lg hover:filter-none"
      />

      <div className={`relative p-4 `}>
        <h1 className="text-2xl font-semibold text-yellow-800">{title}</h1>
        <p className="mt-2 text-yellow-600 ">
          <a href={description}>Visit Link</a>
        
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
