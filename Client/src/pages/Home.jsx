import { ButtonIcon } from '@/components/create'
import { DropdownMenuBasic } from '@/components/dropdown'
import NavBar from '@/components/NavBar'
import React from 'react'

function Home() {
  return (
    <div>
      <div><NavBar/></div>
      <div className='h-1/4 p-2 bg-blue-200 flex justify-between w-full'>
        <DropdownMenuBasic/>
      </div>

    </div>
  )
}

export default Home
