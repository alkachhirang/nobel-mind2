import React from 'react';
import Image from 'next/image';
import triangleimg from '../assets/images/png/triangle-img.png';

const Newsletter = () => {
    return (
        <div id='Blogs' className='max-sm:bg-Bgnewsletter  sm:translate-y-[70px] py-[40px] sm:py-0 relative' >
            <Image src={triangleimg} alt="triangleimg" width={100} className='absolute sm:max-w-[70px] max-w-[50px] left-[2%] md:top-[-35%] lg:top-[-25%] top-[-39%] sm:block hidden' />
            <div className='container mx-auto xl:max-w-[1164px] px-3'>
                <div className='sm:bg-Bgnewsletter rounded-[20px] p-[16px] sm:p-[40px] lg:p-[60px] bg-center lg:bg-bgsize bg-cover bg-no-repeat' data-aos="fade-down">
                    <h2 className='ff_outfit font-light text-[30px] sm:text-[40px] md:text-[48px] text-[#FDFDFF] leading-[120%] mb-[8px] text-center'>Subscribe to our <span className='font-semibold '>Newsletter!</span></h2>
                    <p className='font-normal text-[14px] sm:text-[16px] leading-[150%] mb-[10px] sm:mb-[18px] md:mb-[36px] text-[#FDFDFF] text-center '>Be the first to get exclusive offers and the latest news.</p>
                    <div className='flex justify-between mx-auto border-[#fdfdff33] rounded-[6px] w-full max-w-[448px] border-[1px] border-solid text-[#FDFDFF] p-[6px] sm:p-[8px] ps-[10px] sm:ps-[24px] bg-[#ffffff0d]'>
                        <input className='font-[semibold] w-full outline-none ff_outfit placeholder:text-[#FDFDFF] bg-transparent placeholder:font-semibold' type='text' placeholder='Enter your email'
                        />
                        <button className='ff_outfit text-semibold text-[16px] text-semibold text-[#FDFDFF] hover:text-[#000] py-[11px] px-[20px] sm:py-[14px] sm:px-[24px] hover:bg-[#fdfdff] transition-all ease-linear duration-300 border-solid border-[1px] border-[#FDFDFF] rounded-[4px] '>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;
