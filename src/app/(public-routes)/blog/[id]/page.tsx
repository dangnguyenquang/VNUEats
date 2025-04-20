"use client"

import { cn } from "@/helpers/cn"
import blogApiInstance from "@/services/axios/actions/blog.action"
import styles from "@/styles/artical.module.scss"
import { Blog } from "@/types/api/blog"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const BlogDetailPage = () => {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { id } = useParams()

  useEffect(() => {
    if (!id || Array.isArray(id)) return

    const fetchBlog = async () => {
      try {
        const data = await blogApiInstance.getBlogById(id)
        setBlog(data)
      } catch (err) {
        setError("Failed to fetch blog details.")
        console.error(err)
      }
    }

    fetchBlog()
  }, [id])

  if (error) {
    return <div className='text-red-500'>{error}</div>
  }

  if (!blog) {
    return <div>Loading...</div>
  }

  return (
    <div className={cn("max-sm:px-3 space-y-4", styles["wrapper"])}>
      {/* <h1 className='text-3xl font-bold mb-4'>{blog.title}</h1>
      <p className='text-gray-600 mb-4'>By {blog.author}</p>
      <img src={blog.imageUrls[0]?.url} alt={blog.title} className='w-full h-auto mb-6' /> */}
      <div className='text-gray-800' dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  )
}

export default BlogDetailPage
