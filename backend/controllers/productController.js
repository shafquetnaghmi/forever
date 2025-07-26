//add product  totalProductList removeProduct singleProductDetails
import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';


const addProduct=async (req,res)=>{
    try{
        const {name,description,price,category,subCategory,sizes,bestseller}=req.body
        const image1=req.files.image1 && req.files.image1[0]
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]
        
        console.log(typeof(sizes))
        
        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)
        // storing images in cloudinary and getting all the links 
        let imagesUrl=await Promise.all(
            images.map(async (item)=>{
                let result=await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )
        const productData={
            name,
            description,
            price:Number(price),
            category,
            subCategory,
            sizes:JSON.parse(sizes),
            bestseller:bestseller==="true"?true:false,
            image:imagesUrl,
            date:Date.now()
        }
        const product=new productModel(productData)  //new instance have to create then only save method will work or just use create
        await product.save()


        console.log(productData)
        // console.log(imagesUrl)
        res.status(200).json({message:"product added "})

    }catch(error){
        res.json({message:error.message})
    }
}

const listProducts=async()=>{

}


const removeProduct=async()=>{

}


const singleProduct=()=>{

}


export {addProduct,listProducts,removeProduct,singleProduct}