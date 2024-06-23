import React, { useState, useRef, useEffect } from 'react'


const Video1 = () => {

  const [Effect, setfirst] = useState()
  const video2 = useRef()

  const changeWidth = () => {
    var scroll = (window.scrollY / 5)
    var width = Math.min(100 - scroll)

    video2.current.style.width = width + "%"
    console.log(width,scroll)
  }


  useEffect(() => {
    changeWidth()
  }, )
  


  return (
    <div className='z-[2] bg-white py-5' >
      <video className='mx-auto' ref={video2} onScroll={() => { requestAnimationFrame(changeWidth()) }} src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64eef4314bb9724aac6c50d1_Hero%20Video-transcode.mp4" muted autoPlay loop ></video>
    </div>
  )
}

export default Video1
