import { Key } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Nav() {
    const links = [
        { 
            name: 'home',
            path:"/"
        },
        { 
            name: 'dashboard',
            path:"/dashboard"
        }
    ]
  return (
    <nav className=''>
        <ul className='flex gap-4 capitalize font-semibold'>
        {links.map((link, index)=>{
            return (
                <li key={index} >
                <Link  href={link.path} className=''>
                {link.name}
            </Link>
                </li>
            
)
        })}
        </ul>
        

    </nav>
  )
}
