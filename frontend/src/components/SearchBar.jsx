import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
  const [visible,setVisible]=useState(false);
  const location=useLocation()
  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setVisible(true);
    }else{
        setVisible(false)
    }

  },[location])
  return showSearch && visible ?(
    <div className='border-t border-b bg-gray-100 text-center'>
        <div className='inline-flex items-center  w-3/4 sm:w-1/2  border border-gray-400 px-5 py-2 my-3 mx-3 rounded-full '>
            <input onChange={(e)=>(setSearch(e.target.value))} className='w-full outline-none' type="text" name="" value={search}  placeholder='Search'/>
            <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>(setShowSearch(false))} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />
    </div>
  ):null
}

export default SearchBar