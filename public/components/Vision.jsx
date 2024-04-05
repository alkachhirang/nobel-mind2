import React from 'react';
import Image from "next/image";
import { Starsvg } from './Iconimg'
import Commonbtn from './Commonbtn';
import visionimg from '../assets/images/web.p/vision-img.webp';
import triangleimg from '../assets/images/png/triangle-img.png';

const Vision = () => {
    return (
        <div className='xl:pt-[150px] lg:pt-[90px] md:pt-[60px] sm:pt-[50px] pt-[40px] relative'>
            <Image src={triangleimg} alt="triangleimg" width={100} className='absolute sm:max-w-[70px] max-w-[50px] right-[2%] bottom-[-5%] lg:bottom-[3%] sm:block hidden' />
            <div id='About' className='container mx-auto px-3 xl:max-w-[1164px]'>
                <div className='flex flex-row flex-wrap lg:justify-between justify-center items-center'>
                    <div className='lg:w-[48%] w-full' data-aos="fade-right">
                        <Image src={visionimg} alt="visionimg" className='rounded-tr-[50px] w-full object-cover object-right h-[360px] sm:h-[420px] lg:h-full' />
                    </div>
                    <div className='xl:w-[46%] w-full lg:mt-0 mt-10' data-aos="fade-left">
                        <div className='flex items-center gap-[6px] mb-[8px] lg:justify-start justify-center'>
                            <Starsvg />
                            <p className='font-normal capitalize text-[#131200] text-[16px] leading-[100%]'>About Us</p>
                        </div>
                        <p className='ff_outfit font-lighter text-[30px] sm:text-[40px] md:text-[48px] leading-[121%] text-[#000000] mb-[8px] lg:mb-[16px] lg:text-start text-center'>Pioneering Vision & Mission-<span className='font-semibold'>Driven Sectoral Innovation</span></p>
                        <p className='text-[#000000] opacity-[70%] font-normal text-[14px] sm:text-[16px] leading-[170%] xl:mb-[42px] mb-[8px] sm:mb-[16px] lg:text-start text-center'>Imagine a future in Saudi Arabia influenced by the potential of Al, <span className='xl:block'>with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning <span className='xl:block'>experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</span></span></p>
                        <div className='flex lg:justify-start justify-center items-center'>
                            <Commonbtn btnname="Read More" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision;
