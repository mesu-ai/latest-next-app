import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      dashboard page
      <ul className="space-x-5 flex">
        <Link href="/analytics">
          <li>analytics</li>
        </Link>
        <Link href="/sittings">
          <li>settings</li>
        </Link>
      </ul>
    </div>
  )
}

export default page
