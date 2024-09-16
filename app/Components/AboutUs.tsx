
import React from 'react';
import { CarouselSpacing } from './ShadcnCarousel';




const AboutUs = () => {
  return (
    <div className='  bg-gray-300 lg:rounded-b-[100%] p-8'>
      

      <h1 className="  tracking-wider text-md lg:p-[5%] flex items-center justify-center ">ABOUT US</h1>
      <span className='font-bold text-5xl font-sans  mb-[2%] flex items-center justify-center tracking-wider'>We Offer Plumbing Work Since 1967</span>

      <div className='flex  items-center justify-center '>
        <CarouselSpacing   />
      </div>


      
    </div>
  );
};

export default AboutUs;
