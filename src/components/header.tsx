import React from 'react'
import Nav from './nav'

export default function Header() {
  return (
    <header>
      <div className='flex justify-between items-center m-3'>
      <div>
        <h1 className='text-2xl text-emerald-500 font-semibold italic p-4 rounded-lg'>Stock<span className='text-purple-900'>D</span></h1>
      </div>
      <div>
        <Nav/>
      </div>
    </div>
    </header>
    
  )
}
