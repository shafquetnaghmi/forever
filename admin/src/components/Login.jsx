import React from 'react'

const Login = () => {
    const onSubmitHandler=(e)=>{
        try{
            e.preventDefault()
        }catch(error){

        }
    }
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl mb-2 '>Admin Panel</h1>
            <form className='flex flex-col gap-2' onClick={onSubmitHandler}>
                <div className='mb-3 '>
                    <p className='text-gray-700 mb-2'>Email</p>
                    <input className='outline-none px-5 py-2 border border-gray-300 rounded' type="email" placeholder='Enter your email' />
                </div>
                <div className='mb-3'>
                    <p className='text-gray-700 mb-2'>Password</p>
                    <input className='outline-none px-5 py-2 border border-gray-300 rounded' type="password" placeholder='Password' />
                </div>
                <button type='submit' className='text-white bg-black px-1 py-2 border rounded'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login