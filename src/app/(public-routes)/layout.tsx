'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import AutoLogin from '@/stores/autoLogin'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import Chatbot from '../Components/_components/Chatbot'

export default function DefaultLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <AutoLogin>
      <div className="flex-col items-center w-full">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* <div className='mt-16'>{children}</div> */}
        <main className="mt-16 min-h-screen">
          <Outlet />
        </main>
        <Footer />
        {/* <Chatbot /> */}
      </div>
    </AutoLogin>
  )
}
