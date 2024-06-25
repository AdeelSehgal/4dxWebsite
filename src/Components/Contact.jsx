import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='bg-[#fff] relative py-20 px-14 z-[2] mb-[100vh] pt-32 flex gap-x-24 justify-evenly items-center rounded-b-[50px] '>
                <div className='w-[40%]'>
                    <div className='flex items-center gap-x-5 mb-10'>
                        <h1 className='membership text-[50px] font-semibold'>Contact us</h1>
                        <div className='rounded-full bg-[#c9ff00] w-[10px] h-[10px] '></div>
                    </div>
                    <p className='text-zinc-500 mb-20 '>Hop on board our design rocket, where you can choose between memberships for on-going missions or classic quotes for large-scale projects. Shoot us a message, and let's create visual wonders that'll leave you starry-eyed! 🚀🎨😄</p>
                    <div className='h-[1px] bg-zinc-400 mb-6'></div>
                    <div>
                        <div>
                            After We Want Design worked on our website redesign, we saw a 25% reduction in bounce rate and a 40% increase in online leads, highly recommended!
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-x-4 py-4 items-center'>
                                <div><img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64dcb73afad4ead0c54b3792_Image-60-2-min.webp" alt="" className='w-12' /></div>
                                <div>
                                    <h4 className='font-semibold'>Chris Geoff</h4>
                                    <p className='text-zinc-500'>Founder at FlashFood</p>
                                </div>
                            </div>
                            <div>
                                <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/65097ef30049cf88320b5268_Group%201319.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex justify-center items-center gap-5'>
                    <div className=' border  border-zinc-200 p-7 rounded-2xl shadow-md w-[50%] hover:shadow-lg duration-300 transition-all hover:shadow-zinc-400 '>
                        <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7d7_Asset%201%403x-8%202.png" alt="" className='pb-6 pt-5 w-[50%]' />
                        <h3 className='text-black font-semibold text-2xl pb-5'> Book a call</h3>
                        <p className='text-zinc-500  h-36  '>Let's kickstart your branding and design project with a bang! Schedule a call with us now and let our passion and expertise take care of your projects.</p>
                    </div>
                    <div className=' border  border-zinc-200 p-7 rounded-2xl shadow-md w-[50%] hover:shadow-lg hover:shadow-zinc-400 duration-300 transition-all  '>
                        <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/650d861ef111ba00a67b27fd_icon-min-p-500.webp" alt="" className='pb-6 pt-5 w-[70%]' />
                        <h3 className='text-black font-semibold text-2xl pb-5 mt-6'> Write to us</h3>
                        <p className='text-zinc-500  h-36  '>Project discussions, anyone? We're here, with ears wide open.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
