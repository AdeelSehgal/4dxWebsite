import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Videocarousel = () => {

    // const div1Ref = useRef(null);
    // const div2Ref = useRef(null);

    // useEffect(() => {
    //     const div1 = div1Ref.current;
    //     const div2 = div2Ref.current;

    //     if (div1) {
    //         gsap.fromTo(div1, { y: 1 },
    //             {
    //                 y:200, 
                    
    //                 scrollTrigger: {
    //                     trigger: div1,
    //                     start: "top center", // When the top of the element hits the bottom of the viewport
    //                     end: "top top", // When the top of the element hits the top of the viewport
    //                     scrub: 5, // Smooth scrubbing
    //                     markers: true, // Set to true to show markers for debugging
    //                 },
    //             });
    //     }

       
    // }, []);

  return (
    <div className='flex justify-center items-center bg-slate-900 space-x-7 overflow-hidden min-w-min '>
      <div className=''>
        <img className='my-5 '  src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500443a0d2257bcb7a8c0fd_Mask%20group-min-p-1080.webp" alt="" />
        <img  className='my-5' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500455d0e99b12e4a6f358f_Mask%20group%20(3)-min-p-1080.webp" alt="" />
        <img className='my-5'  src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500443fd101e433e24580a5_Mask%20group%20(1)-min-p-1080.webp" alt="" />
        <img className='my-5'  src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/65004442f1566a7f40686bfe_Mask%20group%20(2)-min-p-1080.webp" alt="" />
      </div>
      <div className=''>
        <img className='my-5' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500443a0d2257bcb7a8c0fd_Mask%20group-min-p-1080.webp" alt="" />
        <img  className='my-5' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500455d0e99b12e4a6f358f_Mask%20group%20(3)-min-p-1080.webp" alt="" />
        <img className='my-5'  src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500443fd101e433e24580a5_Mask%20group%20(1)-min-p-1080.webp" alt="" />
        <img className='my-5'  src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/65004442f1566a7f40686bfe_Mask%20group%20(2)-min-p-1080.webp" alt="" />
      </div>
      <div className=''>
        <img className='my-5' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500443a0d2257bcb7a8c0fd_Mask%20group-min-p-1080.webp" alt="" />
        <img  className='my-5' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500455d0e99b12e4a6f358f_Mask%20group%20(3)-min-p-1080.webp" alt="" />
        <img className='my-5'  src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500443fd101e433e24580a5_Mask%20group%20(1)-min-p-1080.webp" alt="" />
        <img className='my-5'  src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/65004442f1566a7f40686bfe_Mask%20group%20(2)-min-p-1080.webp" alt="" />
      </div>
    </div>
  )
}

export default Videocarousel
