import React from 'react'

const BookCall = () => {
    return (
        <div className='flex justify-center items-center bg-zinc-50'>
            <div className='w-[42%] bg-[#c9ff00] mb-5 p-7 rounded-2xl mx-4 flex justify-around items-center hover:-translate-y-5 duration-150 transition-all'>
                <div className='w-[60%]'>
                    <h4 className='text-3xl font-semibold my-5'>Book a call</h4>
                    <p className='text-sm'>Learn about how we can help you grow your business with the right design partner</p>
                    <button className=' w-[60%] py-4  my-5  bg-black  rounded-xl  text-white flex justify-center gap-x-3 items-center'>
                        <div className='font-semibold text-lg '>Book a Call </div>
                        <img className='mt-1 invert' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c762_Vector.svg" alt="" />
                    </button>
                </div>
                <div>
                    <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7d7_Asset%201%403x-8%202.png" alt="" width={120} />
                </div>
            </div>

            {/* join now */}

            <div className='w-[42%] border border-zinc-300  mb-5 p-7 rounded-2xl mx-4 flex justify-around items-center hover:-translate-y-5 duration-150 transition-all'>
                <div className='w-[60%]'>
                    <h4 className='text-3xl font-semibold my-5'>Refer a friend & earn</h4>
                    <p className='text-sm'>Earn 10% monthly recurring commission for each referral.</p>
                    <button className=' w-[60%] py-4  my-5  rounded-xl  border-[2px] border-black text-white flex justify-center gap-x-3 items-center'>
                        <div className='font-semibold text-lg text-black '>Join Now</div>
                        <img className='mt-1 ' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c762_Vector.svg" alt="" />
                    </button>
                </div>
                <div>
                    <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7d9_%F0%9F%92%B8.svg" alt="" width={120} />
                </div>
            </div>

        </div>
    )
}

export default BookCall
