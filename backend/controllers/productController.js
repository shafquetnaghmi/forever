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

const listProducts=async(req,res)=>{
    try{
        const products=await productModel.find({});
        res.status(200).json({products})
    }catch(error){
        res.status(400).json({message:"something went wrong"})
    }
}


const removeProduct=async(req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.body.id)
        res.status(200).json({message:"product removed"}) 
    }catch(error){
        res.status(400).json({message:"error in removing product"})
    }

}


const singleProduct=async (req,res)=>{
    try{
        const {productId}=req.body;
        const product=await productModel.findById(productId)
        // if(!product){
        //     res.json({message:"something went wrong1"})
        // }
        res.status(200).json({product})
    }catch(error){
        res.status(400).json({message:"something went wrong2"})
    }

}


export {addProduct,listProducts,removeProduct,singleProduct}