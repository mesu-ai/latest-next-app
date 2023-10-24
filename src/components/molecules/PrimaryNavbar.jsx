/* eslint-disable prettier/prettier */
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import Navigation from '../atom/Navigation'

const headerRoutes = [
  { name: 'Home', path: '/' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Marketplace', path: '/marketplace' },
  { name: 'DashBoard', path: '/dashboard' },
  { name: 'Contact', path: '/contact' },
  { name: 'Topics', path: '/topics' },
]

const PrimaryNavbar = () => {
  return (
    <nav className="bg-blue-100 py-5">
      <ul className="flex justify-center gap-10">
        <Navigation navLinks={headerRoutes} />
      </ul>
    </nav>
  )
}

export default PrimaryNavbar
