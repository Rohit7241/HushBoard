import Card from '@/components/Card'
import { ButtonIcon } from '@/components/create'
import { DropdownMenuBasic } from '@/components/dropdown'
import { FilterBy } from '@/components/filter'
import NavBar from '@/components/NavBar'
import React from 'react'

function Home() {
  return (
    <div>
      <div><NavBar/></div>
      <div className='home-container flex h-screen'>
        <div className='left-panel bg-[#F0F8FF] w-3/5 p-4 overflow-y-auto  border-r-4  '>
            <div className='rounded p-2 bg-blue-200 flex justify-between w-full'>
            <DropdownMenuBasic/>
            <FilterBy/>
          </div>
          <div className='h-full w-full'>
            <Card/>
          </div>
        </div>
        <div className='right-panel bg-[#7681B3] w-2/5 p-4 overflow-y-auto'>

        </div>
      </div>
    </div>
  )
}

export default Home
