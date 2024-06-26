import React from 'react'
import { useState, useRef } from 'react'
import Monthly_package from './Membership_components/Monthly_package'
import Quater_package from "./Membership_components/Quaterly_package"
import Yearly_package from './Membership_components/Yearly_package'

const Membership_section = () => {

    const [active, setActive] = useState('Monthly')

    const YearlyRef = useRef()
    const MonthlyRef = useRef()
    const QuaterlyRef = useRef()
    const [component, setComponent] = useState(<Monthly_package />);


    const QuaterlyColor = () => {
        if (active == "Monthly" || active == "Yearly")
            YearlyRef.current.style.backgroundColor = "rgb(244 244 245)"
        YearlyRef.current.style.color = "#726F6F"
        MonthlyRef.current.style.backgroundColor = "rgb(244 244 245)"
        MonthlyRef.current.style.color = "#726F6F"
        QuaterlyRef.current.style.backgroundColor = "#ebb7f5"
        QuaterlyRef.current.style.color = "black"
        setActive("Quaterly")
        setComponent(<Quater_package />)
    }


    const YearlyColor = () => {
        if (active == "Monthly" || active == "Quaterly")
            YearlyRef.current.style.backgroundColor = "#ebb7f5"
        YearlyRef.current.style.color = "black"
        MonthlyRef.current.style.backgroundColor = "rgb(244 244 245)"
        MonthlyRef.current.style.color = "#726F6F"
        QuaterlyRef.current.style.backgroundColor = "rgb(244 244 245)"
        QuaterlyRef.current.style.color = "#726F6F"
        setActive("Yearly")
        setComponent(<Yearly_package />)
    }

    const MonthlyColor = () => {
        if (active == "Yearly" || active == "Quaterly")
            YearlyRef.current.style.backgroundColor = "rgb(244 244 245)"
        YearlyRef.current.style.color = "#726F6F"
        MonthlyRef.current.style.backgroundColor = "#ebb7f5"
        MonthlyRef.current.style.color = "black"
        QuaterlyRef.current.style.backgroundColor = "rgb(244 244 245)"
        QuaterlyRef.current.style.color = "#726F6F"
        setActive("Monthly")
        setComponent(<Monthly_package />)
    }


    return (
        <div className='bg-[#fff] py-10'>
            <div className='lg:flex justify-between px-14 items-center mb-5'>
                <div className='w-[68%] text-[55px] font-semibold'>
                    <h3 className='membership'>Membership</h3>
                    <div className='text-zinc-500 ml-3 '> plan</div>
                </div>
                <div className=' lg:w-[32%] my-4 text-zinc-500 '>
                    <div className='mb-5'>
                        <p>Simple and straight-forward pricing.</p>
                        <strong>No fluff, No hidden charges.</strong>
                    </div>
                    <div className=' '>
                        <div className='flex justify-around text-[14px]  items-center bg-zinc-100  font-medium mx-auto h-[4.5rem] rounded-xl '>
                            <div ref={MonthlyRef} onClick={MonthlyColor} className=' w-1/4 bg-[#ebb7f5] rounded-xl text-center p-3 text-black  cursor-pointer'>Monthly</div>
                            <div ref={QuaterlyRef} onClick={QuaterlyColor} className='w-1/4  rounded-xl text-center p-3 cursor-pointer'>Quaterly</div>
                            <div ref={YearlyRef} onClick={YearlyColor} className='w-1/4  rounded-xl text-center p-3 cursor-pointer' >Yearly</div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                {component}
            </div>

        </div>
    )
}

export default Membership_section
