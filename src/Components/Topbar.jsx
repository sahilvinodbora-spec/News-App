import React from 'react'
import nlogo from '../assets/newslogo.avif'

function Topbar() {
  return (
    <div className='w-full flex justify-between p-5 border-b-1 shadow-lg font-bold text-2x1 fixed z-50 mb-10 '>
      <div className='flex gap-1'>
        <img className='size-6' src={nlogo} alt="" />News App
      </div>
      
      <div className=' flex gap-3 '>
      <button className='hover:text-gray-200 cursor-pointer'>Home</button>
      <button className='hover:text-gray-200 cursor-pointer'>About</button>
      <button className='hover:text-gray-200 cursor-pointer rotate-90'>|||</button>
      </div>
      
    </div>
  )
}

export default Topbar;
