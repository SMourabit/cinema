import React from 'react'
import { Link } from 'react-scroll'
import { GiFilmSpool, GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div>
       <nav className="fixed top-0 z-50 w-full text-white shadow-lg bg-header-hero">
      <div className="container flex items-center justify-between m-auto ">
        <h1 className="flex gap-2 py-4 pl-8 text-2xl font-bold text-white cursor-pointer md:ml-0 flew-row ">
              <GiFilmSpool className="ml-[-1rem] md:ml-0 text-3xl text-left text-red-500" /> FilmLand
        </h1>

        <ul className="items-center hidden pr-10 text-base font-normal cursor-pointer lg:flex">
          <li className="px-6 py-4 duration-500 hover:text-header-red hover:pointer-auto" > <Link to="home" smooth={true} offset={-100} duration={500}>  Home </Link> </li>
          <li className="px-6 py-4 duration-500 hover:text-header-red hover:pointer-auto" > <Link to="services" smooth={true} offset={-100} duration={500}>        Services 
            </Link> </li>
          <li className="px-6 py-4 duration-500 hover:text-header-red" > <Link to="series" smooth={true} offset={-100} duration={500}>  Series </Link> </li>
          <li className="px-6 py-4 duration-500 hover:text-header-red" > <Link to="movies" smooth={true} offset={-100} duration={500}>  Movies </Link> </li>
        </ul>
        

        {/* phone & tablet */}
        <button className=" lg:hidden group">
          <GiHamburgerMenu className="mr-5 text-2xl" />



          <div class="absolute top-0 w-8/12 h-screen ml-auto mr-auto transition-all flex 
          items-center duration-500 bg-header-hero text-white opacity-0 md:w-5/12 right-full group-focus:right-0 group-focus:opacity-100">
  <ul class="flex flex-col items-center justify-center w-[98%]  font-medium  m-2">
    <li class=" px-6 py-4 w-full duration-500 uppercase rounded-lg  hover:bg-[#2f3840]">
      <Link to="home" smooth={true} duration={400}>
      Home
      </Link>
    </li>

    <li class="w-full px-6 py-4 duration-500 uppercase hover:bg-[#2f3840] rounded-lg">
      <Link to="services" smooth={true} duration={400}>
      Services 
      </Link>
    </li>

    <li class="w-full px-6 py-4 duration-500 uppercase hover:bg-[#2f3840] rounded-lg">
      <Link to="series" smooth={true} offset={-200} duration={400}>
      Series
      </Link>
    </li>

    <li class="w-full px-6 py-4 uppercase duration-500 hover:bg-[#2f3840] rounded-lg">
      <Link to="movies" smooth={true} offset={-200} duration={400}>
      Movies
      </Link>
    </li>

  
  </ul>
</div>


        </button>

      </div>
    </nav>
    </div>
  )
}

export default Header