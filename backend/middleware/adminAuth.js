import jwt from "jsonwebtoken"

const adminAuth=(req,res,next)=>{
    try{
        const {token}=req.headers;
        if(!token){
            return res.status(400).json({message:"not a valid token"})
        }
        const token_decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(token_decoded!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.status(400).json({message:"invalid token"})   
        }
        // res.status(200).json({message:"next"})
        next()

    }catch(error){
        return res.status(400).json({message:error.message})   
    }
}

export default adminAuth