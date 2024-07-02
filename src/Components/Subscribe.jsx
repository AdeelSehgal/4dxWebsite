import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Subscribe = () => {
    const myboxRef = useRef(null);

    useEffect(() => {
        if (myboxRef.current) {
            gsap.fromTo(myboxRef.current, { height: 0 }, {
                height: 477,
                scrollTrigger: {
                    trigger: myboxRef.current,
                    start: "top center", // When the top of myboxRef reaches the center of the viewport
                    // end: "bottom bottom", // When the center of myboxRef reaches the center of the viewport
                    scrub: 0.5, // Smoothly scrubs the animation
                    markers: false, // Uncomment this to see the start and end markers

                }
            });
        }
    }, []);

    return (
        <div className='flex justify-evenly items-center py-10 bg-[#fff] p-5'>
            <div className='text-[55px] font-semibold w-[60%]  sticky top-0'>
                <h3>How it</h3>
                <div className='text-zinc-500 membership'>works</div>
            </div>
            <div className='  relative'>
                <div className='w-[60%]'>
                    <div className='flex flex-col gap-36 z-[2]'>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='border border-zinc-800 rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium text-zinc-600'>
                                <div>01</div>
                            </div>
                            <div className='flex-1'>
                                <h4 className='text-[40px] font-semibold'>Subscribe</h4>
                                <p className='text-zinc-500'>Choose a plan and start instantly. No pesky contracts or limited scope.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='border border-zinc-800 bg-[#fff] relative z-10 rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium text-zinc-600'>
                                <div>02</div>
                            </div>
                            <div className='flex-1'>
                                <h4 className='text-[40px] font-semibold'>Request</h4>
                                <p className='text-zinc-500'>Start sending us your design requests, and you'll receive them in 24-48 hours on average.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='border border-zinc-800 rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium text-zinc-600'>
                                <div>03</div>
                            </div>
                            <div className='flex-1'>
                                <h4 className='text-[40px] font-semibold'>Approve</h4>
                                <p className='text-zinc-500'>We'll make revisions until you're 100% satisfied.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className='border-l mybox border-dashed border-zinc-800 absolute top-20 left-[25px] right-0'
                        ref={myboxRef}
                        style={{ height: 0 }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
