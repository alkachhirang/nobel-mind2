'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Backtotop from '../../public/assets/images/png/backtotop.png';
import { Outfit, Exo_2 } from "next/font/google";
import Header from "../../public/components/Header";
import Vision from "../../public/components/Vision";
import TransformingIndustries from "../../public/components/TransformingIndustries";
import ContactUs from "../../public/components/ContactUs";
import Faq from "../../public/components/Faq";
import Newsletter from "../../public/components/Newsletter";
import Footer from "../../public/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Preloader from '../../public/components/Preloader';

const outfit = Outfit({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (


    <div>
      {screenLoading ? (
      <Preloader/>
      ) : (
        <main className={`${exo_2.className}`}>
          <Header />
          <Vision />
          <TransformingIndustries />
          <ContactUs />
          <Faq />
          <Newsletter />
          <Footer />
          <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_5px_16px_rgba(168,84,233,1)] overflow-hidden fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] border-[2px] border-solid border-[#A854E9] bg-[#fff] cursor-pointer transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
            <Image src={Backtotop} alt='Backtotop' className='max-w-[60px] ' />
          </div>
        </main>
      )
      }
    </div >
  );
}
