"use client"

import { PATH_NAME } from "@/configs/pathName"
import blogApiInstance from "@/services/axios/actions/blog.action"
import { Blog } from "@/types/api/blog"
import Link from "next/link"
import { useEffect, useState } from "react"
import BlogCard from "../_components/BlogCard"

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogApiInstance.getAllBlogs()
        setBlogs(data)
      } catch (error) {
        console.error("Failed to fetch blogs:", error)
      }
    }

    fetchBlogs()
  }, [])

  const staticBlogs = [
    {
      _id: "1",
      title: "Top 8 Quán Lẩu Thái Chay Ngon Ở Làng Đại Học",
      description:
        "Khám phá top 8 quán lẩu Thái chay ngon nhất ở làng Đại Học, địa điểm lý tưởng cho sinh viên yêu ẩm thực chay.",
      image: "https://i.pinimg.com/736x/f8/53/0a/f8530a489e5889cc213c09eeefb055aa.jpg",
      url: "/blog/lau-Thai-chay-lang-dai-hoc",
      author: "Nguyễn Quang Đăng",
    },
    {
      _id: "2",
      title: "Bánh hỏi Bình Định tại Làng Đại học Thủ Đức",
      description:
        "Thưởng thức bánh hỏi Bình Định tại Làng Đại học Thủ Đức với hương vị chuẩn miền Trung, giá hợp lý!",
      image: "https://i.pinimg.com/736x/f8/53/0a/f8530a489e5889cc213c09eeefb055aa.jpg",
      url: "/blog/banh-hoi-binh-dinh",
      author: "Nguyễn Công Bá",
    },
  ]

  return (
    <div className='w-full'>
      {/* Blog Title */}
      <div
        className='relative flex w-full lg:h-[300px] items-center justify-center'
        style={{
          backgroundImage: `url('/images/home/search-bg.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-30 rounded'></div>
        <h1 className='mx-auto font-oswald text-[35px] md:text-[60px] lg:text-[90px] text-primaryText text-center lg:leading-[116px] font-normal'>
          Blog
        </h1>
      </div>

      <Link
        href={PATH_NAME.CREATE_BLOG}
        className='inline-block bg-primary text-white px-4 py-2 rounded transition mt-5'
      >
        Tạo bài viết mới
      </Link>

      {/* Blog Content */}
      <div className='max-w-7xl mx-auto py-10 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Hiển thị các bài blog tĩnh trước */}
          {staticBlogs.map((blog) => (
            <Link
              key={blog._id}
              href={blog.url}
              className='block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'
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
                <h2 className='text-lg font-bold text-gray mt-0 mb-2'>{blog.title}</h2>
                <p className='text-gray text-sm mb-4 line-clamp-2'>{blog.description}</p>
                <p className='text-xs text-gray'>By {blog.author}</p>
              </div>
            </Link>
          ))}

          {/* Hiển thị các bài blog từ API */}
          {blogs.map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
