import React, { useEffect } from 'react'

const FixedImage = () => {
    useEffect(() => {
        // Check if the viewport width is less than or equal to 600 pixels (you can adjust this value)
        const isMobile = window.innerWidth <= 992;


        if (!isMobile) {
            // Include your script if it's not a mobile screen
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/mgohar/wwd-animation-assets@1,1,8/dist/index_9_jun.ac2f4826.js';
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className=''>
            <canvas className="webgl z-30 fixed top-0"></canvas>
        </div>
    )
}

export default FixedImage
