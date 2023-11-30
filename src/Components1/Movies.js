import React from 'react'
import { MovieData } from '../Datas/data'
function Movies() {
  return (
    <div id='MOVIE' className='w-full text-white  h-[content]
   bg-black 
    flex flex-col items-center lg:justify-start
    md:top-[3rem] z-0 
    '>
      <div className='mt-[2rem]'>
        <h1 className='lg:text-[2.5rem] text-[1.5rem] font-bold text-center  md:text-[2rem] ' > Upcoming Movies
        </h1>
        <p className='lg:text-[1rem] text-center text-header-red font-semibold text-[0.9rem]
'>    ONLINE STREAMING</p>

      </div>

      <div className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto duration-500 transform place-items-center md:p-8 lg:grid-cols-2 2xl:grid-cols-4 gap-x-6 gap-y-6 '>
      {MovieData.map((e) => {
          return (

            <div key={e.id} className='h-full max-w-sm pb-6 mx-auto my-auto duration-300 transform shadow-sm cursor-pointer bg-header-black2 shadow-header-hero hover:-translate-y-1n p-7 hover:shadow-xl'>
            <img src={e.pic} key={e.id} alt="" className='w-[17rem] rounded h-[17rem] lg:w-[16rem] hover:opacity-80' />
              <h3  className='mt-2 ml-1 font-bold duration-500 max-w-[14.5rem]  cursor-pointer hover:text-header-red'>{e.name}</h3>
              <p  className='ml-1 font-medium text-gray-500'>year:{e.year}</p>
              <p  className='ml-1 font-medium text-gray-500' >Duration: {e.duree}</p>
            </div>

          )
        })}

      </div>
    </div>
  )
}

export default Movies