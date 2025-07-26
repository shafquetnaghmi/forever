import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"

const app=express()
app.use(express.json())
app.use(cors())

connectDb()
connectCloudinary()

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/',(req,res)=>{
    res.send("tada it is working")
})


app.listen(3000)
