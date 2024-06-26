import React from 'react'

const Subscribe = () => {
    return (
        <div>
            <div className='flex justify-around items-center py-10  bg-[#fff]'>
                <div className=' text-[55px] font-semibold w-[30%] sticky top-0'>
                    <h3 className=''>How it</h3>
                    <div className='text-zinc-500 membership '> works</div>
                </div>
                <div className='w-[30%]'>
                    <div className=' flex justify-center items-center gap-10'>
                        <div className='w-[10%]'>
                            <div className='  border border-zinc-800 rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium text-zinc-600 '>
                                <div className=''>02</div>
                            </div>
                        </div>

                        <div className=' w-[90%]'>
                            <h4 className='text-[40px] font-semibold'>Subscribe</h4>
                            <p className=' text-zinc-500'>Choose a plan and start instantly. No pesky contracts or limited scope.</p>
                        </div>
                    </div>
                    <div className=' flex justify-around items-center gap-10 my-20'>
                        <div className='w-[10%]'>
                            <div className='  border border-zinc-800 rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium text-zinc-600 '>
                                <div className=''>02</div>
                            </div>
                        </div>

                        <div className=' w-[90%]'>
                            <h4 className='text-[40px] font-semibold'>Request</h4>
                            <p className=' text-zinc-500'>Start sending us your design requests, and you'll receive them in 24-48 hours on average.</p>
                        </div>
                    </div>

                    <div className=' flex justify-around items-center gap-10 my-20'>
                        <div className='w-[10%]'>
                            <div className='  border border-zinc-800 rounded-full w-[50px] h-[50px] flex items-center justify-center font-medium text-zinc-600 '>
                                <div className=''>03</div>
                            </div>
                        </div>

                        <div className=' w-[90%]'>
                            <h4 className='text-[40px] font-semibold'>Approve</h4>
                            <p className=' text-zinc-500'>We'll make revisions until you're 100% satisfied.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Subscribe
