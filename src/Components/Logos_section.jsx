import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Logos_section = () => {
    const logoRef1 = useRef(null);
    const logoRef2 = useRef(null);


    useEffect(() => {
        const logo1 = logoRef1.current;
        const logo2 = logoRef2.current;

        if (logo1) {
            gsap.fromTo(logo1, { x: -1350 },
                {
                    x: 500,
                    delay: 1,
                    scrollTrigger: {
                        trigger: logo1,
                        start: "top bottom", // When the top of the element hits the bottom of the viewport
                        end: "top top", // When the top of the element hits the top of the viewport
                        scrub: 2, // Smooth scrubbing
                        markers: false, // Set to true to show markers for debugging
                    },
                });
        }

        if (logo2) {
            gsap.fromTo(logo2, { x: 950 },
                {
                    x: -500,
                    delay: 1,
                    scrollTrigger: {
                        trigger: logo2,
                        start: "top bottom", // When the top of the element hits the bottom of the viewport
                        end: "top top", // When the top of the element hits the top of the viewport
                        scrub: 2, // Smooth scrubbing
                        markers: false, // Set to true to show markers for debugging
                    },
                });
        }
    }, []);

    return (
        <div className="overflow-hidden bg-[#fff] md:py-10 py-5 pb-20  md:pb-28  flex-col items-center   "> {/* Ensures no horizontal scroll */}
            <div className='flex justify-center items-center mt-10 ' ref={logoRef1}>
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8dce4e4910fb575c9b86_Group%201299.svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8dd412bf5ac6414e598d_Group%201299%20(1).svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8ddbed5c99ff1094c9f8_Group%201302.svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8ddd52ca9f8cc0356614_Group%201300.svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f57005a14a4b3f9bca2962_Group%201301%20(1).svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8de325a667d3c3787fa2_Group%201302%20(1).svg" alt="" />
            </div>

            <div className='flex justify-center items-center mt-10' ref={logoRef2}>
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8e2a921a14ee8a11be1a_Group%201299%20(2).svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8e25bae2124d8de679ad_Group%201299%20(3).svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/65096a21aad69a48bf34b7cc_Group%201300.svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8e1c12bf5ac6414eb520_Group%201301%20(1).svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8e193e9f2319bd2895ea_Group%201302%20(2).svg" alt="" />
                <img className='w-[50%]' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec8e1573fdf2e313a1326e_Group%201356.svg" alt="" />
            </div>
        </div>
    );
};

export default Logos_section;
