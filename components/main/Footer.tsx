import React from "react";
import {

  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
 
} from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-20">
          <div className="w-full md:w-[500px] h-auto flex flex-col flex-wrap items-center justify-center">
            <div className="font-bold text-[16px]">Social Media</div>
            <div className="w-full flex gap-5 flex-wrap px-5 justify-center items-center">

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              < RxInstagramLogo />
              <a href="https://www.instagram.com/amanbhardwaj0tw/" className="text-[15px] ml-[6px]">Instagram</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/AmanBhardwaj-Git" className="text-[15px] ml-[6px]">Github</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <a href="https://twitter.com/bhardWAman?t=FJji__Kcsin-BEpfNASJ7w&s=08" className="text-[15px] ml-[6px]">X(twitter)</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <a href="https://in.linkedin.com/in/amanbhardwajotw" className="text-[15px] ml-[6px]">Linkedin</a>
            </p>
          </div>
          </div>
          <div className="w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
            <BiLogoGmail />
              <a href="mailto:dayalbhardwaj10@gmail.com?subject=Mail from HubFolio" className="text-[15px] ml-[6px]">
                dayalbhardwaj10@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; ABSITE. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
