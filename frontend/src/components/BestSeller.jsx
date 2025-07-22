import React, { useContext, useState,useEffect } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products}=useContext(ShopContext)
    const[bestSeller,setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProduct=products.filter((product)=>(product.bestseller))
        setBestSeller(bestProduct.slice(0,5))
    },[products])
    //console.log(bestSeller);
  return (
    <div>
        <div className='text-3xl text-center py-8'>
            <Title text1={"BEST"} text2={"SELLERS"} />
            <p className='text-xs sm:text-sm md:text-base width-3/4 m-auto text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
            {
                bestSeller.map((product)=>(
                    <div key={product._id} className='w-[47%] sm:w-[31%] md:w-[23%] lg:w-[18%]' >
                        <ProductItem  id={product._id} name={product.name} image={product.image} price={product.price}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller