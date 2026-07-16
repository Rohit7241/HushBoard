import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='bg-black w-full h-full min-h-screen flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center'>
        <img src="logo.png" className='h-20 w-20 rounded-full mr-2' alt="" />
        <h1 className='text-5xl font-bold text-purple-400 '>HUSHBOARD</h1>
        </div>
      <div className='w-full rounded-2xl p-4 flex flex-col items-center mt-10 max-w-xl bg-linear-to-r from-indigo-500 via-sky-500 to-violet-500 h-full min-h-[75vh]'>
            <h1 className='text-3xl font-bold'>LOGIN</h1>
            <form  className="flex flex-col font-semibold w-full h-full text-xl" action="">
                <h1>UserName:</h1>
                <input className='mb-5 border p-2 rounded-lg' type="text" placeholder='Unique Username' />
                <h1>Email:</h1>
                <input className='mb-5 border p-2 rounded-lg' type="text" placeholder='Name@Email.com' />
                <h1>Password:</h1>
                <input className='mb-10 border p-2 rounded-lg' type="Password" placeholder='Password'/>
                <button className='bg-linear-to-r from-sky-500 via-violet-500 to-cyan-500 text-slate-800 rounded p-2'>LOGIN</button>
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
