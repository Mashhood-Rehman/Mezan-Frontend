"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Card, CardContent } from "@/app/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"






import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';





import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const ServiceGallery = () => {
 

  return (
    <div>

        <div className='bg-gray-300 p-4 rounded-t-[120%] hidden lg:block '>
        <h1 className='tracking-widest flex justify-center p-3'>OUR SERVICES</h1>
        <span className='font-bold font-sans lg:text-4xl flex justify-center'>Complete Solution Under One Roof</span>



            <div className=' space-y-4 flex space-x-8 items-center justify-center'>

        <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="fluent-mdl2:repair" className='h-10 w-10       ' />
            </div>
        <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="uil:screw" className='h-10 w-10   ' />
            </div>
        <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]   hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="ion:hammer-outline" className='h-10 w-10   ' />
            </div>
        <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="marketeq:washbasin-4"  className='h-10 w-10  ' />
            </div>
            </div>
            <div className=' space-y-4 flex space-x-8 items-center justify-center'>

        <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="cil:filter" className='h-10 w-10  ' />
            </div>
        <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="fluent-mdl2:repair" className='h-10 w-10   ' />
            </div>
        <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]   hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="arcticons:every-door" className='h-10 w-10   ' />
            </div>
        <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]   hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="grommet-icons:paint"className='h-10 w-10   ' />
            </div>
            </div>

            <div className='flex items-center justify-center space-x-4 lg:mt-10  '>
        <button className=' bg-yellow-400 text-sm hover:bg-black px-2 py-3 hover:text-white ease-in-out duration-300 rounded-2xl  '>Get A Quote</button>
         <button className='bg-blue-400 text-sm hover:bg-yellow-400 px-2 py-3  hover:text-black text-white ease-in-out duration-300 rounded-2xl     '>Browse All Services</button>

            </div>
        </div>



<div className='block md:hidden bg-gray-300 p-4 rounded-t-[120%]'>


<Swiper navigation={true} modules={[Navigation]} className="mySwiper flex items-center justify-center">
        <SwiperSlide >
          <div className="h-40 w-40 md:h-20 md:w-20 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="fluent-mdl2:repair" className='h-10 w-10       ' />
            </div>
            </SwiperSlide>
        <SwiperSlide><div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="uil:screw" className='h-10 w-10   ' />
            </div></SwiperSlide>
        <SwiperSlide> <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]   hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="ion:hammer-outline" className='h-10 w-10   ' />
            </div></SwiperSlide>
        <SwiperSlide> <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="marketeq:washbasin-4"  className='h-10 w-10  ' />
            </div></SwiperSlide>
        <SwiperSlide>  <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="cil:filter" className='h-10 w-10  ' />
            </div></SwiperSlide>
        <SwiperSlide> <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]  hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="fluent-mdl2:repair" className='h-10 w-10   ' />
            </div></SwiperSlide>
        <SwiperSlide> <div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]   hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="arcticons:every-door" className='h-10 w-10   ' />
            </div></SwiperSlide>
        <SwiperSlide><div className="h-40 w-40 bg-white hover:bg-[url('/about-us-02.jpg')]   hover:scale-110 bg-cover bg-center  duration-500 hover:bg-blend-darken hover:bg-blue-300    ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
            <Icon icon="grommet-icons:paint"className='h-10 w-10   ' />
            </div></SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
     
{/* 
<Carousel className="w-full max-w-xs">
      <CarouselContent>
        {[
          "fluent-mdl2:repair",
          "uil:screw",
          "ion:hammer-outline",
          "marketeq:washbasin-4",
          "cil:filter",
          "fluent-mdl2:repair", // Repeat or adjust as needed
          "arcticons:every-door",
          "grommet-icons:paint"
        ].map((icon, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
              <CardContent className="md:ml-[10%] ml-0 w-48 h-48 p-6 bg-white hover:bg-[url('/about-us-02.jpg')] hover:scale-110 bg-cover bg-center duration-500 hover:bg-blend-darken hover:bg-blue-300 ease-in-out flex hover:text-white items-center justify-center rounded-2xl">
  <Icon icon={icon} className='h-10 w-10' />
</CardContent>

              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
<CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />

    </Carousel>  */}
</div> 


    </div>
  )
}

export default ServiceGallery