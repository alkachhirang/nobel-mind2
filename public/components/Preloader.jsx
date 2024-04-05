import React from 'react';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import triangleimg2 from '../assets/images/svg/star-svg.svg';

const Preloader = () => {
    return (
        <div className='relative'>
            <Image src={triangleimg2} alt="triangleimg" className='absolute left-[5%] top-[12%] w-full max-w-[40px] zoom-in-out-box' />
            <Image src={triangleimg2} alt="triangleimg" className='absolute right-[10%] top-[20%] w-full max-w-[40px] zoom-in-out-box' />
            <Image src={triangleimg2} alt="triangleimg" className='absolute left-[20%] bottom-[20%] w-full max-w-[40px] zoom-in-out-box' />
            <Image src={triangleimg2} alt="triangleimg" className='absolute right-[20%] bottom-[15%] w-full max-w-[40px] zoom-in-out-box' />
            <Image src={triangleimg2} alt="triangleimg" className='absolute right-[50%] top-[15%] w-full max-w-[40px] zoom-in-out-box' />
            <div className='flex items-center justify-center flex-col min-h-screen bg-btn-gradient'>
                <h2 className='text-[50px] ff-outfit  font-bold text-[#fdfdff] text-center '>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            deletespeed: true,
                            delay: 90,
                            strings: ['Noble Mind']
                        }}
                    />
                </h2>
            </div>
        </div>
    )
}

export default Preloader;
