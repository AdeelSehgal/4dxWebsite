import React, { useRef } from 'react';

const FAQS = ({ heading, desc }) => {
    const crossDivRef = useRef(null);
    const contentRef = useRef(null);

    const crossClick = () => {
        const contentDiv = contentRef.current;
        const firstchild = contentDiv.children[0];
        const secondchild = contentDiv.children[1];

        const crossDiv = crossDivRef.current;
        const child = crossDiv.children[0];

        if (crossDiv.style.backgroundColor === "white") {
            crossDiv.style.backgroundColor = "#c9ff00";
            child.style.transform = "rotateZ(320deg)";
            firstchild.style.color = "black";
            contentDiv.style.backgroundColor = "white";
            secondchild.style.display = "block";
        } else {
            crossDiv.style.backgroundColor = "white";
            child.style.transform = "rotateZ(0deg)";
            firstchild.style.color = "white";
            contentDiv.style.backgroundColor = "black";
            secondchild.style.display = "none";
        }
    };

    return (
        <div className='bg-black'>
            <div className=''>
                <div className='flex justify-center items-start gap-3 my-5'>
                    <div className='bg-white p-5 rounded-full' ref={crossDivRef} onClick={crossClick}>
                        <img src="https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64db27fb079bd717a8e5a7a2_Group%201190.svg" alt="" />
                    </div>
                    <div ref={contentRef} className='text-white font-semibold text-lg w-[80%] rounded-lg p-5'>
                        <h4 className=' mb-5'>{heading}</h4>
                        <p className='text-zinc-400 font-normal hidden'>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQS;
