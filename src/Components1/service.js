import React from 'react'
import { IoLaptop } from 'react-icons/io5'
import { BsFillCameraVideoFill } from 'react-icons/bs'
function Service() {
    return (
        <div id='SERVICE' className='flex flex-col items-center justify-center h-full p-6 bg-header-hero '>


            <div className='mb-[2rem] '>
                <h1 className='lg:text-[2.5rem] text-[1.5rem] font-bold  md:text-[2rem] text-white' >World Best Services
                </h1>
                <p className='lg:text-[1rem] text-center text-header-red font-semibold text-[0.9rem]
             '>   BEST SERVICES </p>
            </div>



            <div className='flex flex-col justify-between   lg:gap-[3rem] lg:flex-row '>

                <img src="s.jpg" className=' h-[16rem] w-[15rem] mr-auto ml-auto md:w-[18rem] md:h-[18rem]  lg:w-[20rem]   lg:h-[26rem] mt-[1rem]'alt="" />

                <div className='w-[15rem] lg:w-[25rem] md:w-[28rem] mt-[1rem] h-full'>
                    <div>
                        <h5 className='font-bold lg:text-[25px] text-yellow-400 '> OUR SERVICES  </h5>
                        <h1 className='text-yellow-400'>Download Your Shows Watch Offline.</h1>
                        <p className='font-normal text-gray-500'>Lorem ipsum dolor sit ame   t, consecetur adipiscing elseddo eiusmod
                            tempor.There are many variations of passages of
                            lorem Ipsum available, but the majority have suffered alteration in some injected humour 
                            have suffered alteration in some injected humour
                            .</p>

                    </div>

                    <div>

                        <div>
                            <div className='flex flex-row text-white'>
                                <IoLaptop className='hidden mt-6  lg:block lg:h-[2rem] lg:w-[3rem] ' />
                                <h1 className='ml-1 font-bold mt-7'> Enjoy on Your TV.  </h1>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>


                    <div>

                        <div >
                            <div className='flex flex-row text-white '>


                                <BsFillCameraVideoFill className='mt-6   hidden  lg:block lg:h-[2rem] lg:w-[3rem] ' />
                                <h1 className='ml-1 font-bold mt-7'> Watch Everywhere.
                                </h1>
                            </div>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Service