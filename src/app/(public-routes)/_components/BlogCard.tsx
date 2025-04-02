import { PATH_NAME } from "@/configs/pathName"
import React from "react"

interface BlogCardProps {
  slug: string
  image: string
  category: string
  authorImage: string
  authorName: string
  date: string
  comments: number
  title: string
  description: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  image,
  category,
  authorImage,
  authorName,
  date,
  comments,
  title,
  description,
}) => {
  return (
    <a
      href={`${PATH_NAME.BLOG}/${slug}`}
      className='block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'
    >
      {/* Image */}
      <div className='relative'>
        <img className='w-full h-48 object-cover' src={image} alt={title} />
        <div className='absolute top-2 right-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded'>
          {category}
        </div>
      </div>

      {/* Content */}
      <div className='p-4'>
        {/* Title */}
        <h2 className='text-lg font-bold text-gray mb-2'>{title}</h2>

        {/* Description */}
        <p className='text-gray text-sm mb-4 line-clamp-2'>{description}</p>

        {/* Author and Meta */}
        <div className='flex items-center gap-2'>
          <img
            className='w-8 h-8 rounded-full object-cover'
            src={authorImage}
            alt={authorName}
          />
          <div className='text-xs text-gray'>
            <p className='font-semibold'>{authorName}</p>
            <p>
              {date} • {comments} comments
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default BlogCard
