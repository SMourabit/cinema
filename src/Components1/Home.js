import React from 'react';

function Home() {
  return (
    <div id="HOME" className="z-0 flex h-screen 
     bg-header-hero 
      text-white text-[30px] mt-[4rem] w-full ">
      <img
        src="hero.jpg"
        alt="hi"
        className="absolute z-0 object-cover w-full h-full lg:h-fit"
      />


      <div className='flex justify-start w-full h-full'>

      <div className="relative px-8 py-12 font-semibold text-left w-fit">
        <h4 className="text-header-red text-[29px] font-medium md:text-[22px] ">
          FilmLand
        </h4>
        <h1 className="text-[2rem]  md:text-[2.8rem]  lg:text-[3.5rem]  ">
          Unlimited Movie,<br />
          TVs Shows, & More.
        </h1>
        <h3 className="md:text-[23px] font-medium text-yellow-200  text-[16px]">
          Romance , Action , Horror
        </h3>
      </div>
      </div>
      
    </div>
  );
}

export default Home;
