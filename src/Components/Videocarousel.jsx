import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Videocarousel = () => {

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  useEffect(() => {
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;
    const div3 = div3Ref.current;
   
        if (div1) {
          gsap.fromTo(div1, { y: 1 },
            {
              y: 130,
              scrollTrigger: {
                trigger: div1,
                start: "top center",
                end: "top top",
                scrub: 4,
                markers: false,
              },
            });
        }
        if (div2) {
          gsap.fromTo(div2, { y: 180 },
            {
              y: 1,
              scrollTrigger: {
                trigger: div2,
                start: "30% center",
                end: "top center",
                scrub: 4,
                markers: false,
              },
            });
        }
        if (div3) {
          gsap.fromTo(div3, { y: 1 },
            {
              y: 130,
              scrollTrigger: {
                trigger: div3,
                start: "top center",
                end: "top top",
                scrub: 4,
                markers: false,
              },
            });
        }
  }, );

  return (
    <div className='  overflow-hidden bg-[#fff] flex justify-center  '>
      <div className='flex justify-center items-center min-w-[150%] md:max-h-[140vh]  max-h-[50vh] bg-slate-900 space-x-2 overflow-hidden my-10'>
        <div className=' w-[50%]' ref={div1Ref}>
          <img className='my-2' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500443a0d2257bcb7a8c0fd_Mask%20group-min-p-1080.webp" alt="" />
          <img className='my-2' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500455d0e99b12e4a6f358f_Mask%20group%20(3)-min-p-1080.webp" alt="" />
          <img className='my-2' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6500443fd101e433e24580a5_Mask%20group%20(1)-min-p-1080.webp" alt="" />
          <img className='my-2' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/65004442f1566a7f40686bfe_Mask%20group%20(2)-min-p-1080.webp" alt="" />
        </div>
        <div className='w-[50%]' ref={div2Ref}>
          <img className='my-2' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f0a329f7025f2deda98944_Mask%20group-min-p-1080.webp" alt="" />
          <video className='my-2' src="https://assets-global.website-files.com/646c6ec121d9bb039374fb89/650be54faab5bdd334171072_first%20video-transcode.mp4" autoPlay muted loop></video>
          <video className='my-2' src="https://assets-global.website-files.com/646c6ec121d9bb039374fb89/650be5cf3d24a43c5f81c955_Second%20Video%20Parallex-transcode.mp4" autoPlay muted loop></video>
          <video className='my-2' src="https://assets-global.website-files.com/646c6ec121d9bb039374fb89/650be613684cdcb41994948c_Third%20video-transcode.mp4" autoPlay muted loop></video>
        </div>
        <div className='w-[50%]' ref={div3Ref}>
          <img className='my-2' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f0a43f50c33e727798950b_Mask%20group%20(8)-min-p-1080.webp" alt="" />
          <video autoPlay muted loop src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/650be613684cdcb41994948c_Third%20video-transcode.mp4"></video>
          <img className='my-2' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f0a3ab15ebae59184fa056_Mask%20group%20(7)-min-p-1080.webp" alt="" />
          <img className='my-2' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f0a4351e84b0ab1242350c_Mask%20group%20(10)-min-p-1080.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Videocarousel;
