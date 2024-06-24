import React from 'react'
import { useState } from 'react';

const Trusted_section = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            id: 1,
            content: "Our product sales increased by 40% and our shelf visibility increased in stores with We Want Design’s help, and we couldn’t be happier with their services.",
            author: "Alberta Greg",
            title: "Marketing Manager at Aromi",
            image: "https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64d5d78b6976705b46baa16f_Image-80.png" // Replace with your image URL
        },
        {
            id: 2,
            content: "I received stellar reviews on my pitch deck, one investor even commented, This is the best pitch deck I have seen in the industry.",
            author: "Chris Geoff",
            title: "Founder at Contiant",
            image: "https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64dcb73bc6a3c935c9bffb3d_Image-60-6-min.webp" // Replace with your image URL
        },
        {
            id: 3,
            content: "We worked with We Want Design for our social media graphics, and the results were amazing! We saw a 30% increase in customer engagement and a significant rise in app downloads thanks to their team.",
            author: "Ethan Kent",
            title: "Founder at FlashFood",
            image: "https://cdn.prod.website-files.com/646c6ec121d9bb039374fb89/64e7541053fd9f003160e23e_Frame%201420-min.webp" // Replace with your image URL
        }
    ];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='bg-zinc-50 py-10'>
            <div className='text-[55px] font-semibold p-14  '>
                <h3 className=''>Trusted by 100+</h3>
                <div className='text-zinc-500 membership '> ambitious companies</div>
            </div>
            <div className="flex items-center justify-between  px-14 my-5 gap-x-10 ">
                <button
                    className="group px-8 py-[34px] rounded-full border border-zinc-400 flex items-center justify-center hover:scale-125 hover:bg-black transition duration-200"
                    onClick={handlePrevious}
                >
                    <div className="arrow-embed w-5">
                        <svg width="100%" height="100%" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:stroke-white" d="M7.07 1L1 7.07M1 7.07L7.07 13.14M1 7.07H10.32M17.83 7.07H14.35" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </button>
                <div className="w-[80%] h-64  ">
                    <p className="text-[33px] ">{slides[currentIndex].content}</p>
                    <div className="flex items-center  mt-10">
                        <img src={slides[currentIndex].image} alt={slides[currentIndex].author} className="w-20 h-20 rounded-full mr-3" />
                        <div className="text-left">
                            <p className="font-bold text-lg">{slides[currentIndex].author}</p>
                            <p className="text-lg  text-gray-600">{slides[currentIndex].title}</p>
                        </div>
                    </div>
                </div>
                <button
                    className=" group px-8 py-[34px] border border-zinc-400 flex items-center justify-center rounded-full hover:scale-125 hover:bg-black duration-200 transition-all"
                    onClick={handleNext}
                >
                    <div class="arrow-embed w-embed w-5">
                        <svg width="100%" height="100%" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:stroke-white" d="M11.7601 1L17.8301 7.07M17.8301 7.07L11.7601 13.14M17.8301 7.07H8.51008M1.00008 7.07H4.48008" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></div>

                </button>
            </div>


        </div>
    )
}

export default Trusted_section
