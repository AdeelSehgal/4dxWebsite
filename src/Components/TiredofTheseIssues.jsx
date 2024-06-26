import { document } from 'postcss'
import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import Agency from "./Tired_components/Agency"
import Designer_game from "./Tired_components/Designer_game"
import Freelance_game from "./Tired_components/Freelance_game"

const TiredofTheseIssues = () => {

    const [active, setActive] = useState('agency')
    const [comp, setcomp] = useState(<Agency/>)

    const freelanceRef = useRef()
    const AgencyRef = useRef()
    const DesignerRef = useRef()

    const freelanceColor = () => {
        if (active == "agency" || active == "designer")
            freelanceRef.current.style.backgroundColor = "#ebb7f5"
        AgencyRef.current.style.backgroundColor = "#f9f9f9"
        DesignerRef.current.style.backgroundColor = "#f9f9f9"
        setActive("freelance")
        setcomp(<Freelance_game/>)
    }

    const agencyColor = () => {
        if (active == "freelance" || active == "designer")
            freelanceRef.current.style.backgroundColor = "#f9f9f9"
        AgencyRef.current.style.backgroundColor = "#ebb7f5"
        DesignerRef.current.style.backgroundColor = "#f9f9f9"
        setActive("agency")
        setcomp(<Agency/>)
    }
    const designerColor = () => {
        if (active == "agency" || active == "freelance")
            freelanceRef.current.style.backgroundColor = "#f9f9f9"
        AgencyRef.current.style.backgroundColor = "#f9f9f9"
        DesignerRef.current.style.backgroundColor = "#ebb7f5"
        setActive("designer")
        setcomp(<Designer_game/>)
    }

    return (
        <div className='pt-20 rounded-b-[50px] bg-[#fff] pb-10 '>
            <h3 className='text-center font-semibold text-[55px]'>Tired of these issues</h3>
            <div className='flex justify-evenly text-[17px] items-center bg-[#f9f9f9] w-[60%] font-medium mx-auto h-20 rounded-xl mt-10 mb-5'>
                <div ref={AgencyRef} onClick={agencyColor} className=' cursor-pointer w-1/4 bg-[#ebb7f5] rounded-xl text-center p-3'>Agency</div>
                <div ref={DesignerRef} onClick={designerColor} className=' cursor-pointer w-1/4  rounded-xl text-center p-3'>In-House Designer</div>
                <div ref={freelanceRef} onClick={freelanceColor} className=' cursor-pointer w-1/4  rounded-xl text-center p-3 ' >Freelancer</div>
            </div>
            <div className='w-[60%] mx-auto'>
               {comp}
            </div>
            
        </div>
    )
}

export default TiredofTheseIssues
