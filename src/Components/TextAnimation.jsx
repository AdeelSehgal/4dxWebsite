import React from 'react'
import Text from "./Assets/LotteAnimation.json"
import Lottie from "lottie-react"
import { useRef, useEffect, useState } from 'react'

const TextAnimation = () => {
    const [speed, setSpeed] = useState(0.5)

    const LottieRef = useRef(null)

    useEffect(() => {

        setSpeed(0.5)
        console.log(LottieRef.current)
        LottieRef.current.setSpeed(speed)

    }, [])

    return (
        <div>
            <Lottie animationData={Text} lottieRef={LottieRef} />
        </div>
    )
}

export default TextAnimation
