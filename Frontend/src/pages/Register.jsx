import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Registeruser} from "../apis/userApi.js"
function Register() {
    const navigate=useNavigate()
    const [password,setPassword]=useState("")
    const [confirmpassword,setconfirmPassword]=useState("")
    const [email,setemail]=useState("")
    const [username,setusername]=useState("")
    const [error,seterror]=useState("")
    const [message,setmessage]=useState("")
    const [loading,setloading]=useState(false)
    const handleregister=async(e)=>{
        e.preventDefault();
        setloading(true)
        const data={
            username,password,email
        }
       try {
         const response=await Registeruser(data)
         if(response.status==200){
            setmessage("REGISTERED SUCCESSFULLY! REDIRECTING...")
            setTimeout(() => {
                navigate('/login')
            }, 5000);
         }
       } catch (err) {
        seterror(err)
       }
        setloading(false)
    }
  return (
    <div className='bg-black w-full h-full min-h-screen flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center'>
        <img src="logo.png" className='h-20 w-20 rounded-full mr-2' alt="" />
        <h1 className='text-5xl font-bold text-purple-400 '>HUSHBOARD</h1>
        </div>
        <div className='text-green-500 font-bold text-xl'>
            {message}     
        </div>
      <div className='w-full rounded-2xl p-4 flex flex-col items-center mt-10 max-w-xl bg-linear-to-r from-indigo-500 via-sky-500 to-violet-500 h-full min-h-[75vh]'>
            <h1 className='text-3xl font-bold'>Register</h1>
            <form  className="flex flex-col font-semibold w-full h-full text-xl" onSubmit={handleregister} action="">
                <h1>UserName:</h1>
                <input className='mb-5 border p-2 rounded-lg' type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder='Unique Username' />
                <h1>Email:</h1>
                <input className='mb-5 border p-2 rounded-lg' value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder='Name@Email.com' />
                <h1>Password:</h1>
                <input className='mb-10 border p-2 rounded-lg' value={password} onChange={(e)=>setPassword(e.target.value)} type="Password" placeholder='Password'/>
                <h1>Confirm Password:</h1>
                <input className='mb-10 border p-2 rounded-lg' value={confirmpassword} value={confirmpassword} onChange={(e)=>{setconfirmPassword(e.target.value)}} type="Password" placeholder='Password'/>
                {(password!=confirmpassword&&confirmpassword!="")&&
                <h1 className='text-red-900 m-2'>Passwords Don't Match!</h1>}
                {seterror!=""&&
                <h1>{error}</h1>}
                <button className='bg-linear-to-r from-sky-500 via-violet-500 to-cyan-500 text-slate-800 rounded p-2' type="submit">{loading?"Loading...":"REGISTER"}</button>
            </form>
            <div className='flex text-xl font-'>
                <h1 className='mr-3'>Already Registerd?  {"->"}</h1>
                <Link to="/login">Login</Link>
            </div>
      </div>
    </div>
  )
}

export default Register
