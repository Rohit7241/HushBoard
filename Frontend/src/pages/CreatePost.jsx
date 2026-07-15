import React from 'react'
import NavBar from '../components/NavBar'

function CreatePost() {
  return (
    <div className='bg-black min-h-screen flex justify-center w-full'>
      <NavBar/>
      <div className="w-1/3 bg-sky-300 m-4 p-4 rounded-xl mt-20">
        <h1 className='text-2xl w-full'>Create Post</h1>
      <form className="w-full" action="">
        <h1 >Title:</h1>
        <input type="text" className='p-2 text-lg border-1 border-slate-500 w-full rounded-lg' placeholder='Title'/>
        <h1 >Content:</h1>
        <textarea type="text" className='p-2 text-lg border-1 border-slate-500 w-full rounded-lg' placeholder='Title'/>
         <h1>Category:</h1>
        <label className="inline-flex items-center space-x-3">
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
        <label className="inline-flex items-center space-x-3">
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
        <label className="inline-flex items-center space-x-3">
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
      </form>
      </div>
    </div>
  )
}

export default CreatePost
