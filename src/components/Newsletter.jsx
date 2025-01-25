import React from 'react'

function Newsletter() {
  return (
    <div className=' w-full  py-16 text-white  '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
     <div className='lg:col-span-2 my-4'>
     <h1 className='md:text-5xl sm:text-4xl text-xl text-bold py-2 '>Want tips & tricks optimize your flows?</h1>
     <p>sign up to our newsletter and stay up to date.</p>
     </div>
    
            <div className='my-4 '>
               <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                 <input type='email' placeholder='Enter Email' className=' bg-white text-black h-12 p-3 flex  w-full rounded-md'/>
                 <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 my-6 text-black'>Get Started</button>
                </div>
             <p>We care about the protection of your data . Read our  <span className='text-[#00df9a]'>Privacy Policy .</span>{' '} </p>
           </div>
      
      </div>
       
      </div>

   
  )
}

export default Newsletter