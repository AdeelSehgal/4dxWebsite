import React from 'react'

const Navbar = () => {
    return (
        <div className='w-[95%] bg-black text-white my-3 flex justify-between items-center h-20 mx-auto rounded-xl px-16'>
            <div className='cursor-pointer'>
                <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/6512a6905ed7ebbc2cd9f781_Group%2010100.svg" alt="" />
            </div>
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
            <div>
                <button className='mx-10 text-sm font-semibold'>Book a call</button>
                <button className='mx-5 px-12 py-4 font-semibold text-sm border border-white rounded-xl'>Sign up</button>
                
            </div>

        </div>
    )
}

export default Navbar
