import React, { useState } from 'react'
import axios from "axios"
// import { backendUrl } from '../App';
export const backendUrl=import.meta.env.VITE_BACKEND_URL

const Login = ({setToken}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const onSubmitHandler=async (e)=>{
        try{
            e.preventDefault()
            //console.log(email,password)
            const response=await axios.post(backendUrl+'/api/user/admin',{email,password})
            console.log(response)
            const token=response.data.token;
            setToken(token)
        }catch(error){

        }
    }
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl mb-2 '>Admin Panel</h1>
            <form className='flex flex-col gap-2' onSubmit={onSubmitHandler}>
                <div className='mb-3 '>
                    <p className='text-gray-700 mb-2'>Email</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='outline-none px-5 py-2 border border-gray-300 rounded' type="email" placeholder='Enter your email' required />
                </div>
                <div className='mb-3'>
                    <p className='text-gray-700 mb-2'>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='outline-none px-5 py-2 border border-gray-300 rounded' type="password" placeholder='Password' required/>
                </div>
                <button type='submit' className='text-white bg-black px-1 py-2 border rounded'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login