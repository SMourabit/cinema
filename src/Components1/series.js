
import React from 'react'
import { serieData } from '../Datas/data'
function Series() {
  return (
    <div id='SERIES' className='w-[100%] text-white relative  h-[101rem] top-0
     lg:h-[40rem] bg-header-service
    md:h-[58rem] md:top-[0rem] z-40 
    flex flex-col items-center lg:justify-start
    '>
<div className='mt-[2rem]'>
      <h1 className='lg:text-[2.5rem] text-[1.5rem] font-bold  md:text-[2rem] ' >World Best TV Series
      </h1>
      <p className='lg:text-[1rem] text-center text-header-red font-semibold text-[0.9rem]
'>   BEST TV SERIES</p>

</div>
      <div className='lg:w-[82%] h-[27rem] mt-12   
       grid place-items-center	 gap-4 lg:grid-cols-4  md:grid-cols-2 grid-cols-1 md:gap-[1rem]
       
       '>
        {serieData.map((e) => {
          return (

            <div className='  h-[22rem] w-[15rem]   md:w-[14rem] lg:w-[15rem] flex flex-col bg-black rounded text-white '>
              <img src={e.pic} key={e.id} alt="" className='w-[17rem] rounded h-[17rem] lg:w-[16rem] hover:opacity-80' />
              <h3  key={e.id} className='ml-3 font-bold duration-500 cursor-pointer hover:text-header-red'>{e.name}</h3>
              <p  key={e.id}className='ml-3 font-normal text-gray-500'>year:{e.year}</p>
              <p key={e.id} className='ml-3 font-normal text-gray-500' >Duration: {e.duree}</p>
            </div>

          )
        })}

      </div>
    </div>
  )
}

export default Series