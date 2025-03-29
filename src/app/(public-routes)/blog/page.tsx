'use client'

import BlogCard from '../_components/BlogCard'

const blogs = [
  {
    slug: 'lau-Thai-chay-lang-dai-hoc',
    image: 'https://i.pinimg.com/736x/f8/53/0a/f8530a489e5889cc213c09eeefb055aa.jpg',
    category: 'Food',
    authorImage: 'https://placehold.co/40x40',
    authorName: 'Nguyễn Quang Đăng',
    date: '29 tháng 3, 2025',
    comments: 5,
    title: 'Top 10 Món Chay Ngon Dành Cho Sinh Viên',
    description: 'Khám phá 10 món chay ngon, dễ làm và tiết kiệm dành cho sinh viên.',
  },
]

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  )
}

export default BlogPage
