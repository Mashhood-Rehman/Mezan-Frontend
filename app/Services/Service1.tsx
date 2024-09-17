import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service1 = () => {
  return (
    <div className=" flex flex-col lg:flex-row   items-center justify-center    mb-[5%]   ">


    {/* first section */}
    <div   >

      <div className='space-y-6 lg:ml-[5%] border-b-2 flex flex-col items-center  justify-center  ' >
        <h3 className='tracking-wider '>NO.1 SERVICE</h3>
        <h1 className='text-3xl font-bold'>Reliable & Professional <br /> Maintenance Work</h1>
        <p className=''>Mauris ac risus sed quam semper auctor. Nam tempus volutpat ipsum, non viverra odio mollis <br /> mollis. Integer lacus ligula, imperdiet vel massa in, maximus suscipit turpis. Mauris ac risus sed <br /> quam semper auctor. Nam tempus volutpat ipsum, non viverra

        </p>
        <div className=' flex  flex-col lg:flex-row '>

        <ul>
          <div className='flex space-x-4'>
          <Icon   className='lg:mr-5 w-8 h-8 flex items-center' icon="meteocons:moon-full-fill"  />
          <li  >Enim eu turpis egestas pretium aenean.</li>
          </div>
          <div>
            
          </div>
          <div className='flex space-x-4'>
          <Icon   className='lg:mr-5 w-8 h-8' icon="meteocons:moon-full-fill"  />
          <li>Ullamcorper dignissim cras tincidunt.
            
          </li>
          </div>
          <div className=' flex space-x-4'>
          <Icon    className='lg:mr-5 w-8 h-8' icon="meteocons:moon-full-fill"  />

          <li>Pellentesque elit eget gravida cum.</li>
          </div>
          <div className=' flex space-x-4'>
          <Icon  className='lg:mr-5 w-8 h-8' icon="meteocons:moon-full-fill"  />

          <li>Sed risus ultricies tristique nulla.</li>
          </div>
        </ul>


        <div className=' flex flex-col lg:flex-row justify-center lg:ml-10 items-center '>

       <Image className=' rounded-full' src={'/about-img-04.jpg'} alt='about pic' width={100} height={100} />
       <div className='lg:ml-10 space-y-2'>
        <Image src={ '/download-removebg-preview.png'} alt='signature pic' width={100} height={100} className=' bg-transparent' />
        <p className='font-bold'>Silvia Julie

        </p>
      <p>Founder
      </p>
       </div>
        </div>



        </div>
      </div>


      <div className=' flex flex-col lg:flex-row items-center space-y-8 space-x-8 lg:mt-[3%] lg:ml-[5%]    '>

        <button className='bg-blue-500 px-4 mt-[8%] hover:bg-yellow-400 duration-300 ease-in-out hover:text-black   py-2 rounded-3xl text-white text-sm'>Read More</button>
        
        <div className='flex space-x-4'>

        <div>
        <Icon icon="charm:phone-call" width="21" height="21" />
        </div>
        <div className='flex flex-col space-y-1'>

        <p className='text-gray-500 font-semibold text-sm'>Call us Anytime</p>
        <p>(+00) 123 456789</p>
        </div>
        </div>
<div className='flex space-x-4 items-center'>

        <div >
        <Icon icon="emojione:closed-mailbox-with-raised-flag" width="21" height="21" />
        </div>
        <div className='flex flex-col space-y-1'>

        <p className='text-gray-500 font-semibold text-sm'>Email us at</p>
        <Link href={'mailto: mashhoodbutt47@gmail.com'} className='duration-300 ease-in-out hover:text-yellow-500 font-semibold'>mashhoodbutt47@gmail.com</Link>
        </div>
</div>

      </div>

    </div>


{/* second section */}


        
<div className="flex flex-col lg:flex-row justify-center items-center p-4">
  <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 items-center'>
    {/* Success Block and Video */}
    <div className='flex flex-col items-center lg:flex-row space-y-2 lg:space-x-2'>
      <div className='text-black font-bold bg-yellow-400 rounded-xl w-full lg:w-36 h-24 p-2 flex items-center justify-center'>
        <div className='text-center'>
          <span className='text-2xl font-bold'>980 +</span>
          <p className='text-sm'>Successful Services</p>
        </div>
      </div>
      <div className='w-full'>
        <video
          className="z-10 rounded-xl w-full lg:w-auto h-auto lg:h-80"
          loop
          autoPlay
          muted
        >
          <source src="/video.webm" type="video/mp4" />
        </video>
      </div>
    </div>

    {/* Images and Customer Satisfaction Block */}
    <div className='flex flex-col space-y-2'>
      <div>
        <Image
          width={400}
          height={300}
          className="w-full h-auto rounded-2xl"
          src="/about-us-02.jpg"
          alt="Service Image"
        />
      </div>
      <div className='flex flex-col lg:flex-row space-y-2 lg:space-x-2 items-center'>
        <div className="w-full">
          <Image
            width={200}
            height={200}
            className="w-full h-auto rounded-2xl"
            src="/about-us-03.jpg"
            alt="Satisfied Customer"
          />
        </div>
        <div className='text-black font-bold bg-blue-400 rounded-xl w-full lg:w-44 h-40 p-2 flex items-center justify-center'>
          <div className='text-center'>
            <span className='text-2xl font-bold'>900 +</span>
            <p className='text-sm'>Satisfied Customers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
   



    </div>

  )
}

export default Service1