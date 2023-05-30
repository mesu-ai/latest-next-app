/* eslint-disable prettier/prettier */
import React, { Suspense } from 'react'
import Navbar from './Navbar'


const DashboardLayout = ({ children }) => {
 
  return (
    <section className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 bg-lime-100">
        <Navbar />
      </div>

      <div className="bg-green-100 col-span-9">
        {children}
      </div>
    </section>
  )
}

export default DashboardLayout
