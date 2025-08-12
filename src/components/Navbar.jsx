import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <nav className='h-15 w-full bg-[#e9f7f1] flex items-center justify-between px-2 sm:px-4 lg:px-8 '>
        <h1 className='text-2xl font-semibold sm:text-[28px] xl:font-bold'>Pavilion</h1>
        <div className=' flex lg:gap-5 xl:gap-12 cursor-pointer '>
            <p className='hidden lg:block font-semibold xl:text-[17px]'>Membership</p>
            <p className='hidden lg:block font-semibold xl:text-[17px]'>Community</p>
            <p className='hidden lg:block font-semibold xl:text-[17px]'>PavilionU</p>
            <p className='hidden lg:block font-semibold xl:text-[17px]'>Events</p>
            <p className='hidden lg:block font-semibold xl:text-[17px]'>Stay Informed</p>
        </div>

        <div className='flex items-center gap-2 sm:gap-4 xl:gap-5'>
            < GiHamburgerMenu className='cursor-pointer text-xl sm:text-2xl lg:hidden' />
            <button className='px-4 py-2 bg-blue-600  hover:bg-transparent hover:border-1 hover:border-blue-600 hover:text-black transition duration-700 text-xs text-white cursor-pointer rounded-xl hidden sm:block sm:font-semibold sm:text-[14px]'>JOIN NOW</button>
             <button className='px-4 py-[6px] border-2 hover:bg-blue-600 hover:text-white transition duration-700 border-blue-700 text-xs cursor-pointer rounded-[10px] font-medium sm:text-[15px]'>Log In</button>


        </div>

      
    </nav>
  )
}

export default Navbar
