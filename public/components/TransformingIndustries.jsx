'use client';
import React from 'react';
import { Starsvg } from './Iconimg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Onesvg, Twosvg, Threesvg } from './Iconimg';
import Image from "next/image";
import Drivingimg from '../assets/images/web.p/driving-img.webp';
import triangleimg from '../assets/images/png/triangle-img.png';
const TransformingIndustries = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        Arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true
                }
            },
        ]
    };
    return (
        <div className='xl:pt-[150px] lg:pt-[90px] md:pt-[60px] pt-[50px] relative'>
            <Image src={triangleimg} alt="triangleimg" className='absolute max-w-[70px] w-full left-[2%] top-[12%] lg:block hidden' />
            <Image src={triangleimg} alt="triangleimg" className='absolute max-w-[70px] w-full right-[2%] bottom-[9%] lg:block hidden' />
            <div id='WhyChooseUs' className='container mx-auto px-3 xl:max-w-[1164px]'>
                <div className='flex items-center justify-center gap-[6px] mb-[8px]' data-aos="fade-down">
                    <Starsvg />
                    <p className='font-normal capitalize text-[#131200] text-[16px] leading-[100%]' >Why Choose Us</p>
                </div>
                <p className='ff_outfit text-[30px] sm:text-[40px] md:text-[48px] leading-[120%] font-lighter capitalize text-center' data-aos="fade-down">Driving Innovation & <span className='lg:block font-semibold'>Transforming Industries</span></p>

                <Slider className='lg:mt-[52px] mt-[30px]' {...settings}>
                    <div className='px-3'>
                        <div className='p-[18px] min-h-[208px] rounded-[12px] cursor-pointer hov_active' data-aos="zoom-in">
                            <div className='h-[36px] w-[36px] border-solid border-[6px] border-[#a854e933] bg-[#FDFDFF] flex justify-center items-center rounded-[50px] hover:shadow-[0_3px_13px_rgba(168,_84,_233,_1)] transition-all duration-300 ease-linear mb-[11px]'>
                                <Onesvg />
                            </div>
                            <p className='ff_outfut text-[#131200] font-normal text-[20px] leading-[125%] mb-[4px] capitalize  '>Customer-Centric</p>
                            <p className='font-normal text-[16px] leading-[150%] text-[#131200] opacity-[70%] '>Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.</p>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='p-[18px] min-h-[208px] rounded-[12px] cursor-pointer hov_active' data-aos="zoom-in">
                            <div className='h-[36px] w-[36px] border-solid border-[6px] border-[#a854e933] bg-[#FDFDFF] flex justify-center items-center rounded-[50px] hover:shadow-[0_3px_13px_rgba(168,_84,_233,_1)] transition-all duration-300 ease-linear mb-[11px]'>
                                <Twosvg />
                            </div>
                            <p className='ff_outfut text-[#131200] font-normal text-[20px] leading-[125%] mb-[4px] capitalize  '>Workplace Harmony</p>
                            <p className='font-normal text-[16px] leading-[150%] text-[#131200] opacity-[70%] '>Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.</p>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='p-[18px] min-h-[208px] rounded-[12px] cursor-pointer hov_active' data-aos="zoom-in">
                            <div className='h-[36px] w-[36px] border-solid border-[6px] border-[#a854e933] bg-[#FDFDFF] flex justify-center items-center rounded-[50px] hover:shadow-[0_3px_13px_rgba(168,_84,_233,_1)] transition-all duration-300 ease-linear mb-[11px]'>
                                <Threesvg />
                            </div>
                            <p className='ff_outfut text-[#131200] font-normal text-[20px] leading-[125%] mb-[4px] capitalize  '>Ethical Leadership</p>
                            <p className='font-normal text-[16px] leading-[150%] text-[#131200] opacity-[70%] '>Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.</p>
                        </div>
                    </div>
                    <div className='px-3'>
                        <div className='p-[18px] min-h-[208px] rounded-[12px] cursor-pointer hov_active' data-aos="zoom-in">
                            <div className='h-[36px] w-[36px] border-solid border-[6px] border-[#a854e933] bg-[#FDFDFF] flex justify-center items-center rounded-[50px] hover:shadow-[0_3px_13px_rgba(168,_84,_233,_1)] transition-all duration-300 ease-linear mb-[11px]'>
                                <Threesvg />
                            </div>
                            <p className='ff_outfut text-[#131200] font-normal text-[20px] leading-[125%] mb-[4px] capitalize  '>Ethical Leadership</p>
                            <p className='font-normal text-[16px] leading-[150%] text-[#131200] opacity-[70%] '>Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.</p>
                        </div>
                    </div>
                </Slider>
                <div id='Services' className='mt-[59px]'>
                    <Image src={Drivingimg} alt="Drivingimg" className='w-full rounded-[24px] h-[360px] sm:h-[450px] md:h-[527px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default TransformingIndustries