import React from 'react'

function Hero() {
  return (
    <div className='h-[calc(100vh-60px)] w-full bg-gradient-to-tr from-violet-500 to-orange-300 flex items-center flex-col pt-20'>
      <h1 className='text-center text-white text-5xl font-semibold leading-13 sm:text-7xl sm:leading-20 md:text-8xl md:leading-25 xl:text-[100px] xl:leading-26 xl:font-bold'>Unlock your <br />Professional <br />potential</h1>
      <p className='text-center text-white mt-6 mb-8 sm:mt-8 sm:mb-10 xl:text-[18px] xl:mt-10'>Level up with community-powered learning,in-person or vertual events around the world,and endless tools for go-to-market leaders.</p>
      <div className='flex flex-col gap-5 md:flex-row'>
        <button className='px-4 py-2 cursor-pointer bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition duration-700 rounded-2xl text-[14px] font-semibold lg:px-7 lg:py-2 xl:px-8'>BECOME A MEMBER</button>
        <button  className='px-4 py-2 cursor-pointer border-1 border-white text-white  hover:bg-purple-600 hover:border-purple-600 hover:text-white transition duration-700 rounded-2xl text-[14px] font-semibold lg:px-7 lg:py-2 xl:px-8'>OUR COMMUNITY</button>
      </div>
      
    </div>
  )
}

export default Hero
