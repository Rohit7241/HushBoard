import React from 'react'
import logo from "../../public/logo.png"
import { Link, Links } from 'react-router-dom';
function NavBar({underline}) {
    const isloggedin=true;
  return (
   <nav className='z-50 top-0 fixed w-full bg-black flex items-center flex text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_10px_#08f,0_0_10px_#08f]'>
    <img className='h-15 w-15' src={logo} alt="Logo" />
    <Link to="/Create" className={`p-4 hover:text-sky-500 decoration-4 cursor-pointer decoration-violet-800  ${underline=="Create"?"underline":""}`}>Create Post</Link>
    <Link className={`p-4 hover:text-sky-500 cursor-pointer decoration-4 decoration-violet-800 ${underline=="Home"?"underline":""}`} to="/">Home</Link>
    {isloggedin&&<Link to="/Profile"className={`p-4 hover:text-sky-500 decoration-4 decoration-violet-800 ${underline=="Profile"?"underline":""}`} href="">Profile</Link>}
    {!isloggedin&&<Link to="/Login" className='p-4 hover:text-sky-500' href="">Login</Link>}
   </nav>
  )
}

export default NavBar
