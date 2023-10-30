/* eslint-disable prettier/prettier */
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      blog page
      <ul className='flex justify-center gap-10'>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Link href={`/blogs/blog/${item}`} key={index}>
            <li key={index}>{item}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default page
