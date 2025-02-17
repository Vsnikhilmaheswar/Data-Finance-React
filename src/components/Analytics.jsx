import React from 'react'
import Laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className='bg-white w-full py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <img className='w-[500px] mx-auto my-4'  src={Laptop} alt='/'/>
         <div className='flex flex-col justify-center'> 
            <p className='text-[#00df9a] font-bold md:text-2xl'>Crypto Analytics Dashboard</p>
           <h1 className='md:text-4xl sm:text-3xl py-2 text-bold'>Manage Your Crypto Portfolio Seamlessly</h1>
           <p className=''>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best.</p>
           <button className='text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 my-6 bg-black'>Get Started</button>
 
         </div>
        </div>

    </div>

  )
}

export default Analytics