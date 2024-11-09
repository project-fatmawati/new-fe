import React from 'react'
import SidebarDashboard from './SidebarDashboard'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
          <div className="flex w-full px-[10px]">
            <SidebarDashboard/>
            <div className="w-[80%] ml-16 md:ml-56">
                <Outlet/>
            </div>
        </div>
      
    </div>
  )
}

export default Layout
