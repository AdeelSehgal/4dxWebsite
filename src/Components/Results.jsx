import React,{useEffect,useState,useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Results = () => {

    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
   
  
    useEffect(() => {
      const div1 = div1Ref.current;
      const div2 = div2Ref.current;
    
  
      if (div1) {
        gsap.fromTo(div1, { y: 1 },
          {
            y: 100,
  
            scrollTrigger: {
              trigger: div1,
              start: "top top", // When the top of the element hits the bottom of the viewport
              end: "top top", // When the top of the element hits the top of the viewport
              scrub: 5, // Smooth scrubbing
              markers: false, // Set to true to show markers for debugging
            },
          });
      }
      if (div2) {
        gsap.fromTo(div2, { y: 100 },
          {
            y: 1,
  
            scrollTrigger: {
              trigger: div2,
              start: "top top", // When the top of the element hits the bottom of the viewport
              end: "top top", // When the top of the element hits the top of the viewport
              scrub: 5, // Smooth scrubbing
              markers: false, // Set to true to show markers for debugging
            },
          });
      }
     
    }, []);



    return (
        <div className='md:flex justify-center items-center max-h-[80vh] w-full overflow-hidden bg-[#fff]  '>
            <div className='text-[50px] font-semibold w-[25%] pl-10 ' >
                <h3 className=''> Results that Speak for </h3>
                <h3 className='membership text-zinc-500'>themselves</h3>
            </div>
            <div className=' flex justify-end items-center gap-4 w-[60%]'>
                <div className='space-y-6 w-[40%]' ref={div1Ref}>
                    <div className='rounded-xl bg-white shadow-lg  pt-20'>
                        <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f974cb012119ea61f908fa_Vector%2049.svg" alt="" />
                    </div>
                    <div className='rounded-xl bg-white shadow-lg '>
                        <div className='w-[100%] px-10 py-5'>
                            <h4 className='text-[4rem] font-semibold'>$1.5B</h4>
                            <p className=' text-zinc-500'>In total funding secured by our clients from most desired VCs.</p>
                        </div>
                    </div>
                    <div className='rounded-xl bg-white shadow-lg '>
                        <div className='w-[100%] px-10 py-5'>
                            <h4 className='text-[4rem] font-semibold'>40k</h4>
                            <p className=' text-zinc-500'>More organic traffic to Bellroy website from just one Landing Page.</p>
                        </div>
                        <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f974f66989d096e5abe212_Vector%2049%20(2).svg" alt="" />
                    </div>
                </div>
                <div className='space-y-6 w-[40%]' ref={div2Ref}>
                    <div className='rounded-xl bg-white shadow-lg  pt-20'>
                        <div className='w-[100%] px-10 py-5'>
                            <h4 className='text-[4rem] font-semibold'>-10%</h4>
                            <p className=' text-zinc-500'>Reduced bounce rate after the relaunch of the Sypore website.</p>
                        </div>
                        <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f974e3a7f705e7f946a06f_Vector%2049%20(1).svg" alt="" />
                    </div>
                    <div className='rounded-xl bg-white shadow-lg '>
                        <div className='w-[100%] px-10 py-5'>
                            <h4 className='text-[4rem] font-semibold'>€20M</h4>
                            <p className=' text-zinc-500'>Raised by Funnel CRM through UI design & Pitch deck we designed.</p>
                        </div>
                    </div>
                    <div className='rounded-xl bg-white shadow-lg '>
                        <div className='w-[100%] px-10 py-5'>
                            <h4 className='text-[4rem] font-semibold'>400%</h4>
                            <p className=' text-zinc-500'>Increased conversion rate 3 months after Bland to Brand relaunch.</p>
                        </div>
                        <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f974cb012119ea61f908fa_Vector%2049.svg" alt="" />
                    </div>
                    <div className='rounded-xl bg-white shadow-lg '>
                        <div className='w-[100%] px-10 py-5'>
                            <h4 className='text-[4rem] font-semibold'>3x</h4>
                            <p className=' text-zinc-500'>More leads two months after the relaunch of the ExperLabs website.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Results
