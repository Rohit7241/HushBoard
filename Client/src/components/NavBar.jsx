import React from 'react'
import { InputButtonGroup } from './SearchBar'

function NavBar() {
  return (
    <div className='h-16 bg-maintheme  w-full flex justify-between'>
      <h1 className='text-4xl pt-5 pl-2'>HushBoard</h1>
      <div ><InputButtonGroup/></div>
    </div>
  )
}

export default NavBar
