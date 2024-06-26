import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    const logoRef = useRef();
    const BookRef = useRef();
    const SignRef = useRef();

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

        addMagneticEffect(logoRef.current);
        addMagneticEffect(BookRef.current);
        addMagneticEffect(SignRef.current);
    }, []);


    return (
        <div className='w-[95%] bg-black text-white my-3 flex justify-between items-center h-20 mx-auto rounded-xl px-16  absolute z-[3] left-0 right-0  '>
            <Link to={"/"}>
            <div className='cursor-pointer '>
                <img ref={logoRef} src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6512a6905ed7ebbc2cd9f781_Group%2010100.svg" alt="" />
            </div> </Link>
            <div className='ml-5'>
                <div className='flex  items-baseline gap-4 justify-center'>
                    <div className="font-semibold text-sm hover:bg-[#c9ff00] hover:text-black px-3 p-1 cursor-pointer py-2 rounded-lg ">Solutions</div>
                    <div className=' bg-[#c9ff00] w-[6px] h-[6px] rounded-full'></div>
                    <div className="font-semibold text-sm hover:bg-[#c9ff00] hover:text-black px-3 p-1 cursor-pointer py-2 rounded-lg ">Work</div>
                    <div className=' bg-[#c9ff00] w-[6px] h-[6px] rounded-full'></div>
                    <div className="font-semibold text-sm hover:bg-[#c9ff00] hover:text-black px-3 p-1 cursor-pointer py-2 rounded-lg ">Pricing</div>
                    <div className=' bg-[#c9ff00] w-[6px] h-[6px] rounded-full'></div>
                    <div className="font-semibold text-sm hover:bg-[#c9ff00] hover:text-black px-3 p-1 cursor-pointer py-2 rounded-lg ">Blog</div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-12'> 
                <Link to={"/Contact"}><button ref={BookRef} className='w-full mx-10 text-sm font-semibold'>Book a call</button></Link>
                <button ref={SignRef} className=' w-full px-5 py-4 font-semibold text-sm border border-white rounded-xl'>Sign up</button>
            </div>

        </div>
    )
}

export default Navbar
