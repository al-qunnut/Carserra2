import React from 'react'
import cassera from '../assets/cassera.png'

const Footer = () => {
  const today = new Date();

  const specifications = ["Toyota", "Porshe", "BMW",
                          "Honda", "KIA", "Audi",
                          "Tesla", "Mercedes", "Nassan",
  ]
  const setSpecifications = specifications.map(specification => <li className=''>{specification}</li>)
  return (
    <div className=' bg-blue-600 text-white '>
       <div className= 'w-11/12 m-auto py-4'>
       <div className="grid sm:grid-cols-1 md:grid-cols-4">
       <div className=" text-center py-4 pr-4">
        <img className="" src={cassera} alt='img' />
       </div>

        <div className="">
          <h2 className='py-2 font-bold md:text-xl'>Find Support</h2>
          <ul>
            <li><a href='https://account.mail.com'>info@carserra.com</a></li>
            <li><a href='#'>www.carserra.com</a></li>
            <li><a href='#'>admin.carserra.com</a></li>
          </ul>
        </div>
        
        <div className="">
        <h2 className='py-2 font-bold md:text-xl'>Find us on</h2>
          <ul>
            <li><a href='https://www.facebook.com'>Facebook</a></li>
            <li><a href='https://www.twitter.com'>Twitter</a></li>
            <li><a href='https://www.instagram.com'>Instagram</a></li>
          </ul>
        </div>

        <div className="">
        <h2 className='py-2 font-bold md:text-xl'>Find Specifications</h2>
         <div className=''>
          <ul className='grid grid-cols-3'>
            {setSpecifications}
          </ul>
         </div>
        </div>
       </div> 
       </div>
       <div className="bg-blue-300 text-center"> &copy; All Rights Reserved . Carserra . {today.getFullYear()}</div>
    </div>
  )
}

export default Footer