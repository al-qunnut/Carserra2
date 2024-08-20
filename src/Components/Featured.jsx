import React from 'react'
import suzuki from '../assets/suzuki.png'
import tesla from '../assets/tesla.png'
import toyota from '../assets/toyota.png'
import audi from '../assets/audi.png'
import bmw from '../assets/bmw.png'
import kia from '../assets/kia.png'
import mercedes from '../assets/mercedes.png'
import porsche from '../assets/porsche.png'

const Featured = () => {
    const cars = [{ id: 1, src: suzuki},
                  { id: 2, src: tesla},
                  { id: 3, src: toyota},
                  { id: 4, src: audi},
                  { id: 5, src: bmw},
                  { id: 6, src: kia},
                  { id: 7, src: mercedes},
                  { id: 8, src: porsche}          
    ]

    const useCar = cars.map(car => 
                  <img key={car.id} 
                  className='border border-blue-500 w-[100px] h-[100px] p-2 m-4 items-center' 
                  src={car.src} 
                  alt='img'/>)

  return (
    <div className='w-10/12 m-auto'>
        <h2 className='text-blue-700 text-xl font-bold'>Featured Market:</h2>
        <div className='bg-blue-100 border border-blue-600 my-8 p-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
        {useCar}
        </div>
        </div>
    </div>
  )
}

export default Featured