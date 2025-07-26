import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import validator from 'validator';
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser=async (req,res)=>{
    const{email,password}=req.body;
    try{
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid credentials"})
        } 
        const ismatch=await bcrypt.compare(password,user.password);
        if(ismatch){
            const token=createToken(user._id);
            res.status(200).json({token:token})
        }else{
            return res.status(401).json({message:"Invalid credentials"})
        }

    }catch(error){
        res.json({message:error.message})
    }
    

}

const registerUser=async (req,res)=>{
    const {name,password,email}=req.body;
    try{
        const exist=await userModel.findOne({email})
        if(exist) return res.status(400).json({message:"User already exist "});
        if(!validator.isEmail(email))return res.status(400).json({message:"please put a correct email"});
        if(password.length<6)return res.status(400).json({message:"Please enter a strong password"})
        
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await userModel.create({
            name:name,
            email:email,
            password:hashedPassword
        })
        const token=createToken(newUser._id);
        res.status(200).json({token:token})
    }catch(error){
        res.status(500).json({message:"Registration failed",error:error.message})
    }
}

const adminLogin=async (req,res)=>{

}

export {loginUser,registerUser,adminLogin}