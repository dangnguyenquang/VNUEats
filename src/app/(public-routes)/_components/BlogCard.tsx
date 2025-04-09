import { PATH_NAME } from "@/configs/pathName"
import { Blog } from "@/types/api/blog"
import React from "react"

const BlogCard: React.FC<Blog> = ({ _id, imageUrls, title, description, author }) => {
  return (
    <a
      href={PATH_NAME.BLOG_DETAIL(_id)}
      className='block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'
    >
      {/* Image */}
      <div className='relative'>
        <img className='w-full h-48 object-cover' src={imageUrls[0]?.url} alt={title} />
      </div>

      {/* Content */}
      <div className='p-4'>
        <h2 className='sm:text-[20px] text-lg font-bold text-gray mt-0 mb-2 line-clamp-2'>{title}</h2>
        <p className='text-gray text-sm  font-light mb-4 line-clamp-2'>{description}</p>
        <p className='text-xs text-gray italic font-bold'>By {author}</p>
      </div>
    </a>
  )
}

export default BlogCard
