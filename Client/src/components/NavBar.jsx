import React from 'react'
import { InputButtonGroup } from './SearchBar'
import Logo from "../assets/HushBoardLogo.png"
function NavBar() {
  return (
    <div className='h-16 bg-maintheme  w-full flex items-center justify-between px-4'>
      <div className='flex items-center gap-2'>
        <img src={Logo} alt="" className='h-14 flex-shrink-0 object-contain' />
        <h1 className='text-2xl font-bold'>HushBoard</h1>
      </div>
      <div>
        <InputButtonGroup/>
      </div>
    </div>
  )
}

export default NavBar
