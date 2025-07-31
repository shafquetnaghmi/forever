import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%]' >
        <img className="h-14" src={assets.logo} alt="" />
        <button className='bg-gray-600 text-white px-7 rounded-4xl py-1.5'>Logout</button>
    </div>
  )
}

export default Navbar