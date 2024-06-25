import React from 'react'

const Box = (props) => {
  return (
    <div className='w-[43%]'>
         <div className=' relative  boxcontainer my-5  '>
                <div className='h-60  rounded-xl relative Box Boxwhite z-[5] shadow-2xl '>
                    <div className='flex justify-between items-center px-10 h-60 '>
                        <div className='text-3xl font-semibold'>{props.heading}</div>
                        <div><img src={props.src} alt="" width={150} /></div>
                    </div>
                </div>
                <div className=' Boxyellow h-60  rounded-xl absolute  Box top-0 bottom-0 left-0 right-0 z-[1]  '></div>
                <div className=' h-60 Boxblue  rounded-xl  absolute top-0 Box bottom-0 left-0 right-0 z-[2] '></div>
                <div className=' h-60  Boxpink rounded-xl  absolute top-0  Box bottom-0 left-0 right-0 z-[3] '></div>
                <div className=' h-60  rounded-xl  Boxgreen absolute top-0 Box bottom-0 left-0 right-0 z-[4] Boxgreen'></div>
            </div>
    </div>
  )
}

export default Box
