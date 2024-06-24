import React from 'react'

const Monthly_package = () => {
    return (
        <div className='flex justify-center items-center mt-7'>
            <div className='w-[27%] mx-4 py-7 px-10 my-5 rounded-xl border border-zinc-300 hover:-translate-y-5 duration-150 transition-all'>
                <h2 className='text-3xl font-semibold'>Design</h2>
                <p className='text-zinc-500 '>Made for your day-to-day design needs</p>
                <div className='text-3xl mt-5 '>  $4,999<span className='text-sm text-zinc-500'>+ tax /mo</span>
                </div>

                <div className='text-zinc-500 '>Paid monthly</div>

                <button className=' w-[100%] py-4  my-5 bg-[#c9ff00] rounded-xl flex justify-center gap-x-3 items-center'>
                    <div className='font-semibold text-lg '>Start Today </div>
                    <img className='mt-1' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c762_Vector.svg" alt="" /></button>
                <div>
                    <h5 className='text-black font-semibold mb-5'>What’s included</h5>
                    <ul className='list-image-[url(https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7d6_Group%20385.svg)] list-inside text-zinc-500 space-y-2'>
                        <li>One request at a time</li>
                        <li>Unlimited brands</li>
                        <li>Unlimited users</li>
                        <li>Unlimited revisions</li>
                        <li>Easy credit-card payments</li>
                        <li>Pause or cancel anytime</li>
                    </ul>
                </div>

            </div>

            {/* Design + Dev */}

            <div className='w-[27%] mx-4 py-7 bg-[#f7f7f8] px-10 mt-5 rounded-xl border border-zinc-300 hover:-translate-y-5 duration-150 transition-all'>
                <div className="banner bg-[#c9ff00]  p-2 w-fit font-semibold text-[12px] rounded-lg relative -top-11 -right-20">Most popular</div>
                <h2 className='text-3xl font-semibold'>Design + Dev</h2>
                <p className='text-zinc-500 '>A turnkey design and development solution</p>
                <div className='text-3xl mt-5 '>  $7,999<span className='text-sm text-zinc-500'>+ tax /mo</span>
                </div>

                <div className='text-zinc-500 '>Paid monthly</div>

                <button className=' w-[100%] py-4  my-5  border-black border-[2px] rounded-xl flex justify-center gap-x-3 items-center'>
                    <div className='font-semibold text-lg '>Start Today </div>
                    <img className='mt-1' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c762_Vector.svg" alt="" /></button>
                <div>
                    <h5 className='text-black font-semibold mb-5'>What’s included</h5>
                    <ul className='list-image-[url(https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7d6_Group%20385.svg)] list-inside text-zinc-500 space-y-2'>
                        <li className='text-[#fd5a1e] list-image-[url(https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f0a51211ed0010accc2f82_Group%20385.svg)]'>Two request at a time</li>
                        <li>Unlimited brands</li>
                        <li>Unlimited users</li>
                        <li>Unlimited revisions</li>
                        <li>Easy credit-card payments</li>
                        <li>Pause or cancel anytime</li>
                    </ul>
                </div>

                {/* Design + Creative */}
            </div>
            <div className='w-[27%] mx-4 py-7 bg-black px-10 mt-5 rounded-xl border border-zinc-300 hover:-translate-y-5 duration-150 transition-all'>
                <h2 className='text-3xl text-white font-semibold'>Design + Creative</h2>
                <p className='text-zinc-500 '>A turnkey marketing and design solution for creative needs</p>
                <div className='text-3xl mt-5 text-white '>  $7,999<span className='text-sm text-zinc-500'>+ tax /mo</span>
                </div>

                <div className='text-zinc-500 '>Paid monthly</div>

                <button className=' w-[100%] py-4  my-5 border-[2px] border-[#c9ff00] rounded-xl flex justify-center gap-x-3 items-center'>
                    <div className='font-semibold text-lg text-[#c9ff00]'>Start Today </div>
                    <img className='mt-1' src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64db27fb079bd717a8e5a798_Vector%20(9).svg" alt="" /></button>
                <div>
                    <h5 className='text-white font-semibold mb-5'>What’s included</h5>
                    <ul className='list-image-[url(https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7d6_Group%20385.svg)] list-inside text-zinc-500 space-y-2'>
                        <li className='text-[#fd5a1e] list-image-[url(https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64f0a51211ed0010accc2f82_Group%20385.svg)]'>Two request at a time</li>
                        <li>Unlimited brands</li>
                        <li>Unlimited users</li>
                        <li>Unlimited revisions</li>
                        <li>Easy credit-card payments</li>
                        <li>Pause or cancel anytime</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Monthly_package
