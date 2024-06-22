import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black  fixed bottom-0 z-[1] left-0 right-0 h-screen'>
            <div className='flex items-center justify-evenly py-4 pt-[130px] '>
                <div className="first text-zinc-400 w-[20%] ">
                    <div className="logo my-5 mt-14 cursor-pointer">
                        <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6512a6905ed7ebbc2cd9f781_Group%2010100.svg" alt="" width={170} />
                    </div>
                    <div className='pb-6'>
                        Your on-demand design team producing quality designs that drives results
                    </div>
                    <div className='hover:text-white mb-6'>
                        +1 205 687-8151
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <div className='cursor-pointer bg-[#1b1b1e] rounded-[6px] w-[36px] h-[37px] hover:shadow-[0px_0px_18px_3px_#ffffff85] transition-all duration-200'>
                            <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c804_Group%201816.svg" alt="" />
                        </div>
                        <div className='cursor-pointer bg-[#1b1b1e] rounded-[6px] w-[36px] h-[37px] hover:shadow-[0px_0px_18px_3px_#ffffff85] transition-all duration-200'>
                            <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c805_Group%201811.svg" alt="" />
                        </div>
                        <div className='cursor-pointer bg-[#1b1b1e] rounded-[6px] w-[36px] h-[37px] hover:shadow-[0px_0px_18px_3px_#ffffff85] transition-all duration-200'>
                            <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c803_Group%201813.svg" alt="" />
                        </div>
                        <div className='cursor-pointer bg-[#1b1b1e] rounded-[6px] w-[36px] h-[37px] hover:shadow-[0px_0px_18px_3px_#ffffff85] transition-all duration-200'>
                            <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c802_Group%201815.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="second w-[10%]">
                    <div className='text-white text-xl font-bold mb-3'>Design by</div>
                    <div className='text-zinc-400 space-y-3'>
                        <div className='cursor-pointer hover:text-white'>Locations</div>
                        <div className='cursor-pointer hover:text-white'>Industries</div>
                        <div className='cursor-pointer hover:text-white'>Use cases</div>
                        <div className='cursor-pointer hover:text-white'>Services</div>
                    </div>
                </div>
                <div className="third w-[10%]">
                    <div className='text-white text-xl font-bold mb-3'>Resources</div>
                    <div className='text-zinc-400 space-y-3'>
                        <div className='cursor-pointer hover:text-white'>Blog</div>
                        <div className='cursor-pointer hover:text-white'>Podcast</div>
                        <div className='cursor-pointer hover:text-white'>E-book</div>
                        <div className='cursor-pointer hover:text-white'>Guides</div>
                    </div>
                </div>
                <div className="fourth w-[10%]">
                    <div className='text-white text-xl font-bold mb-3'>Company</div>
                    <div className='text-zinc-400 space-y-3'>
                        <div className='cursor-pointer hover:text-white'>Case study</div>
                        <div className='cursor-pointer hover:text-white'>Portfolio</div>
                        <div className='cursor-pointer hover:text-white'>Careers</div>
                        <div className='cursor-pointer hover:text-white'>Contact</div>
                    </div>
                </div>
                <div className="fifth text-white text-[40px] font-semibold w-[25%]">
                    Let's build something great
                    <div className='flex items-center gap-3'>
                        <div className='text-[#c9ff00] cursor-pointer '>let's talk</div>
                        <div className='bg-[#c9ff00] letstalk'>
                            <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7aa_Vector%20(3).svg" alt="Black Arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center text-white bg-black  border-b border-t border-slate-900 p-4 px-16'>
                <div>We Want Design © 2023</div>
                <div className='text-zinc-500 flex justify-evenly items-center gap-x-8'>
                    <Link  className='cursor-pointer text-sm hover:text-white'>Manage Subscription</Link>
                    <Link to='/TermsandConditions' className='cursor-pointer text-sm hover:text-white'>Terms of Services</Link>
                    <Link to='/PrivacyandPolicy'className='cursor-pointer text-sm hover:text-white'>Privacy Policy</Link>
                </div>
            </div>
            <div className='bg-black  p-6'></div>
        </div>
    )
}

export default Footer;
