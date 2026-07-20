import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Create } from '../apis/PostApi'
import { useNavigate } from 'react-router-dom'
function CreatePost() {
    const navigate=useNavigate()
    const [title,settitle]=useState("")
    const [content,setcontent]=useState("")
    const [Category,setcategory]=useState("")
    const [Expiry,setExpiry]=useState("")
    const [ano,setano]=useState("")
    const [message,setmessage]=useState("")
    const [loading,setloading]=useState(false)
    const handlesubmit=async(e)=>{
        e.preventDefault()
        setloading(true)
        const data={
            Title:title,
            Category,
            content,
            expiry:Expiry,
            isAno:ano=="Yes"?true:false
        }
        const response=await Create(data)
        setloading(false)
        if(response.status==200){
            setmessage("Post Created Successfully!")
        }
        else setmessage("Error Creating post!..Try Again!")
    }
  return (
    <div className='bg-black min-h-screen flex justify-center w-full'>
      <NavBar underline="Create"/>
      <div className="w-full max-w-xl bg-sky-300 m-4 p-4 rounded-xl mt-20">
        <h1 className='text-2xl w-full'>Create Post</h1>
        {message!=""&&
        <h1 className={`${message.includes("Success")?"text-green-500":"text-red-500"} text-2xl bg-sky-200 rounded-lg p-2`}>{message}</h1>}
      <form className="w-full flex flex-col" onSubmit={handlesubmit} action="">
        <h1 >Title:</h1>
        <input type="text" className='p-2 text-lg border-1 border-slate-500 w-full rounded-lg' value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder='Title'/>
        <h1 >Content:</h1>
        <textarea type="text" className='p-2 text-lg border-1 border-slate-500 w-full rounded-lg' value={content} onChange={(e)=>{setcontent(e.target.value)}} placeholder='Content'/>
         <h1>Category:</h1>
        <label className="inline-flex items-center space-x-3" onChange={(e)=>{setcategory(e.target.value)}}>
        <input 
            type="radio" 
            name="Category" 
            value="Advice"
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">Advice</span>
        <input 
            type="radio" 
            name="Category" 
            value="Career" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">Career</span>
        <input 
            type="radio" 
            name="Category" 
            value="College" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">College</span>
        <input 
            type="radio" 
            name="Category" 
            value="Confession" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">Confession</span>
        <input 
            type="radio" 
            name="Category" 
            value="Random" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">Random</span>
        </label>
        <h1>Expiry:</h1>
        <label className="inline-flex items-center space-x-3" onChange={(e)=>{setExpiry(e.target.value)}}>
        <input 
            type="radio" 
            name="Expiry" 
            value="1h" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">1hr</span>
        <input 
            type="radio" 
            name="Expiry" 
            value="12h" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">12hrs</span>
        <input 
            type="radio" 
            name="Expiry" 
            value="24h" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">24hrs</span>
        <input 
            type="radio" 
            name="Expiry" 
            value="72h" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">72hrs</span>
        <input 
            type="radio" 
            name="Expiry" 
            value="never" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">Never</span>
        </label>
        <h1 className='mt-3'>Want to Post it Anonymous?</h1>
        <label className="inline-flex items-center space-x-3" onChange={(e)=>{setano(e.target.value)}}>
        <input 
            type="radio" 
            name="Anonymous" 
            value="Yes" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">Yes</span>
        <input 
            type="radio" 
            name="Anonymous" 
            value="No" 
            className="w-5 h-5 text-blue-600 rounded-full bg-white accent-blue-600"
        />
        <span className="text-sm font-medium text-slate-700">No</span>
        </label> 
        <button type='submit' disabled={loading?"disabled":""}className='mt-5 bg-violet-600 p-3 rounded-lg text-white'>{loading?"Creating...":"Create Post"}</button>
      </form>
      </div>
    </div>
  )
}

export default CreatePost
