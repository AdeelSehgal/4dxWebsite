import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Subscribe = () => {
    const myboxRef = useRef(null);


    useEffect(() => {
        if (myboxRef.current) {
            gsap.fromTo(myboxRef.current, { height: 1 }, {
                height: 430,
                scrollTrigger: {
                    trigger: myboxRef.current,
                    start: "top 50%", // When the top of myboxRef reaches the center of the viewport
                    end: "center top", // When the center of myboxRef reaches the center of the viewport
                    scrub: 1, // Smoothly scrubs the animation
                    markers: false, // Uncomment this to see the start and end markers
                }
            });
        }
    }, );

    return (
        <div className='md:flex justify-evenly items-center py-10 bg-[#fff] p-5'>
            <div className='md:text-[55px] text-[35px]  md:w-[30%]  font-semibold sticky top-0'>
                <h3>How it</h3>
                <div className='text-zinc-500 membership'>works</div>
            </div>
            <div className='md:w-[40%] relative mt-10'>
                <div className='flex flex-col gap-24  '>
                    <div className='flex justify-center items-start gap-4 '>
                        <div className='border relative z-10 border-zinc-800 rounded-full px-4 py-3 font-medium text-zinc-600 mt-3'>01</div>
                        <div className=' '>
                            <h4 className='md:text-[40px] text-[25px] md:font-semibold'>Subscribe</h4>
                            <p className='text-zinc-500'>Choose a plan and start instantly. No pesky contracts or limited scope.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-start gap-4'>
                        <div className='border border-zinc-800 bg-[#fff] mt-3  relative z-10 rounded-full px-4 py-3  font-medium text-zinc-600'>02</div>
                        <div className=''>
                            <h4 className='md:text-[40px] text-[25px] md:font-semibold'>Request</h4>
                            <p className='text-zinc-500'>Start sending us your design requests, and you'll receive them in 24-48 hours on average.</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-start gap-4 relative z-10 bg-[#fff]  '>
                        <div className='border col3  border-zinc-800 rounded-full   px-4 py-3 font-medium text-zinc-600 '>03</div>
                        <div className=''>
                            <h4 className='md:text-[40px] text-[25px] md:font-semibold'>Approve</h4>
                            <p className='text-zinc-500'>We'll make revisions until you're 100% satisfied.</p>
                        </div>
                    </div>
                </div>
                <div
                    className='border-l mybox border-dashed z-[2] border-zinc-800 absolute top-[60px] left-[25px] right-0'
                    ref={myboxRef}
                ></div>
            </div>
        </div>
    );
};

export default Subscribe;
