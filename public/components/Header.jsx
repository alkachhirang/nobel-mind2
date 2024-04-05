'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Navlogo, Starsvg } from './Iconimg'
import Link from 'next/link';
import Commonbtn from './Commonbtn';
import heroimg from '../assets/images/web.p/header-2.webp';
import triangleimg from '../assets/images/png/triangle-img.png';

const Header = () => {
  const [nav, setNav] = useState(true);
  const [_document, set_document] = useState(null)
  useEffect(() => {
    set_document(document)
    if (nav === false) {
      document.body.classList.add("max-lg:overflow-hidden")
    } else {
      document.body.classList.remove("max-lg:overflow-hidden")
    }
  })
  return (
    <div className='lg:bg-Bghero bg-cover bg-top bg-no-repeat sm:h-[560px] lg:h-[810px] relative'>
      <Image src={triangleimg} alt="triangleimg" className='absolute left-[2%] bottom-[-4%] lg:bottom-[3%] w-full max-w-[70px]' />
      <Image src={heroimg} alt="heroimg" className='absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover opacity-10 lg:hidden block ' />
      <div className='container xl:max-w-[1164px] mx-auto px-3 relative z-[2]'>
        <div className='py-[19px] flex justify-between items-center'>
          <Link href={"/"}>
            < Navlogo />
          </Link>
          <ul
            className={`${nav ? "left-[-100%]" : "left-0"} flex max-lg:fixed max-lg:top-0 max-lg:bg-white max-lg:h-full max-lg:w-full max-lg:z-[7] max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-[32px] items-center justify-center`}
          >
            <li><Link href={'#home'} className='font-normal text-[16px] leading-[100%] text-[#131200] opacity-[70%] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#131200] after:left-[50%] hover:after:left-0 after:bottom-[-3px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear '>Home</Link></li>
            <li><Link href={'#About'} className='font-normal text-[16px] leading-[100%] text-[#131200] opacity-[70%] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#131200] after:left-[50%] hover:after:left-0 after:bottom-[-3px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear '>About Us</Link></li>
            <li><Link href={'#Services'} className='font-normal text-[16px] leading-[100%] text-[#131200] opacity-[70%] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#131200] after:left-[50%] hover:after:left-0 after:bottom-[-3px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear '>Services</Link></li>
            <li><Link href={'#WhyChooseUs'} className='font-normal text-[16px] leading-[100%] text-[#131200] opacity-[70%] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#131200] after:left-[50%] hover:after:left-0 after:bottom-[-3px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear text-nowrap '>Why Choose Us</Link></li>
            <li><Link href={'#Blogs'} className='font-normal text-[16px] leading-[100%] text-[#131200] opacity-[70%] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#131200] after:left-[50%] hover:after:left-0 after:bottom-[-3px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear '>Blogs</Link></li>
            <li><Link href={'#FAQ'} className='font-normal text-[16px] leading-[100%] text-[#131200] opacity-[70%] hover:opacity-[100%] transition-all duration-300 ease-linear after:absolute relative after:w-[0] after:h-[1.3px] after:bg-[#131200] after:left-[50%] hover:after:left-0 after:bottom-[-3px] after:rounded-[5px] hover:after:w-full after:transition-all after:duration-300 after:ease-linear '>FAQ</Link></li>
            <Commonbtn btnname="Contact Us" />
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="lg:hidden w-[30px] h-[20px] relative z-[10] flex justify-between flex-col"
          >
            <span
              className={`${nav
                ? "bg-black h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                : "bg-black transition-all duration-300 rounded-[3px] ease-linear h-[3px] w-full rotate-[50deg] translate-y-[15px]"
                }`}
            ></span>
            <span
              className={`${nav
                ? "bg-black h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                }`}
            ></span>
            <span
              className={`${nav
                ? "bg-black h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                : "bg-black transition-all duration-300 rounded-[3px] ease-linear h-[3px] w-full rotate-[-50deg] translate-y-[-50%]"
                }`}
            ></span>
          </div>
        </div>

        <div id='home' className='lg:pt-[138px] sm:pt-[56px] py-[40px] lg:max-w-[584px]' data-aos="fade-right">
          <div className='flex items-center gap-[6px] mb-[8px] lg:justify-start justify-center'>
            <Starsvg />
            <p className='font-normal capitalize text-[#131200] text-[16px] leading-[100%]'>AI With Noble Mind</p>
          </div>
          <p className='ff_outfit font-lighter text-[36px] sm:text-[64px] leading-[109%] mb-[16px] lg:text-start text-center'>Inspiring Innovation, <span className='lg:block'>Elevating Solutions – <span className='font-semibold leading-[70px]'>Noble Mind"</span></span></p>
          <p className='text-[#000000] opacity-[70%] font-normal text-[14px] sm:text-[16px] leading-[152%] lg:text-start text-center'>At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning <span className='lg:block'>with Saudi Arabia’s Vision 2030.”</span></p>
        </div>
      </div>
    </div >
  )
}

export default Header;
