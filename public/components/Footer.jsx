import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, In } from './Iconimg';
import footerlogo from '../assets/images/png/footer-logo.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-Bgfooter bg-center lg:bg-bgsize bg-cover bg-no-repeat pt-[40px] sm:pt-[120px] lg:pt-[138px]'>
            <div className='container mx-auto xl:max-w-[1164px] px-3 mb-[52px]'>
                <div className='flex-row flex flex-wrap'>
                    <div className='md:w-[40%] w-full'>
                        <Link href={'/'}>
                            <Image src={footerlogo} alt="footerlogo" className='max-w-[241px] w-full mb-[28px]' />
                        </Link>
                        <p className='font-normal text-[#FFFFFF] text-[16px] mb-[8px]'>Follow Us</p>
                        <div className='flex gap-[16px]'>
                            <Facebook />
                            <Instagram />
                            <Twitter />
                            <In />
                        </div>
                    </div>
                    <div className='md:w-[60%] w-full flex md:justify-end mt-[40px] md:mt-0'>
                        <div className='flex gap-[64px]'>
                            <ul className=''>
                                <li className='ff_outfit font-semibold text-[16px] text-[#FFFFFF] mb-[16px] leading-[120%] inline-block'>Maine</li>
                                <li><Link href={'#home'} className='font-normal text-[#FDFDFF] opacity-[70%] text-[16px] leading-[100%] inline-block mb-[14px] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#ffffff] after:left-[50%] hover:after:left-0 after:bottom-[-4px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear '>Home</Link></li>
                                <li><Link href={'#About'} className='font-normal text-[#FDFDFF] opacity-[70%] text-[16px] leading-[100%] inline-block mb-[14px] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#ffffff] after:left-[50%] hover:after:left-0 after:bottom-[-4px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear'>About Us</Link></li>
                                <li><Link href={'#Services'} className='font-normal text-[#FDFDFF] opacity-[70%] text-[16px] leading-[100%] inline-block mb-[14px] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#ffffff] after:left-[50%] hover:after:left-0 after:bottom-[-4px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear'>services</Link></li>
                                <li><Link href={'#WhyChooseUs'} className='font-normal text-[#FDFDFF] opacity-[70%] text-[16px] leading-[100%] inline-block mb-[14px] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#ffffff] after:left-[50%] hover:after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear'>Why Choose Us</Link></li>
                            </ul>
                            <ul className=''>
                                <li className='ff_outfit font-semibold text-[16px] text-[#FFFFFF] mb-[16px] leading-[120%] inline-block'>Legal</li>
                                <li><Link href={'#term'} className='font-normal text-[#FDFDFF] opacity-[70%] text-[16px] leading-[100%] inline-block mb-[14px] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#ffffff] after:left-[50%] hover:after:left-0 after:bottom-[-4px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear'>Term & Conduction</Link></li>
                                <li><Link href={'#Privacy'} className='font-normal text-[#FDFDFF] opacity-[70%] text-[16px] leading-[100%] inline-block mb-[14px] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#ffffff] after:left-[50%] hover:after:left-0 after:bottom-[-4px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear'>Privacy Policy</Link></li>
                                <li><Link href={'#Contact'} className='font-normal text-[#FDFDFF] opacity-[70%] text-[16px] leading-[100%] inline-block mb-[14px] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#ffffff] after:left-[50%] hover:after:left-0 after:bottom-[-4px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear'>Contact</Link></li>
                                <li><Link href={'#WhyChooseUs'} className='font-normal text-[#FDFDFF] opacity-[70%] text-[16px] leading-[100%] inline-block mb-[14px] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#ffffff] after:left-[50%] hover:after:left-0 after:bottom-[-5px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear'>(629) 555-0129</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <hr className='h-[1px] w-full bg-[#FFFFFF4D]' />
            <p className='font-normal text-center text-[14px] text-[#FFFFFF] opacity-[70%] py-[16px] lg:mt-[16px] lg:pb-[35px]'>© Copyright 2023 Noble Mind | All rights reserved. </p>
        </div >
    )
}

export default Footer
