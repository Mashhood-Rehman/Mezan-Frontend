"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [visible , setVisible] = useState(false)
            useEffect(()=> {

                const togglevisibility = () => {
                    if(window.scrollY >300) {
                        setVisible(true)
                    }else {
                        setVisible(false)
                    }
                }
                window.addEventListener("scroll" , togglevisibility)
                return  () => {
                    window.removeEventListener("scroll" , togglevisibility)
                }
            },[])
    const scrolltotop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>

        <div className=' fixed animate-pulse bottom-4 right-4'>
            {visible && (
                <button className='bg-blue-500 flex items-center justify-center w-12 h-12 rounded-full focus:outline-none text-white' onClick={scrolltotop}>
        <Icon icon="tabler:arrow-merge" />
                </button>
            )}
        </div>
    </div>
  )
}

export default ScrollToTop