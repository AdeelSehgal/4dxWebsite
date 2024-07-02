import React, { useRef, useEffect } from 'react'
import FaqsComponent from "./Faqs_components/FaqsComponent"
const FAQS = () => {

    return (
        <div className='bg-black py-10'>
            <div className='p-10'>
                <div className='w-[68%] text-[55px] font-semibold '>
                    <span className=' text-zinc-500'>Our</span>
                    <span className=' membership ml-3  text-white'> FAQS</span>
                </div>
            </div>
            <div>
                <div>
                    <FaqsComponent heading="Why wouldn't I just hire a full-time designer?"
                        desc="Hiring a full-time senior designer is costly, with an annual expense of over $100,000, plus additional costs like benefits and insurance. Finding and hiring a new designer is stressful, and dealing with terminations and turnovers can be challenging.Our monthly plan offers flexibility, allowing you to pause and resume your subscription as needed. This way, you only pay for the designer's services when you have work available for them.For a detailed comparison between our services and other options, " />
                </div>
                <div>
                    <FaqsComponent heading="Why wouldn't I just hire another agency or freelancer?"
                        desc="When it comes to hiring a freelancer or agency, there are various challenges to consider, including limited scope, unreliable resources, and limited scalability.However, with We Want Design, we offer a superior alternative. Enjoy the benefits of unlimited design requests, straightforward pricing, and agency-quality designs. Plus flexibility to switch design experts as required, ensuring that your specific needs are always met.For a detailed comparison between our services and other options, please visit this page." />
                </div>
                <div>
                    <FaqsComponent heading="What types of designs can you create, and what is included in the scope of your work?"
                        desc="Our design capabilities are limitless. Whether it's UI design, intricate animations, custom logo design, social media designs, or any other design requirement, we can handle it with ease.Our aim is to provide you with a stress-free experience, allowing you to focus on your core tasks and responsibilities.For a comprehensive list of our capabilities, please visit this page." />
                </div>
                <div>
                    <FaqsComponent heading="What is “unlimited design” and “unlimited revisions”, and is there any limit on design requests?"
                        desc="With our subscription, you have the freedom to add an unlimited number of design requests to your queue. Our team will diligently work on each request, ensuring they are delivered to you one by one with unlimited revisions until you are satisfied, allowing for a streamlined and efficient workflow. " />
                </div>
                <div>
                    <FaqsComponent heading="How fast will I receive my designs?"
                        desc="The delivery time of your designs varies based on the task and its complexity. On average, we strive to deliver within 24-48 hours. For instance, social media designs are typically delivered within hours, while UI designs may take a day or two to ensure meticulous attention to detail." />
                </div>
            </div>
        </div>
    )
}

export default FAQS
