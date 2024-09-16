import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service1 = () => {
  return (
    <div className='flex justify-between '>


    {/* first section */}
    <div  >

      <div className='space-y-6 lg:ml-[5%] border-b-2 flex-col items-center  justify-center  ' >
        <h3 className='tracking-wider'>NO.1 SERVICE</h3>
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

       <Image className=' rounded-full' src={'/about-Image-04.jpg'} alt='about pic' width={100} height={100} />
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



      <div className=' flex flex-col lg:flex-row space-x-8 lg:mt-[3%] lg:ml-[5%]   md:items-center '>

        <button className='bg-blue-500 px-4 hover:bg-yellow-400 duration-300 ease-in-out hover:text-black   py-2 rounded-3xl text-white text-sm'>Read More</button>
        <div>
        <Icon icon="charm:phone-call" width="21" height="21" />
        </div>
        <div className='flex flex-col space-y-1'>

        <p className='text-gray-500 text-sm'>Call us Anytime</p>
        <p>(+00) 123 456789</p>
        </div>
        <div>
        <Icon icon="emojione:closed-mailbox-with-raised-flag" width="21" height="21" />
        </div>
        <div className='flex flex-col space-y-1'>

        <p className='text-gray-500 text-sm'>Email us at</p>
        <Link href={'mailto: mashhoodbutt47@gmail.com'} className='duration-300 ease-in-out hover:text-yellow-500 font-semibold'>mashhoodbutt47@gmail.com</Link>
        </div>
      </div>

    </div>


      {/* second section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div className=' text-black font-bold bg-yellow-400 rounded-xl flex flex-col w-36 h-24 p-1 items-center justify-center ' >
           
           <span className='text-2xl font-bold '>980 + </span>
           <p className='text-sm'>Successfull Services</p>
            {/* <Image  height={100} width={100}className="h-auto max-w-full rounded-lg" src="/1122.png" alt="a"/> */}
        </div>
        <div>
            <Image  height={100} width={100}className="h-auto max-w-full rounded-lg" src="/1122.png" alt="a"/>
        </div>
        <div>
            <Image  height={100} width={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt="s"/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
           
           
            <Image height={100} width={100} className="h-auto max-w-full rounded-lg" src="/man.jpg" alt="a"/>
        </div>
        <div>
            <Image height={100} width={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt="a"/>
        </div>
        <div>
            <Image height={100} width={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt="a"/>
        </div>
    </div>
    {/* <div className="grid gap-4">
        <div>
            <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt=""/>
        </div>
        <div>
            <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt=""/>
        </div>
        <div>
            <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt=""/>
        </div>
    </div> */}
    {/* <div className="grid gap-4">
        <div>
            <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt=""/>
        </div>
        <div>
            <Image  width={100} height={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt=""/>
        </div>
        <div>
            <Image width={100} height={100} className="h-auto max-w-full rounded-lg" src="/1122.png" alt=""/>
        </div>
    </div> */}
</div>


    </div>

  )
}

export default Service1