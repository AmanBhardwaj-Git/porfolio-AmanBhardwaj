"use client"

import React, { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface Props {
  src: string;
  title: string;
  description: string;

}


const ProjectCard = ({ src, title, description }: Props) => {


  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg hover:border border-[#2A0E61] z-20 `}
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
        className="w-full  object-contain  blur-lg hover:filter-none"
      />

      <div className={`relative p-4 `}>
        <h1 className="text-xl font-semibold text-yellow-800">{title}</h1>
        <p className="mt-2 text-zinc-400 flex gap-2 ">
          <a href={description}>Visit Link  </a>
          <BsArrowUpRight />
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
