import React, { useState } from 'react'
import carserra from '../assets/casseraBlack.png'
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Navigation = () => {
  const navs = [{id: 1, name:'News'}, 
                {id: 2, name:'Find a car'},
                {id: 3, src: carserra},
                {id: 4, name: 'About Us'},
                {id: 5, name: 'Contact'}
  ]

  const useDesktop = navs.map(nav => 
                     <li key={nav.id} 
                     className='text-2xl font-semibold hover:uppercase acive:shadow-md transition-0.5s'>
                        {nav.name}
                      <img src={nav.src}/>
                      </li>)

  const useMobile = navs.map(nav => 
                     <li key={nav.id} 
                     className='text-2xl text-gray-300 font-semibold hover:uppercase hover:border-b 
                     acive:opacity  transition-0.5s my-12'>
                        {nav.name}
                      </li>)

  const [mobile, setMobile] = useState(true);

  const handleToggle = () => {
    setMobile((prev) => (!prev));
  }

return (
  <div className="w-10/12 m-auto">
    <div className='hidden md:block'>
      <ul className='flex justify-between my-8'>
        {useDesktop}
      </ul>
    </div>
    
    <div className="md:hidden">
     <div className="flex justify-between my-8">
     <div className="">
       <img src={carserra} alt='img' className='w-[200px] mt-2'/>
       </div>
       
      <div className="">
        <button onClick={handleToggle}>
        {mobile ? (<IoClose   size={40}/>):( <IoIosMenu size={40} />)}
        </button>
       {mobile && (
        <div className="bg-blue-700 text-white p-8 absolute w-full h-full left-0">
        <ul className=''>
           {useMobile}
        </ul>
        </div>
       )} 
      </div>
     </div>
    </div>
  </div>
  )
}

export default Navigation