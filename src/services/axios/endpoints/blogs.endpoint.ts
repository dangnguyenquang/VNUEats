const blogEndpoint = {
    getAllBlogs: "/admin/api/get-all-blogs",
    getBlogById: (id: string) => `/admin/api/get-blog/${id}`,
}

export default blogEndpoint
