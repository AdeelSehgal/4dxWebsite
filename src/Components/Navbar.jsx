import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HambergerMene from './HambergerMene';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ serviceLinkCol }) => {

    const [menu, setmenu] = useState(null)

    const logoRef = useRef();
    const BookRef = useRef();
    const SignRef = useRef();
    const serviceRef = useRef()

    const menuVisible = () => {
        if (menu == null) {
            setmenu(<HambergerMene />)
        }
        else {
            setmenu(null)
        }
    };

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
        <div className=' z-[3] left-0 right-0 fixed '>
            <div style={{ background: 'black' }} className='w-[95%] text-white mt-3 flex justify-between items-center h-20 mx-auto  rounded-xl px-5 '>
                <Link to={"/"} >
                    <div className='cursor-pointer'>
                        <img ref={logoRef} src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6512a6905ed7ebbc2cd9f781_Group%2010100.svg" alt="" />
                    </div>
                </Link>
                <div className='ml-5 hidden lg:block' >
                    <div className='flex  items-baseline gap-4 justify-center' >
                        <a style={{ backgroundColor: serviceLinkCol, borderRadius: 10 }} href="#service" > <div className="font-semibold  text-sm hover:bg-[#c9ff00] hover:text-black px-3 p-1 cursor-pointer py-2 rounded-[10px]  " ref={serviceRef} >Solutions</div></a>
                        <div className=' bg-[#c9ff00] w-[6px] h-[6px] rounded-full'></div>
                        <div className="font-semibold text-sm hover:bg-[#c9ff00] hover:text-black px-3 p-1 cursor-pointer py-2 rounded-lg ">Work</div>
                        <div className=' bg-[#c9ff00] w-[6px] h-[6px] rounded-full'></div>
                        <a href="#pricing"> <div className="font-semibold text-sm hover:bg-[#c9ff00] hover:text-black px-3 p-1 cursor-pointer py-2 rounded-lg ">Pricing</div></a>
                        <div className=' bg-[#c9ff00] w-[6px] h-[6px] rounded-full'></div>
                        <div className="font-semibold text-sm hover:bg-[#c9ff00] hover:text-black px-3 p-1 cursor-pointer py-2 rounded-lg ">Blog</div>
                    </div>
                </div>
                <div className=' justify-center items-center  '>
                    <div className=' flex lg:hidden ' onClick={menuVisible}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="20px" height="20px">
                            <g fill="#f8f8f8" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                <g transform="scale(5.12,5.12)">
                                    <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='lg:flex hidden  justify-center items-center  gap-10 '>
                        <Link to={"/Contact"} className='w-fit]'>
                            <button ref={BookRef} className='   text-sm font-semibold'>Book a call</button>
                        </Link>
                        <button ref={SignRef} className=' w-[9rem] py-4 font-semibold gradientbutton text-sm z-[1] bg-black  rounded-xl'>Sign up</button>
                    </div>
                </div>

            </div>
            <div className=''>
                {menu}
            </div>
        </div>
    )
}

export default Navbar
