"use client"

import { PATH_NAME } from "@/configs/pathName"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import "../../../styles/artical.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  // Kiểm tra nếu không phải trang danh sách blog
  const isBlogListPage = pathname === PATH_NAME.BLOG

  return (
    <div className='max-w-[1000px] mx-auto py-[100px]'>
      {/* Nút quay lại chỉ hiển thị nếu không phải trang danh sách blog */}
      {!isBlogListPage && (
        <div className='mb-6'>
          <Link
            href={PATH_NAME.BLOG}
            className='inline-block bg-primary text-white px-4 py-2 rounded transition'
          >
            ← Quay lại
          </Link>
        </div>
      )}

      {/* Nội dung trang con */}
      {children}
    </div>
  )
}

export default Layout
