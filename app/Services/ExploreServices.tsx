import Image from 'next/image'
import React from 'react'

const ExploreServices = () => {
  return (
    <div className='bg-black'>   
        <div className='space-y-8 p-6'>
            <h1 className='text-white text-sm flex items-center justify-center tracking-widest font-sans'>
                Explore Our Services
            </h1>
            <h1 className='font-bold text-white lg:text-2xl text-lg font-sans flex items-center justify-center'>
                Simply click to get A to Z repair & maintenance work
            </h1>
            <p className='text-white text-sm tracking-wide flex items-center justify-center'>
                Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. <br /> 
                Ut diam quam nulla porttitor massa id. Massa ultricies mi quis hendrerit. <br /> 
                Donec massa sapien faucibus et molestie ac feugiat sed lectus viverra ipsum. <br /> 
                In sed scelerisque tellus.
            </p>
        </div>

        <div className='flex items-center p-4 justify-center space-x-6'>
            <button className='px-3 py-2 bg-black text-white hover:bg-yellow-400 text-sm ease-in-out duration-300 hover:text-black rounded-xl'>
                Explore More
            </button>
            <button className='px-3 py-2 bg-white text-black hover:bg-yellow-400 text-sm ease-in-out duration-300 hover:text-black rounded-xl'>
                More Video
            </button>
        </div>

        <div className='lg:mt-[5%]'>
            <p className='flex items-center text-sm justify-center text-white font-semibold tracking-wide'>
                200+ Outstanding Companies Trust Us Globally
            </p>
        </div>

        {/* Marquee container */}
        {/* <div className='flex justify-center mt-10 p-4'>
            <div className="animate-marquee  inline-block max-w-screen-md overflow-hidden">
                <div className="text-lg flex font-bold space-x-6 text-primary text-white">
                    
                    <Image src={'/brands-wt-5.png'} alt='pic' width={100} height={100} />
                    <Image src={'/brands1.png'} alt='pic' width={100} height={100} />
                    <Image src={'/brands2.png'} alt='pic' width={100} height={100} />
                    <Image src={'/brands3.png'} alt='pic' width={100} height={100} />
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default ExploreServices
