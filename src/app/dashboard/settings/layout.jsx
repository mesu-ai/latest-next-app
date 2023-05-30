/* eslint-disable prettier/prettier */
import Navigation from '@/components/atom/Navigation';
import React, { Suspense } from 'react'

const settingsRoutes = [
  { name: 'Profile', path: '/dashboard/settings/profile' },
  { name: 'Password', path: '/dashboard/settings/password' },
  // { name: 'Marketplace', path: '/marketplace' },
  // { name: 'DashBoard', path: '/dashboard' },
  // { name: 'Contact', path: '/contact' },
]

const SettingLayout = ({ children }) => {
 
  return (
    <section className="grid grid-cols-12  min-h-screen w-full">
      <ul className='col-span-2 flex flex-col  divide-y-2 divide-red-600'>
        <Navigation navLinks={settingsRoutes}/>
      </ul>

      <div className="bg-orange-400 col-span-10">
        {children}
      </div>
    </section>
  )
}

export default SettingLayout;
