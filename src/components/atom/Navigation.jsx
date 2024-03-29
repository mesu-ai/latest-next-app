/* eslint-disable prettier/prettier */
'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navigation = ({ navLinks = [] }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link,index) => {
        // startsWith math with the home page also
        const isActive = pathname.endsWith(link?.path);
        return (
          <Link
            className={isActive ? 'text-green-700' : 'text-black'}
            key={index}
            href={`${link.path}`}
          >
            {link?.name}
          </Link>
        )
      })}
    </>
  )
}

export default Navigation
