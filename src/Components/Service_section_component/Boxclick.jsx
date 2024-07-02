import React from 'react'

const Boxclick = ({ h1, h2, h3, h4, h5, h6, dis }) => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4  mx-auto' style={{ display: `${dis}` }}>
                <div className=' bg-blue-500 font-semibold text-[24px] rounded-lg text-white  text-center pt-10 h-[20vh]  '>{h1}</div>
                <div className='bg-pink-500  font-semibold text-[24px] rounded-lg text-white   pt-10 text-center  h-[20vh]  '>{h2}</div>
                <div className='bg-yellow-400 font-semibold text-[24px] rounded-lg text-white pt-10 text-center h-[20vh]'>{h3}</div>
                <div className='bg-zinc-800 font-semibold text-[24px] rounded-lg text-white pt-10 text-center h-[20vh]'>{h4}</div>
                <div className='bg-orange-500 font-semibold text-[24px] rounded-lg text-white pt-10 text-center  h-[20vh]'>{h5}</div>
                <div className='bg-green-500 font-semibold text-[24px] rounded-lg text-white pt-10 text-center h-[20vh] '>{h6}</div>
            </div>
        </div>
    )
}

export default Boxclick
