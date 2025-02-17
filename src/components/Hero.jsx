import React from 'react'
import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px]  mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2 ' >GROWING WITH CRYPTO & DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow With Crypto.</h1>
          <div className='flex justify-center items-center '> 
            
            <p className='md:text-5xl sm:4xl text-xl font-bold'>Fast , Flexible financing for </p>  
            <ReactTyped 
            className='md:text-5xl sm:4xl text-xl font-bold pl-4'
            strings={["BTB","BTC","SASS",]}
            typeSpeed ={120}
            backSpeed = {140}
            loop
            /> 

        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Optimize your crypto assets with real-time data analytics.</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 my-6 text-black'>Get Started</button>
 
 </div>
        </div> 

  )
}

export default Hero