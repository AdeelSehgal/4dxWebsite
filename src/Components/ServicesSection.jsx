import React from 'react'

const ServicesSection = () => {
    return (
        <div className='bg-zinc-100 text-black py-10 '>
            <div className='flex justify-between px-14 items-center'>
                <div className='w-[68%] text-[55px] font-semibold'>
                    <h3>Our</h3>
                    <div className='text-zinc-500 service'> services</div>
                </div>
                <div className='w-[32%]  text-zinc-500 '>
                    <p>Assemble a fully capable design and development team overnight so you can scale fast 🙌</p>
                </div>
            </div>

            <div className='mx-12 my-10 group'>
                <div className='bg-yellow-400 h-56 w-1/2 rounded-xl '></div>
                <div className='bg-blue-400 h-56 w-1/2 rounded-xl relative -top-56'></div>
                <div className='bg-pink-400 h-56 w-1/2 rounded-xl relative -top-[448px] group-hover:'></div>
                <div className='bg-green-400 h-56 w-1/2 rounded-xl relative -top-[672px] group-hover: '></div>
                <div className='bg-white h-56 w-1/2 rounded-xl'></div>
            </div>
        </div>
    )
}

export default ServicesSection
