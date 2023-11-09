import React from 'react'
import { MovieData } from '../Datas/data'
function Movies() {
  return (
    <div id='MOVIE' className='w-[100%] text-white  h-[292rem]
    lg:h-[410rem] main:h-[85rem]  bg-black 
    flex flex-col items-center lg:justify-start

    md:h-[170rem] md:top-[3rem] z-0 
    '>
      <div className='mt-[2rem]'>
        <h1 className='lg:text-[2.5rem] text-[1.5rem] font-bold text-center  md:text-[2rem] ' > Upcoming Movies
        </h1>
        <p className='lg:text-[1rem] text-center text-header-red font-semibold text-[0.9rem]
'>    ONLINE STREAMING</p>

      </div>

      <div className='lg:w-[82%] h-[27rem] mt-12   
       grid place-items-center	 gap-4 lg:grid-cols-4  md:grid-cols-2 grid-cols-1 md:gap-[1rem]
       
       '>       {MovieData.map((e) => {
          return (

            <div className='  h-[22rem] w-[15rem]   md:w-[14rem] lg:w-[15rem] flex flex-col bg-black rounded text-white '>
              <img src={e.pic} key={e.id} alt="" className='w-[17rem] rounded h-[17rem] lg:w-[16rem] hover:opacity-80' />
              <h3 key={e.id} className='ml-3 font-bold duration-500 cursor-pointer hover:text-header-red'>{e.name}</h3>
              <p key={e.id} className='ml-3 font-normal text-gray-500'>year:{e.year}</p>
              <p key={e.id} className='ml-3 font-normal text-gray-500' >Duration: {e.duree}</p>
            </div>

          )
        })}

      </div>
    </div>
  )
}

export default Movies