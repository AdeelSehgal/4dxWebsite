import React from 'react'

const HambergerMene = () => {
    return (
        <div className='w-[95%] bg-black text-white h-[75vh] px-5 mx-auto rounded-lg'>
            <div className='text-sm  border-b py-5  border-zinc-400'>Solution</div>
            <div className='text-sm  border-b py-5  border-zinc-400'>Work</div>
            <div className='text-sm  border-b py-5  border-zinc-400'>Pricing</div>
            <div className='text-sm  border-b py-5  border-zinc-400'>Blog</div>
            <button className='text-sm font-semibold text-black bg-[#c9ff00] w-full py-3 rounded-lg my-3'>Book a call</button>
            <button className='text-sm font-semibold border border-zinc-100 text-white bg-black w-full py-3 rounded-lg '>Sign up</button>
        </div>
    )
}

export default HambergerMene
