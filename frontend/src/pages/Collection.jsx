import React, { useContext ,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const {products ,search,showSearch}=useContext(ShopContext)
  const [showFilter, setShowFilter]=useState(false)
  const [filterProducts,setfilterProducts]=useState([])
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([])
  const [sortType,setSortType]=useState("relevant")

  const toggleCategory=(e)=>{
    //console.log("Checkbox clicked:", e.target.value);
    if(category.includes(e.target.value)){
      setCategory((prev)=>(prev.filter((item)=>{return item!==e.target.value})))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    //console.log("Checkbox clicked:", e.target.value);
    if(subCategory.includes(e.target.value)){
      setSubCategory((prev)=>(prev.filter((item)=>{return item!==e.target.value})))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }
  // useEffect(()=>{
  //   console.log(category)
  // },[category])

  // useEffect(()=>{
  //   console.log(subCategory)
  // },[subCategory])

//   useEffect(()=>{
//     setfilterProducts(products)
// },[])


const applyFilter=()=>{
  let  productsCopy=products.slice()
  
  if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(category.length>0){
    productsCopy =productsCopy.filter(item=>category.includes(item.category))
  }

  if(subCategory.length>0){
    productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
  }

  setfilterProducts(productsCopy)
}
useEffect(()=>{
  applyFilter();
},[category,subCategory,search,showSearch])

const sortProduct=()=>{
  let productsCopy=products.slice();
  
  switch (sortType){
    case 'low-high':
      setfilterProducts(productsCopy.sort((a,b)=>(a.price-b.price)))
      break;
    case 'high-low':
      setfilterProducts(productsCopy.sort((a,b)=>(b.price-a.price)))
      break;
    default:
      applyFilter()
  }
}

useEffect(()=>{
  sortProduct()
},[sortType])

  return (
    <div className='flex flex-col sm:flex-row border-t gap-1 sm:gap-10'>
      {/* {filter options left side } */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center gap-3' onClick={()=>(setShowFilter(!showFilter))}>FILTERS 
          <img className={`sm:hidden ${showFilter?"rotate-90":""} h-4`} src={assets.dropdown_icon}  alt="" />
        </p>
        {/* {category filter} */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?" ":"hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col text-gray-700 text-sm gap-2'>
             <p className='flex gap-2'>
              <input type="checkbox" value={'Men'} onChange={toggleCategory} />Men
             </p><p className='flex gap-2'>
              <input type="checkbox" value={'Women'} onChange={toggleCategory} />Women
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
             </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?" ":"hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col text-gray-700 text-sm gap-2'>
             <p className='flex gap-2'>
              <input type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
             </p><p className='flex gap-2'>
              <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
             </p>
          </div>
        </div>
        
      </div>

      {/* {right side} */}
      <div className='flex-1'>
        <div className='flex justify-between mt-4 text-base sm:text-2xl mb-4 '>
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-500 text-sm px-2'>
           <option value="relevant">Sort by: Relevant</option>
           <option value="low-high">Sort by: low to high</option>
           <option value="high-low">Sort by: high to low</option>
           </select>
        </div>
        <div className='flex flex-wrap gap-4 '>
        {
          filterProducts.map((product)=>(
            <div key={product._id} className='basis-[47%] sm:basis-[47%] md:basis-[31%] lg:basis-[23.5%]'>
              <ProductItem name={product.name} price={product.price} id={product._id} image={product.image} />
            </div>
          ))
        }
      </div>
      </div>

      

    </div>
  )
}

export default Collection