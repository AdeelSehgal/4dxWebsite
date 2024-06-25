import React from 'react';
import Spline from '@splinetool/react-spline';

const Getstarted = () => {
  return (
    <div className='relative bg-zinc-50 rounded-b-[50px] h-[150vh] overflow-hidden  py-10'>
      <h4 className='text-[200px] font-bold text-center  pt-40 z-10'>Get Started</h4>
      <div className='absolute inset-0 justify-center items-center  flex h-[120vh] z-1'>
        <Spline scene="https://prod.spline.design/tC-s0aDtMObePOvn/scene.splinecode" style={{ width: '115%', height: '115%' }} className='ml-28' />
      </div>
      <div className='font-semibold z-10 w text-center text-[30px] pt-64   '>Let's book a meeting 👋</div>
    </div>
  );
} 

export default Getstarted;
