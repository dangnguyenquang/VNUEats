"use client"

import { PATH_NAME } from "@/configs/pathName"
import { cn } from "@/helpers/cn"
import styles from "@/styles/artical.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  // Kiểm tra nếu không phải trang danh sách blog
  const isBlogListPage = pathname === PATH_NAME.BLOG

  return (
    <div className='w-[97vw] sm:w-[85vw]  mx-auto py-10'>
      {/* Nút quay lại chỉ hiển thị nếu không phải trang danh sách blog */}
      {!isBlogListPage && (
        <div className='my-6'>
          <Link
            href={PATH_NAME.BLOG}
            className='inline-block bg-primary text-white px-4 py-2 rounded transition'
          >
            ← Quay lại
          </Link>
        </div>
      )}

      {/* Nội dung trang con */}
      {isBlogListPage ? (
        <div>{children}</div>
      ) : (
        <div className={cn("max-sm:px-3", styles["wrapper"])}>{children}</div>
      )}
    </div>
  )
}

export default Layout
