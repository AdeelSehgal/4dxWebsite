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
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='max-h-full max-w-full overflow-hidden'>
                <Lottie animationData={Animation} lottieRef={LottieRef} className='h-full w-full' />
            </div>
        </div>
    )
}

export default TextAnimation
