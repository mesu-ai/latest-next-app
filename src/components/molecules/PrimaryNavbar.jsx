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
  { name: 'Post', path: '/post' },
  { name: 'Topics', path: '/topics' },
]

const authRoutes = [
  { name: 'Login', path: '/login' },
  // { name: 'Register', path: '/register' },
]

const PrimaryNavbar = () => {
  return (
    <nav className="bg-blue-100 py-5">
      <div className='container xl:px-10 mx-auto'>
        <ul className="flex justify-center gap-10">
          <Navigation navLinks={headerRoutes} />

        </ul>
        <ul className="flex justify-end gap-10">
          <Navigation navLinks={authRoutes} />
        </ul>

      </div>
    </nav>
  )
}

export default PrimaryNavbar
