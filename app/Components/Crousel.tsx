"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { motion } from "framer-motion";


// import required modules
import { Pagination } from 'swiper/modules';
import { useState } from 'react';
export default function Crousel() {

    const [aciveslide,setactiveslide] = useState(0)
    return (
        <>
  <Swiper 
            onSlideChange={(swiper) => setactiveslide(swiper.activeIndex)}
  pagination={true} modules={[Pagination]} className="mySwiper  text-white font-sans">
        <SwiperSlide className=' space-y-4 w-full h-[60vh] lg:h-[80vh] '>
            
            <motion.p
            
            initial={{ y: 40, opacity: 0 }}
                  animate={
                    aciveslide === 0
                      ? { y: 0, opacity: 1 }
                      : { y: 40, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 }}
            className='text-sm '>LET'S GET TO WORK'</motion.p>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={
            aciveslide === 0
              ? { y: 0, opacity: 1 }
              : { y: 40, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        className='text-3xl font-bold'> Your Go-To Service <br /> Providers</motion.h1>
        <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={
              aciveslide === 0
                ? { y: 0, opacity: 1 }
                : { y: 40, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
          
          className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab molestiae <br /> illo nulla debitis aliquam? Ipsa doloremque sed dignissimos voluptas animi!
            </motion.p>
            <motion.button
                initial={{ y: 40, opacity: 0 }}
                animate={
                  aciveslide === 0
                    ? { y: 0, opacity: 1 }
                    : { y: 40, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.5 }}
            className=' bg-yellow-400 text-black  px-5 py-3 text-sm hover:bg-white duration-300 ease-in-out rounded-3xl'>Our Service</motion.button>
            </SwiperSlide>
            <SwiperSlide className=' space-y-4 '>
            
            <motion.p
            
            initial={{ y: 40, opacity: 0 }}
            animate={
              aciveslide === 1
                ? { y: 0, opacity: 1 }
                : { y: 40, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-sm '>LET'S GET TO WORK'</motion.p>
        <motion.h1
         
         initial={{ y: 40, opacity: 0 }}
         animate={
           aciveslide === 1
             ? { y: 0, opacity: 1 }
             : { y: 40, opacity: 0 }
         }
         transition={{ duration: 0.5, delay: 0.5 }}
        className='text-3xl font-bold'> Your Go-To Service <br /> Providers</motion.h1>
        <motion.p
        
        initial={{ y: 40, opacity: 0 }}
        animate={
          aciveslide === 1
            ? { y: 0, opacity: 1 }
            : { y: 40, opacity: 0 }
        }
        transition={{ duration: 0.5, delay: 0.5 }}
          
          className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab molestiae <br /> illo nulla debitis aliquam? Ipsa doloremque sed dignissimos voluptas animi!
            </motion.p>
            <motion.button
             
             initial={{ y: 40, opacity: 0 }}
             animate={
               aciveslide === 1
                 ? { y: 0, opacity: 1 }
                 : { y: 40, opacity: 0 }
             }
             transition={{ duration: 0.5, delay: 0.5 }}
            className=' bg-yellow-400 text-black  px-5 py-3 text-sm hover:bg-white duration-300 ease-in-out rounded-3xl'>Our Service</motion.button>
            </SwiperSlide>
            <SwiperSlide className=' space-y-4 '>
            
            <motion.p
            
           
            initial={{ y: 40, opacity: 0 }}
            animate={
              aciveslide === 2
                ? { y: 0, opacity: 1 }
                : { y: 40, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-sm '>LET'S GET TO WORK'</motion.p>
        <motion.h1
             
             initial={{ y: 40, opacity: 0 }}
             animate={
               aciveslide === 2
                 ? { y: 0, opacity: 1 }
                 : { y: 40, opacity: 0 }
             }
             transition={{ duration: 0.5, delay: 0.5 }}
        className='text-3xl font-bold'> Your Go-To Service <br /> Providers</motion.h1>
        <motion.p 
             
             initial={{ y: 40, opacity: 0 }}
             animate={
               aciveslide === 2
                 ? { y: 0, opacity: 1 }
                 : { y: 40, opacity: 0 }
             }
             transition={{ duration: 0.5, delay: 0.5 }}
          
          className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab molestiae <br /> illo nulla debitis aliquam? Ipsa doloremque sed dignissimos voluptas animi!
            </motion.p>
            <motion.button
              
              initial={{ y: 40, opacity: 0 }}
              animate={
                aciveslide === 2
                  ? { y: 0, opacity: 1 }
                  : { y: 40, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 0.5 }}
            className=' bg-yellow-400 text-black  px-5 py-3 text-sm hover:bg-white duration-300 ease-in-out rounded-3xl'>Our Service</motion.button>
            </SwiperSlide>
                  </Swiper>
        </>
    )
}