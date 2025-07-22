import React,{ useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const {products}=useContext(ShopContext);
  const [latestProducts,setLatestProducts]=useState([])
  useEffect(()=>(setLatestProducts(products.slice(0,10))),[products])

  // console.log(products)

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
         <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, recusandae officiis pariatur doloremque </p>
      </div>  
      <div className='flex flex-wrap gap-4 justify-center'>
        {
        latestProducts.map((product)=>(
          <div key={product._id} className='w-[47%] sm:w-[31%] md:w-[23%] lg:w-[18%]'><ProductItem  id={product._id} name={product.name} image={product.image} price={product.price}/></div>
        ))
      }
      </div>
    </div>

  )
}

export default LatestCollection