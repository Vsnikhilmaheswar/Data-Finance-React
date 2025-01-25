import React from 'react'
import Laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className='bg-white w-full py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
         <img className='w-[500px] mx-auto my-4'  src={Laptop} alt='/'/>
         <div className='flex flex-col justify-center'> 
            <p className='text-[#00df9a] font-bold md:text-2xl'>Data Analytics Dashboard</p>
           <h1 className='md:text-4xl text-bold'>Manage Data Analytics Centerally </h1>
           <p>dcsddcs sdsd s cs cds cds csd cs cdsssdf edg r cac seferfefef sfsf sefewfwe   sefsfegrha dwf h jt  d fw feg e5tefefefw  wfwefwf</p>
           <button className='text-[#00df9a] w-[200px] rounded-md font-medium  py-3 my-6 bg-black'>Get Started</button>
 
         </div>
        </div>

    </div>

  )
}

export default Analytics