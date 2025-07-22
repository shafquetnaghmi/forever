import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import Title from "../components/Title";

const Product = () => {
  const { products, currency ,addToCart} = useContext(ShopContext);
  const { productId } = useParams();
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [image,setImage]=useState('')
  const [product,setProduct]=useState(false)
  const [sizeError, setSizeError] = useState(false);


  const handleAddToCart=(productId,selectedSize)=>{
    if(selectedSize){
      addToCart(productId,selectedSize)
      setSizeError(false);
    }else{
      setSizeError(true)
    }
    
  }


  const fetchProductData= async ()=>{
    products.map((item,index)=>{
      if(item._id===productId){
        setProduct(item);
        setImage(item.image[0])
        return 
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
},[productId])

  return product ? (
  
    <div className="border-t-3 border-gray-200 pt-10">
      {/* {-----------------product Data-------------------} */}
      <div className="flex flex-col sm:flex-row mt-4 gap-12">
        {/* {-----------------productimages-------------------} */}
        <div className="flex-1 flex  flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col sm:w-[18.7%] w-full overflow-x-auto sm:overflow-y-scroll justify-between ">
            {
              product.image.map((item,index)=>(
                <div className="w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer" key={index}>
                  <img onClick={()=>(setImage(item))} src={item}  alt="" />
                </div>
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto " src={image}  alt="" />
          </div>
        </div>

        {/* {product info } */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{product.name}</h1>
          <div className="flex gap-1 items-center mt-2">
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_icon} className="w-3" alt="" />
            <img src={assets.star_dull_icon} className="w-3" alt="" />
            <p className="pl-2 ">(122)</p>
          </div>
          <p className="text-3xl mt-5 font-medium">{currency}{product.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{product.description}</p>

           <div className="flex flex-col my-8 gap-4">
               <p>Select Size</p>
               {sizeError && (<p className="text-red-600 text-sm -mt-2">Please select a size</p>)}
               <div className="flex gap-4 ">
                {product.sizes.map((size ,index)=>( 
                  <button  onClick={()=>(setSelectedSize(size))} key={index} className={`bg-gray-200 border px-4 py-2 ${selectedSize===size? "border-orange-700":"border-gray-200"} hover:border-orange-400`}>{size}</button>
                ))}
               </div>

           </div>
           <button   onClick={()=>handleAddToCart(productId,selectedSize)}  className="bg-black text-white px-8 py-4 cursor-pointer">ADD TO CART </button>
           <hr className="mt-8 w-4/5 border-gray-200"/>
           <div className="text-gray-500 text-sm mt-5 flex flex-col ">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
           </div>
        </div>

      </div>

      <div>
        <div className="flex  mt-5 ">
          <p className="border border-gray-200 p-2">Description</p>
          <p className="border border-gray-200 p-2">Reviews (122)</p>
        </div>
        <div className="text-gray-500 text-sm border border-gray-200">
          <p className="pl-3 pt-3">
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
          </p>
          <p className="pl-3 pt-3 pb-3">
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center text-3xl mt-15">
        <Title text1={"RELATED"} text2={"PRODUCTS"}/>
      </div>
      <div className="flex mt-5">
        <RelatedProducts  category={product.category} subCategory={product.subCategory}/>
      </div>

    </div>
  ) : null;
};

export default Product;
