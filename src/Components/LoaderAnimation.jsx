import React from 'react'
import Animation from "./Assets/Loader.json"
import Lottie from "lottie-react"
import { useRef, useEffect, useState } from 'react'

const TextAnimation = () => {
    const [speed, setSpeed] = useState(0.3)

    const LottieRef = useRef(null)

    useEffect(() => {

        setSpeed(0.5)
        console.log(LottieRef.current)
        LottieRef.current.setSpeed(speed)

    }, [])

    return (
        <div className=' flex justify-center overflow-hidden items-center border h-screen w-screen'>
            <Lottie animationData={Animation} lottieRef={LottieRef} className='' />
        </div>
    )
}
export default TextAnimation
