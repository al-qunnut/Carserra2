import React from 'react'
import carserra from '../assets/caserraTrans.png'
import { IoSearch } from "react-icons/io5";

const DreamCar = () => { 
  const searches = [{id:1, name:"Tesla X"},
                    {id:2, name:"Juke"},
                    {id:3, name:"Fortuner"},
                    {id:4, name:"Thundra"},
                    {id:5, name:"Elentra"},
  ]

  const searchOptions = searches.map(search => 
                      <div className="m-2 text-gray-500 inline-block " 
                          key={search.id}>
                                {search.name}
                        </div>)
return (
  <div className='w-10/12 m-auto border border-blue-600 bg-blue-50'>
  <div className="p-12 ">
       <h2 className='text-blue-900 text-xl md:text-2xl font-semibold'>
         Finding a dream car is not that easy, 
         but we made it easy for you in just one 
         click you may able to get market details.
       </h2>
       <div className="flex justify-center items-center">
         <img src={carserra} alt='img'  className='w-[200px] py-8 ' />
       </div>

       <div className="flex">
         <input type='text' 
         className='w-full border border-blue-400 p-2'
         placeholder='Find your dream car here...'/>
       <button>
         <IoSearch 
            size={45} 
            color='white' 
            className='bg-blue-500 p-2 active:opacity-5 transition-0.5'/>
       </button>
      </div>
      
        <div className="border my-12">
         <p>Recent Searches:</p>
         <div className='inline'>
          {searchOptions}
         </div>
        </div>
        </div>
    </div>
  )
}

export default DreamCar