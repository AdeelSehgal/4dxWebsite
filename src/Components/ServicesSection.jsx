import React from 'react'
import Box from './Service_section_component/Box'

const ServicesSection = () => {
    return (
        <div className='bg-zinc-100 text-black py-10  '>
            <div className='flex justify-between px-16 items-center mb-5 '>
                <div className='w-[68%] text-[50px] font-semibold'>
                    <h3>Our</h3>
                    <div className='text-zinc-500 service'> services</div>
                </div>
                <div className='w-[32%]  text-zinc-500 '>
                    <p>Assemble a fully capable design and development team overnight so you can scale fast 🙌</p>
                </div>
            </div>
            <div className='flex  justify-evenly items-center'>
                <Box heading="Branding" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a8_Group%201680.svg" />
                <Box heading="Web Design" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a9_Group%201676.svg" />
            </div>
            <div className='flex  justify-evenly items-center'>
                <Box heading="Decks" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a4_Group%201677.svg" />
                <Box heading="Marketing Design" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a5_Group%201673.svg" />
            </div>
            <div className='flex  justify-evenly items-center'>
                <Box heading="3D & Motion" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a7_Group%201672.svg" />
                <Box heading="Mobile Design" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec6b68334368ac7411e74a_Group%201674.svg" />
            </div>

        </div>
    )
}

export default ServicesSection
