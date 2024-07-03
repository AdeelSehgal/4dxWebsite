import React from 'react';
import Spline from '@splinetool/react-spline';

const Getstarted = () => {
  return (
    <div className='relative bg-[#fff] rounded-b-[50px] md:h-[160vh]   overflow-hidden'>
      <h4 className='sm:text-[15vw]   text-[3.5rem] font-bold text-center   z-10 mt-40 '>Get Started</h4>
      <div className='absolute inset-0 justify-center items-center -top-56 flex left-0 right-0 z-1 w-full   '>
        <Spline scene="https://prod.spline.design/tC-s0aDtMObePOvn/scene.splinecode" style={{ width: '70%', height: '70%' }} className='  w-full hidden md:block' />
      </div>
      {/* <div className='absolute inset-0 justify-center items-center  flex left-0 right-0 z-1    '>
        <Spline  scene="https://prod.spline.design/tC-s0aDtMObePOvn/scene.splinecode" style={{ width: 200, height: 200 }} className='   md:hidden aboslute' />
      </div> */}
      <div className='font-semibold z-10 w text-center text-[30px] md:mt-80  mt-24  '>Let's book a meeting 👋</div>
    </div>
  );
}

export default Getstarted
