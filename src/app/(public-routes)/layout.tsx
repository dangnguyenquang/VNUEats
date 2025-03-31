"use client"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import AutoLogin from "@/stores/autoLogin"
import Script from "next/script"
import { useState } from "react"
// import Chatbot from '../Components/_components/Chatbot'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "vnuEats",
    url: "https://vnueats.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://vnueats.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://vnueats.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Món ăn",
        item: "https://vnueats.com/menu",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Giới thiệu",
        item: "https://vnueats.com/about-us",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Bài viết",
        item: "https://vnueats.com/blogs",
      },
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "vnuEats",
    url: "https://vnueats.com",
    logo: "https://vnueats.com/favicon/favicon.ico",
    sameAs: [
      "https://www.instagram.com/vnu.eats",
      "https://www.youtube.com/@vnuEats",
      "https://www.tiktok.com/@vnueats",
      "https://www.facebook.com/profile.php?id=61574616120300&locale=vi_VN",
    ],
  }

  return (
    <>
      <AutoLogin>
        <div className='flex-col items-center w-full'>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className='mt-14'>{children}</div>
          <Footer />
          {/* <Chatbot /> */}
        </div>
      </AutoLogin>

      <Script
        type='application/ld+json'
        id='website-schema'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy='lazyOnload'
      />
      <Script
        type='application/ld+json'
        id='breadcrumb-schema'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy='lazyOnload'
      />
      <Script
        type='application/ld+json'
        id='organization-schema'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy='lazyOnload'
      />
    </>
  )
}
