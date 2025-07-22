import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext)
  return (
    <Link className='text-gray-500 cursor-pointer'  to={`/product/${id}`} >
        <div>
            <img src={image[0]} alt="" />
            <p>{name}</p>
            <p className='text-black'>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem