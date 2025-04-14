"use client"

import { PATH_NAME } from "@/configs/pathName"
import blogApiInstance from "@/services/axios/actions/blog.action"
import useAuth from "@/stores/useAuth"
import { Blog } from "@/types/api/blog"
import Link from "next/link"
import { useEffect, useState } from "react"
import BlogCard from "../_components/BlogCard"

export const staticBlogs = [
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
    image:
      "https://vnueats.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanhhoi.3a9b9405.jpg&w=3840&q=75",
    url: "/blog/banh-hoi-binh-dinh",
    author: "Nguyễn Công Bá",
  },
  {
    _id: "3",
    title: "Dông Nướng Đá – Tinh Hoa Vị Nướng Từ Vùng Cát Trắng",
    description:
      "Khám phá món dông nướng đá – đặc sản độc đáo từ vùng cát trắng miền Trung. Một trải nghiệm ẩm thực hoang dã, mộc mạc nhưng đầy tinh tế.",
    image:
      "https://cdn-i.vtcnews.vn/resize/th/upload/2023/09/19/dong-nuong-muoi-ot-1-15193571.JPG",
    url: "/blog/dong-nuong-da",
    author: "Lê Minh Khôi",
  },
  {
    _id: "4",
    title:
      "Chóc Quạch Nướng – Món ăn đặc sản Bình Định lần đầu xuất hiện tại làng Đại học",
    description:
      "Khám phá món chóc quạch nướng – đặc sản hấp dẫn của vùng đất Bình Định, với hương vị đậm đà, quy trình chế biến công phu và địa điểm thưởng thức nổi bật.",
    image: "https://i.pinimg.com/736x/b4/d0/14/b4d0147b1daf1cbee12887794b9426fa.jpg",
    url: "/blog/choc-quach-nuong",
    author: "Phạm Văn Duy",
  },
]

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

  const { user } = useAuth()

  return (
    <div className='w-full'>
      {/* Blog Title */}
      <div
        className='relative flex w-full md:h-[450px] h-[200px] items-center justify-center'
        style={{
          backgroundImage: `url('/images/blog/image.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='w-full h-full bg-white opacity-30'></div>
        <div className='absolute sm:gap-4 gap-1 flex flex-col'>
          <p className=' mx-auto p-1.5 font-light bg-primary inline rounded-2xl text-white text-[15px] sm:text-[25px] text-center'>
            Blog
          </p>
          <h1 className='max-w-[90vw]  font-oswald text-[30px] md:text-[40px] lg:text-[70px] text-black text-center font-medium'>
            Khám phá món ngon Làng Đại học Thủ Đức
          </h1>
          <p className='text-center italic text-[15px] sm:text-[25px] font-thin'>
            Món nào ngon – Bọn mình mới chỉ!
          </p>
        </div>
      </div>

      {user && user.role === "admin" ? (
        <Link
          href={PATH_NAME.CREATE_BLOG}
          className='inline-block bg-primary text-white px-4 py-2 rounded transition mt-5'
        >
          Tạo bài viết mới
        </Link>
      ) : (
        <div></div>
      )}

      {/* Blog Content */}
      <div className='w-[80vw] mx-auto py-10'>
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
