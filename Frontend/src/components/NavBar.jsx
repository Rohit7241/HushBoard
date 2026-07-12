import React from 'react'
import logo from "../../public/logo.png"
function NavBar() {
    const isloggedin=true;
  return (
   <nav className='z-50 top-0 fixed w-full bg-black flex items-center flex text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_10px_#08f,0_0_10px_#08f]'>
    <img className='h-15 w-15' src={logo} alt="Logo" />
    <a className='p-4 hover:text-sky-500 cursor-pointer'>Create Post</a>
    <a className='p-4 hover:text-sky-500 cursor-pointer' href="">Home</a>
    {isloggedin&&<a className='p-4 hover:text-sky-500' href="">Profile</a>}
    {!isloggedin&&<a className='p-4 hover:text-sky-500' href="">Login</a>}
   </nav>
  )
}

export default NavBar
