// src/components/Preloader.js
import React from 'react';
import { useRef, useEffect, useState } from 'react'
import LoaderAnimation from "./LoaderAnimation"


const Preloader = ({ progress }) => {
  return (
    <div className=" w-screen h-screen z-50">
      <div className='absolute'>
        <LoaderAnimation />
      </div>
      <div className="absolute z-10 w-full bottom-0 ">
        <div className='text-center'>
          <span className="text-[65px] font-semibold text-[#c9ff00] ">{progress}%</span>
          <div className=' bg-zinc-800 h-28' style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
