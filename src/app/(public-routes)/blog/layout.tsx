"use client"

import { PATH_NAME } from "@/configs/pathName"
import { cn } from "@/helpers/cn"
import styles from "@/styles/artical.module.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { staticBlogs } from "./page"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  // Kiểm tra nếu không phải trang danh sách blog
  const isBlogListPage = pathname === PATH_NAME.BLOG

  return (
    <div className='w-[97vw] sm:w-[85vw]  mx-auto sm:py-10 py-3'>
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

      <h2 className='font-bold text-3xl text-center mt-14 mb-6'>
        Có thể bạn sẽ quan tâm
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6'>
        {/* Hiển thị các bài blog tĩnh trước */}

        {staticBlogs.map((blog) => (
          <Link
            key={blog._id}
            href={blog.url}
            className='block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg duration-300 cursor-pointer transition-transform hover:scale-105'
          >
            {/* Image */}
            <div className='relative'>
              <img
                className='w-full h-48 object-cover'
                src={blog.image}
                alt={blog.title}
              />
            </div>

            {/* Content */}
            <div className='p-4'>
              <h2 className='sm:text-[20px] text-lg font-bold text-gray mt-0 mb-2 line-clamp-2'>
                {blog.title}
              </h2>
              <p className='text-gray text-sm  font-light mb-4 line-clamp-2'>
                {blog.description}
              </p>
              <p className='text-xs text-gray italic font-bold'>By {blog.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Layout
