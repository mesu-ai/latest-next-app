'use client';

/* eslint-disable prettier/prettier */
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import Navigation from '../atom/Navigation'
import { signOut, useSession } from 'next-auth/react'

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
  const { data: session, status } = useSession()


  // console.log(session)

  return (
    <nav className="bg-blue-100 py-5">
      <div className='container xl:px-10 mx-auto'>
        <ul className="flex justify-center gap-10">
          <Navigation navLinks={headerRoutes} />

        </ul>
        <ul className="flex justify-end gap-10">
          { status === 'authenticated' ?
            <button onClick={signOut} className='bg-red-500 py-2 px-5 text-white rounded-md'>Logout</button>
            : <Navigation navLinks={authRoutes} /> }

        </ul>

      </div>
    </nav>
  )
}

export default PrimaryNavbar
