/* eslint-disable prettier/prettier */

import React from 'react'

const AnalyticsLayout = ({ children, work, team }) => {
  // console.log({work,team,children})
  return (
    <section>
      {children}

      <div className="grid grid-cols-2 gap-5">
        {team}
        {work}
      </div>
    </section>
  )
}

export default AnalyticsLayout
