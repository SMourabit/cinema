
import React from 'react'
import { serieData } from '../Datas/data'
function Series() {
  return (
    <div id='SERIES' className='w-full text-white relative top-0
     md:top-[0rem] z-40  h-full lg:h-fit bg-header-service
    flex flex-col items-center lg:justify-start
    '>
      {/* bg-header-services */}
      <div className='mt-[2rem]'>
        <h1 className='lg:text-[2.5rem] text-[1.5rem] font-bold  md:text-[2rem] ' >World Best TV Series
        </h1>
        <p className='lg:text-[1rem] text-center text-header-red font-semibold text-[0.9rem]
'>   BEST TV SERIES</p>

      </div>
      <div className='container grid justify-center w-auto grid-cols-1 p-10 mx-auto duration-500 transform place-items-center md:p-8 lg:grid-cols-2 2xl:grid-cols-4 gap-x-6 gap-y-6 '>

        {serieData.map((e) => {
          return (

               <div key={e.id} className='h-full max-w-sm pb-6 mx-auto my-auto duration-300 transform shadow-sm cursor-pointer bg-header-black2 shadow-header-hero hover:-translate-y-1n p-7 hover:shadow-xl'>
              <img src={e.pic}  alt="" className='w-[20rem] rounded h-[17rem]  hover:opacity-80' />
              <h3  className='mt-2 ml-3 font-bold duration-500 cursor-pointer hover:text-header-red'>{e.name}</h3>
              <p  className='ml-3 font-medium text-gray-500 '>year:{e.year}</p>
              <p  className='ml-3 font-medium text-gray-500' >Duration: {e.duree}</p>
            </div>

          )
        })}

      </div>
    </div>
  )
}

export default Series