import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { LiaBuildingSolid } from "react-icons/lia";

const QuoteRequest = () => {
  return (
    <div className='bg-blue-600'>

        <div className='flex p-8     border-b-2 rounded-full items-center justify-between '>

<div className='  flex space-x-6 font-sans tracking-widest text-white items-center '>

<Icon icon="ph:buildings" className='h-24 w-16' />
            <div>

            <p>For Free Estimate</p>
            <h1 className=' text-2xl font-bold'>Request A Quote</h1>
            </div>
          </div>
          <div className='flex space-x-8 '>

            <div className='text-black bg-white hover:bg-yellow-400 duration-300 ease-in-out cursor-pointer p-2 rounded-xl flex flex-col items-center'>

            <LiaBuildingSolid className='h-10 w-10' />
            <p className='font-bold text-sm'>Commercial</p>

        
            </div>
             <div className='text-black bg-white hover:bg-yellow-400 duration-300 ease-in-out cursor-pointer p-2 rounded-xl flex flex-col items-center'>

            <LiaBuildingSolid className='h-10 w-10' />
            <p className='font-bold text-sm'>Commercial</p>

        
            </div>
             <div className='text-black bg-white hover:bg-yellow-400 duration-300 ease-in-out cursor-pointer p-2 rounded-xl flex flex-col items-center'>

            <LiaBuildingSolid className='h-10 w-10' />
            <p className='font-bold text-sm'>Commercial</p>

        
            </div>
             <div className='text-black bg-white hover:bg-yellow-400 duration-300 ease-in-out cursor-pointer p-2 rounded-xl flex flex-col items-center'>

            <LiaBuildingSolid className='h-10 w-10' />
            <p className='font-bold text-sm'>Commercial</p>

        
            </div>
            </div>


        </div>




        {/* form */}

        <form action="" className=' p-10 space-y-4 flex flex-col items-center '>
                <div className='flex space-x-8 '>

            <input type="text" placeholder='Your Name*'  className='rounded-xl p-2 w-96 focus:outline-none'/>
            <input type="email" placeholder='Email ID*'   className='rounded-xl p-2 w-96 focus:outline-none' />
            <input type="address" placeholder='Office Address'   className='rounded-xl  w-96 p-2 focus:outline-none ' />
                </div>
                <div className='flex space-x-8 '>

            <select aria-label='Select' value='none' className='rounded-xl p-2 w-96 focus:outline-none' >

                <option value="Commercial" className='hover:bg-yellow-400 duration-300 ease-in-out rounded-xl'>Commercial </option>
                <option value="Residential" className='hover:bg-yellow-400 duration-300 ease-in-out rounded-xl'> Residential</option>
                <option value="Individual" className='hover:bg-yellow-400 duration-300 ease-in-out rounded-xl'>Individual</option>
                <option value="Others" className='hover:bg-yellow-400 duration-300 ease-in-out rounded-xl'>Others</option>
            </select>
            
            <input type="Date" placeholder='Select Date'  className='rounded-xl p-2 w-96 focus:outline-none'/>
            <button className='w-96 bg-yellow-400 text-sm tracking-wider font-serif rounded-xl focus:outline-none text-black hover:bg-black hover:text-white duration-300 ease-in-out'>Get Estimate Quote</button>
                </div>



        </form>
    </div>
  )
}

export default QuoteRequest