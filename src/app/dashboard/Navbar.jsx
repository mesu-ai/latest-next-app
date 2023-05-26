/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=''>
      <ul className="flex flex-col gap-5">
      <Link href="dashboard/analytics">
        <li>analytics</li>
      </Link>
      <Link href="/sittings">
        <li>settings</li>
      </Link>
    </ul>

    </nav>
    
  )
}

export default Navbar
