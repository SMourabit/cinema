import React from 'react'
import { MovieData } from '../Data/data'
function Movies() {
  return (
    <div id='MOVIE' className='w-[100%] text-white relative top-[-2rem] h-[390rem]
       lg:top-[-1rem]
    lg:h-[410rem] main:h-[115rem]  bg-black main:top-[-14rem]
    md:h-[210rem] md:top-[3rem] z-0 
    '>
      <p className='lg:text-[1rem] text-header-red font-semibold  ml-[5rem] relative 
top-[68px] text-[0.9rem]
'>   ONLINE STREAMING</p>
      <h1 className='lg:text-[2.5rem] font-bold ml-[5rem] mt-[3rem] md:text-[2rem] text-[1.5rem]' >Upcoming Movies</h1>
      <div className='lg:w-[90%] h-[27rem] mt-12 lg:m-[5rem] md:m-[5rem]  grid place-items-center main:gap-7 lg:gap-6	main:grid-cols-4 gap-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
        {MovieData.map((e) => {
          return (

            <div className=' lg:w-[17rem] h-[30rem] w-[16rem] main:w-[17rem] flex flex-col bg-black rounded text-white '>
              <img src={e.pic} alt="" className='w-[17rem] rounded h-[26rem] hover:opacity-80' />
              <h3 className='font-bold ml-3  hover:text-header-red duration-500'>{e.name}</h3>
              <p className='ml-3 font-light'>year:{e.year}</p>
              <p className='ml-3 font-light' >Duration:{e.duree}</p>
            </div>

          )
        })}

      </div>
    </div>
  )
}

export default Movies