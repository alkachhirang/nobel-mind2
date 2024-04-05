"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AccBtn } from "./Iconimg";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import triangleimg from '../assets/images/png/triangle-img.png';


const Faq = () => {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    return (
        <div className='xl:pt-[100px] lg:pt-[40px] md:pt-[20px] xl:pb-[30px] lg:pb-[20px] relative'>
            <Image src={triangleimg} alt="triangleimg" width={100} className='absolute sm:max-w-[70px] max-w-[50px] left-[2%] top-[12%] lg:block hidden' />
            <Image src={triangleimg} alt="triangleimg" width={100} className='absolute sm:max-w-[70px] max-w-[50px] right-[2%] bottom-[28%] lg:block hidden' />
            <div id='FAQ' className='container mx-auto xl:max-w-[1164px] px-3'>
                <h2 className='ff_outfit font-lighter text-[30px] sm:text-[40px] md:text-[48px] capitalize  text-center leading-[120%] mb-[16px]' data-aos="fade-down">Frequently <span className='font-semibold'>Asked Questions</span></h2>
                <p className='text-[#131200] opacity-[70%] font-normal text-[14px] sm:text-[16px] leading-[150%] text-center' data-aos="fade-down">Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu <span className='lg:block'>volutpat mi leo. Nibh nisl consequat metus.</span></p>

                <div className="flex flex-col w-full gap-[18px] max-w-[780px] mx-auto overflow-hidden mt-[30px] lg:mt-[52px] px-5 py-[40px] sm:py-[50px]" data-aos="zoom-in-up">
                    <Accordion open={open === 1} className={`${open === 1 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md p-6 shadow-[0px_4px_32px_0px_#00000014]`}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="p-0 flex acc1 justify-between w-full items-center border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">What is Artificial Intelligence (AI)?</p> <div className={`${open === 1 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                        <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className={`${open === 2 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md p-6 shadow-[0px_4px_32px_0px_#00000014]`}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="p-0 flex acc1 justify-between w-full items-center border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">How does AI benefit our company?</p> <div className={`${open === 2 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                        <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className={`${open === 3 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md p-6 shadow-[0px_4px_32px_0px_#00000014]`}>
                        <AccordionHeader onClick={() => handleOpen(3)} className="p-0 flex acc1 justify-between w-full items-center border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">What types of AI technologies are relevant to our industry?</p> <div className={`${open === 3 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                        <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} className={`${open === 4 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md p-6 shadow-[0px_4px_32px_0px_#00000014]`}>
                        <AccordionHeader onClick={() => handleOpen(4)} className="p-0 flex acc1 justify-between w-full items-center border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">How can our employees adapt to AI integration?</p> <div className={`${open === 4 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                        <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} className={`${open === 5 ? "border border-b-[6px] border-[#A854E9]" : "border-[#A854E933] border"}  border-solid  rounded-md p-6 shadow-[0px_4px_32px_0px_#00000014]`}>
                        <AccordionHeader onClick={() => handleOpen(5)} className="p-0 flex acc1 justify-between w-full items-center border-none"><p className="ff_outfit text-[16px] font-semibold text-[#000000] leading-[150%] ">How can our company ensure data security with AI?</p> <div className={`${open === 5 ? "rotate-180" : ""} transition-all ease-linear duration-200`}><AccBtn /></div></AccordionHeader>
                        <AccordionBody className="p-0 mt-3 text-[16px] font-normal leading-[150%] opacity-70 text-[#000000]">
                            Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Faq;

