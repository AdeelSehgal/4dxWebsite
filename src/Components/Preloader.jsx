// src/components/Preloader.js
import React from 'react';
import { useRef, useEffect, useState } from 'react'
import LoaderAnimation from "./LoaderAnimation"


const Preloader = ({ progress }) => {
  return (
    <div className=" w-screen h-screen relative z-50 bg-[#111111]">
      <LoaderAnimation />
      <div className='text-center absolute bottom-0  z-10 w-full '>
        <span className="md:text-[65px] text-[35px] font-semibold text-[#c9ff00] ">{progress}%</span>
        <div className='  bg-zinc-900 h-28' style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Preloader;
