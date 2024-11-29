"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { BsArrowDownCircle } from "react-icons/bs";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#37a4f3a8] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#3ee7fa] mr-[1px] h-5 w-5" />
          <h1 className="Welcome-text text-sm md:text-lg px-2">
           Aman Bhardwaj
          </h1>
          <SparklesIcon className="text-[#3ee7fa] mr-[1px] h-5 w-5 scale-x-[-1]" />
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
           Welcoming   
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
                to the  Hub{" "}
           - Fol{''}io
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a MERN Stack Developer , who makes SEO friendly, Optimised , Modern Animations enabled Website,
         which &apos;re all device reponsive. Contact For more!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-md flex text-white cursor-pointer rounded-lg justify-around items-center max-w-[200px]"
          href="/Resume _ Aman Bhardwaj.pdf" 
          download=""
        >
          Download Resume !!<BsArrowDownCircle />
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        /> 
             </motion.div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="absolute w-[50%] h-[50%] left-[65%] top-[400px] animate-bounce  "
      >
        <Image
          src="/spacebg.png"
          alt="work icons"
          height={250}
          width={250}
        /> 
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
