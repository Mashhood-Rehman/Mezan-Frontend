import PortfolioImages from '@/app/components/PortfolioImages'
import React from 'react'

const Porfolio = () => {
  return (
    <div>

        <div className='space-y-4 p-10'>
            
        <h1 className=' tracking-widest text-black flex items-center justify-center text-sm'>

        Porfolio
        </h1>

        <h1 className=' text-black flex items-center justify-center text-3xl tracking-wide'>Our Recent Work & Portfolio</h1>
        </div>



      
          <PortfolioImages />

      
        </div>
  )
}

export default Porfolio