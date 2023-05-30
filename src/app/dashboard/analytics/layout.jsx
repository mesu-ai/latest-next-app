/* eslint-disable prettier/prettier */

import React from 'react'

const AnalyticsLayout = ({children, work, team }) => {
  // console.log({work,team,children})
  return 
  <div className="flex">
    {children}
    {work}
    {team}
  </div>
}

export default AnalyticsLayout
