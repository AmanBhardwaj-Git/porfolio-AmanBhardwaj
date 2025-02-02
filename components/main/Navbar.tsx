import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[100] md:px-10">
      <div className="w-full h-full flex flex-row items-center md:justify-between m-auto md:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-full flex flex-row items-center justify-center md:justify-normal"
        >
          <Image
            src="/NavLogo.svg"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-spin transition-all duration-5 -ml-5"
          />

          <span className="tracking-wider font-bold  hidden md:block text-gray-300">
            ABSITE
          </span>
        </a>

        <div className="min-w-[300px] md:w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className=" flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[5px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#workings" className="cursor-pointer">
              Working
            </a>
          </div>
        </div>

        <div className=" flex-row gap-5 hidden sm:flex">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
