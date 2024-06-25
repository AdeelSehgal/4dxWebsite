import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Video1 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      gsap.fromTo(videoElement, 
        { scale: 0.5 }, // Start from 0.5 times the original size
        {
          scale: 1, // End at the original size
          scrollTrigger: {
            trigger: videoElement,
            start: "top bottom", // When the top of the video hits the bottom of the viewport
            end: "top center", // When the top of the video hits the top of the viewport
            scrub: true, // Smooth scrubbing
            markers: false, // Remove or set to false to hide markers
          },
        }
      );
    }
  }, []);

  return (
    <div className='z-[2] bg-white'>
      <div className='mx-auto'>
        <video 
          className='' 
          ref={videoRef} 
          src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64eef4314bb9724aac6c50d1_Hero%20Video-transcode.mp4" 
          muted 
          autoPlay 
          loop 
        />
      </div>
    </div>
  );
}

export default Video1;
