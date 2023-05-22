/* eslint-disable prettier/prettier */
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      blog page
      <ul className='flex gap-10'>
        {[1, 2, 3, 4, 5].map((item, index) => (
        <Link href={`/blog/${item}`} key={index}>
        <li key={index}>{item}</li>
        </Link>
        
      ))}
      </ul>
    </div>
  )
}

export default page
