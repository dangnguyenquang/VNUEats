"use client"

import blogApiInstance from "@/services/axios/actions/blog.action"
import { Blog } from "@/types/api/blog"
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

  return (
    <div className='max-w-7xl mx-auto py-10 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  )
}

export default BlogPage
