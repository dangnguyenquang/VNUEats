import { client } from "@/services/axios"
import { Blog } from "@/types/api/blog"
import blogEndpoint from "../endpoints/blogs.endpoint"

class BlogApi {
    async getAllBlogs(): Promise<Blog[]> {
        try {
            const res = await client.get(blogEndpoint.getAllBlogs)
            return res.data
        } catch (error) {
            throw new Error("Đã có lỗi xảy ra khi lấy danh sách blog")
        }
    }

    async getBlogById(id: string): Promise<Blog> {
        try {
            const res = await client.get(blogEndpoint.getBlogById(id))
            return res.data
        } catch (error) {
            throw new Error(`Đã có lỗi xảy ra khi lấy blog với id: ${id}`)
        }
    }
}

const blogApiInstance = new BlogApi()

export default blogApiInstance
