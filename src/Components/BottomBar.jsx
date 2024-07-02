import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const BottomBar = () => {
    const bottombarRef = useRef(null);
    const buttonRef = useRef();
    const buttonRef2 = useRef();
    const [heading, setheading] = useState(<span className='text-purple-500 font-bold text-xl'>Clients</span>)


    useEffect(() => {
        const headings = [
            <span className='text-purple-500 font-bold text-xl'>Clients</span>,
            <span className='text-blue-500 font-bold text-xl'>Venture Partners</span>,
            <span className='text-red-500 font-bold text-xl'>Agencies</span>,
            <span className='text-green-500 font-bold text-xl'>Tech Teams & CTOs</span>
        ];

        let index = 0;

        const changeHeading = () => {
            index = (index + 1) % headings.length;
            setheading(headings[index]);
        };

        const interval = setInterval(changeHeading, 1000); // Change text every 1 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

        const addMagneticEffect = (button) => {
            const handleMouseMove = (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - (rect.left + rect.width / 2);
                const y = e.clientY - (rect.top + rect.height / 2);
                const distance = Math.sqrt(x * x + y * y);

                const strength = 10;
                const threshold = 90;

                if (distance < threshold) {
                    button.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
                } else {
                    button.style.transform = `translate(0, 0)`;
                }
            };

            const handleMouseLeave = () => {
                button.style.transform = `translate(0, 0)`;
            };

            window.addEventListener('mousemove', handleMouseMove);
            button.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                button.removeEventListener('mouseleave', handleMouseLeave);
            };
        };

        addMagneticEffect(buttonRef.current);
        addMagneticEffect(buttonRef2.current);

        const bottomBar = bottombarRef.current;

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                gsap.to(bottomBar, { bottom: 10, duration: 0.5 });
            } else {
                // Scrolling up
                gsap.to(bottomBar, { bottom: -100, duration: 0.5 });
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={bottombarRef} className='md:flex md:justify-between md:items-center px-4 md:w-[80%] w-[95%] bg-white shadow-lg rounded-xl p-3 md:h-[12vh] sticky mx-auto hidden sm:block'>
            <div className='flex justify-center items-center md:w-[60%] md::pb-0 pb-4 gap-3 font-semibold text-lg'>
                <img width={50} src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/650067467c5d8668c4e07a1c_Group%2010100-min.webp" alt="" />
                <div className=''>Giving {heading} their time back</div>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button ref={buttonRef} className='p-4 bg-black text-white rounded-xl font-semibold text-sm'>
                    View Pricing 💰
                </button>
                <button ref={buttonRef2} className='bg-[#c9ff00] p-4 rounded-xl flex justify-center gap-x-3 items-center'>
                    <div className='font-semibold text-sm'>Book a call </div>
                    <img className='mt-1' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d78b6976705b46baa171_%F0%9F%93%9E.svg" alt="" />
                </button>
            </div>
        </div>
    );
};

export default BottomBar;
