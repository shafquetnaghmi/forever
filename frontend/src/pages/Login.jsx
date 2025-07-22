import React,{useState}from 'react'

const Login = () => {

  const [currentState,setCurrentState]=useState("Signup")

  const handleClick=(e)=>{
    e.preventDefault()
  }
  return (
      <form onClick={handleClick} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='flex items-center gap-4'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='bg-gray-800 border-none h-[1.5px] w-8'/>
        </div>
       {currentState==="Login"?"": <input className='border border-gray-800  w-full px-3 py-2'  type="text" placeholder='Name' />}
        <input className='border border-gray-800  w-full px-3 py-2'  type="text" placeholder='Email' />
        <input className='border border-gray-800  w-full px-3 py-2'  type="password" placeholder='Password' />

        <div className='flex justify-between w-full mt-[-8px] text-sm cursor-pointer'>
          <p>Forgot your password?</p>
          {
            currentState==='Login'? <p onClick={()=>(setCurrentState("Signup"))}>Create account</p>:<p onClick={()=>setCurrentState('Login')}>Login Here</p>
          }
        </div>
        <button className='bg-black text-white px-8 py-2 mt-2 font-light'>{currentState==="Login"?"Sign In":"Sign up"}</button>
        
      </form>
  )
}

export default Login