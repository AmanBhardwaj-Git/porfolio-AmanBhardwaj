import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-20">
          <div className="w-full md:w-[500px] h-auto flex flex-col flex-wrap items-center justify-center">
            <div className="font-bold text-[16px]">Social Media</div>
            <div className="w-full flex gap-5 flex-wrap px-5 justify-center items-center">

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          </div>
          <div className="w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                dayalbhardwaj10@gmail.com
              </span>
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
