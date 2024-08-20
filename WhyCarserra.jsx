import React from 'react'
import vehincle from '../assets/Vehicle.png'
import carserra from '../assets/carserraBlue.png'

const WhyCarserra = () => {
  return (
    <div className='w-10/12 m-auto'>
        <div className="grid md:grid-cols-2 my-12 gap-12">
           <div className="">
            <img src={vehincle} alt='img'/>
           </div>

           <div className='border border-blue-800 p-8'>
            <div className='flex text-blue-800 text-2xl'>
            Why &nbsp; <img src={carserra} alt='Carserra' className=' w-[150px]'/> &nbsp; ?
            </div>

            <div className="text-black text-xl py-4">
            <p className='py-2' >We’ve a variety of market details for cars like suzuki, toyota, nissan, kia, tesla, ford and honda. </p>
            <p className='py-2'>You may find updated market price, model and complete specifications of your dream car.</p>
            <p className='py-2'> So you may able to buy it.</p>
            </div>
            
            <button className='bg-blue-800 text-white p-2 shadow-sm'>Get Market Details</button>
           </div>
        </div>
    </div>
  )
}

export default WhyCarserra