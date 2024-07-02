import React, { useRef, useEffect, useState } from 'react'
import Box from './Service_section_component/Box'
import Boxclick from './Service_section_component/Boxclick'

const ServicesSection = () => {

    const [firstdisplay, setfirstdisplay] = useState("none")
    const [secdisplay, setsecdisplay] = useState("none")
    const [thirddisplay, setthirddisplay] = useState("none")
    const [Fourthdisplay, setforthdisplay] = useState("none")
    const [fifthdisplay, setfifthdisplay] = useState("none")
    const [Sixthdisplay, setsixthdisplay] = useState("none")
    const [linkColor, setLinkColor] = useState()

    const firstdivRef = useRef(null)
    const secdivRef = useRef(null)
    const thirddivRef = useRef(null)
    const fourthdivRef = useRef(null)
    const fifthdivRef = useRef(null)
    const sixthdivRef = useRef(null)
    const serviceSecRef = useRef(null)

    let firstdivClick = () => {
        let first = firstdivRef.current

        if (firstdisplay === "none") {
            setfirstdisplay("grid")
        }
        else {
            setfirstdisplay("none")
        }

    }
    let secdivClick = () => {
        let sec = secdivRef.current

        if (secdisplay === "none") {
            setsecdisplay("grid")
        }
        else {
            setsecdisplay("none")
        }
    }
    let thirddivClick = () => {
        let third = thirddivRef.current

        if (thirddisplay === "none") {
            setthirddisplay("grid")
        }
        else {
            setthirddisplay("none")
        }
    }
    let forthddivClick = () => {
        let forth = fourthdivRef.current

        if (Fourthdisplay === "none") {
            setforthdisplay("grid")
        }
        else {
            setforthdisplay("none")
        }
    }

    let fifthddivClick = () => {
        let fifth = fifthdivRef.current

        if (fifthdisplay === "none") {
            setfifthdisplay("grid")
        }
        else {
            setfifthdisplay("none")
        }
    }
    let sixthddivClick = () => {
        let sixth = sixthdivRef.current

        if (Sixthdisplay === "none") {
            setsixthdisplay("grid")
        }
        else {
            setsixthdisplay("none")
        }
    }

    return (
        <div className='bg-[#fff] pb-14  '>
            <div className='bg-zinc-50 text-black py-10 pb-24 pt-32  rounded-b-[50px] '>
                <div className='flex justify-between px-16 items-center mb-5 '>
                    <div className='w-[68%] text-[50px] font-semibold' id='service'>
                        <h3>Our</h3>
                        <div className='text-zinc-500 service'> services</div>
                    </div>
                    <div className='w-[32%]  text-zinc-500 '>
                        <p>Assemble a fully capable design and development team overnight so you can scale fast 🙌</p>
                    </div>
                </div>
                <div className='md:grid grid-cols-2 w-[95%] gap-12 mx-auto ' ref={serviceSecRef}>
                    <div className=''>
                        <div ref={firstdivRef} onClick={firstdivClick} className='' >
                            <Box heading="Branding" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a8_Group%201680.svg" />
                            <Boxclick dis={firstdisplay} h1="Identity designs" h2="Brand books" h3="Stationary design" h4="Ilustration & Icons" h5="Brand Assets" h6="More" />
                        </div>
                        <div ref={secdivRef} onClick={secdivClick}>
                            <Box heading="Web Design" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a9_Group%201676.svg" />
                            <Boxclick dis={secdisplay} h1="Identity designs" h2="Brand books" h3="Stationary design" h4="Ilustration & Icons" h5="Brand Assets" h6="More" />
                        </div>
                        <div ref={thirddivRef} onClick={thirddivClick}>
                            <Box heading="Decks" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a4_Group%201677.svg" />
                            <Boxclick dis={thirddisplay} h1="Identity designs" h2="Brand books" h3="Stationary design" h4="Ilustration & Icons" h5="Brand Assets" h6="More" />
                        </div>
                    </div>
                    <div className='' >
                        <div ref={fourthdivRef} onClick={forthddivClick}>
                            <Box heading="Marketing Design" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a5_Group%201673.svg" />
                            <Boxclick dis={Fourthdisplay} h1="Identity designs" h2="Brand books" h3="Stationary design" h4="Ilustration & Icons" h5="Brand Assets" h6="More" />
                        </div>
                        <div ref={fifthdivRef} onClick={fifthddivClick}>
                            <Box heading="3D & Motion" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d79abf8d81d90a15c7a7_Group%201672.svg" />
                            <Boxclick dis={fifthdisplay} h1="Identity designs" h2="Brand books" h3="Stationary design" h4="Ilustration & Icons" h5="Brand Assets" h6="More" />
                        </div>
                        <div ref={sixthdivRef} onClick={sixthddivClick}>
                            <Box heading="Mobile Design" src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64ec6b68334368ac7411e74a_Group%201674.svg" />
                            <Boxclick dis={Sixthdisplay} h1="Identity designs" h2="Brand books" h3="Stationary design" h4="Ilustration & Icons" h5="Brand Assets" h6="More" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServicesSection
