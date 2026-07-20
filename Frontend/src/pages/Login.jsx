import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../apis/userApi'
function Login() {
  const navigate=useNavigate()
  const [username,setusername]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setloading]=useState(false)
  const [message,setmessage]=useState(false)
  const handlesubmit=async(e)=>{
    e.preventDefault()
    setloading(true)
    const data={
      username,password
    }
    const response=await login(data)
    setloading(true)
    if(response.status==200){
      setmessage("Success! Redirecting to Home..")
    }
    navigate("/home")
  }
  return (
    <div className='bg-black w-full h-full min-h-screen flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center'>
        <img src="logo.png" className='h-20 w-20 rounded-full mr-2' alt="" />
        <h1 className='text-5xl font-bold text-purple-400 '>HUSHBOARD</h1>
        </div>
       {message!=""&&
       <h1 className='text-xl text-green-500'>{message}</h1>
       }
      <div className='w-full rounded-2xl p-4 flex flex-col items-center mt-10 max-w-xl bg-linear-to-r from-indigo-500 via-sky-500 to-violet-500 h-full min-h-[75vh]'>
            <h1 className='text-3xl font-bold'>LOGIN</h1>
            <form  className="flex flex-col font-semibold w-full h-full text-xl" onSubmit={handlesubmit} action="">
                <h1>UserName:</h1>
                <input className='mb-5 border p-2 rounded-lg' value={username} onChange={(e)=>{setusername(e.target.value)}}type="text" placeholder='Username' />
                <h1>Password:</h1>
                <input className='mb-10 border p-2 rounded-lg'  value={password} onChange={(e)=>{setPassword(e.target.value)}} type="Password" placeholder='Password'/>
                <button disabled={loading?"disabled":""} className='bg-linear-to-r from-sky-500 via-violet-500 to-cyan-500 text-slate-800 rounded p-2'>{loading?"Loading..":"LOGIN"}</button>
            </form>
            <div className='flex text-xl font-'>
                <h1 className='mr-3'>Not Registerd?  {"->"}</h1>
                <Link to="/register">Register</Link>
            </div>
      </div>
    </div>
  )
}

export default Login
