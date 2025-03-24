'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import AutoLogin from '@/stores/autoLogin'
import { useState } from 'react'
// import Chatbot from '../Components/_components/Chatbot'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <AutoLogin>
      <div className="flex-col items-center w-full">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="mt-14">{children}</div>
        <Footer />
        {/* <Chatbot /> */}
      </div>
    </AutoLogin>
  )
}
