"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from "next/image";


const SkillText = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[16px] md:text-xl px-2">
            Skillset collection
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Learned Technologies.
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] md:text-3xl text-gray-200 mb-10 mt-[10px] text-center'
        >
           On a continous path of utilising all programming language
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.8)}
        className="absolute w-[50%] h-[50%] left-[-7%] top-[410px] md:top-[100px] md:left-[-1%] animate-bounce z-[-1]  "
      >
        <Image
          src="/spacebg2.png"
          alt="work icons"
          height={300}
          width={300}
        /> 
      </motion.div>
    </div>
  )
}

export default SkillText