// import postApi from '@/apis/post'
// import { Post } from '@/models/post'
import { PATH_NAME } from "@/configs/pathName"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:5173"

  const staticRoutes = Object.values(PATH_NAME)
    .filter((val) => typeof val === "string")
    .map((path) => ({
      url: `${clientUrl}${path}`,
      lastModified: new Date().toISOString(),
    }))

  try {
    // const response = await postApi.getAllPosts(1, 99999)
    // const posts: Post[] = response?.data || []

    // const dynamicRoutes = posts
    //   .filter(
    //     (post) =>
    //       post.showPost &&
    //       post.postedDate &&
    //       post.updatedDate &&
    //       new Date(post.postedDate) <= new Date(),
    //   )
    //   .map((post) => ({
    //     url: `${clientUrl}/bai-viet/${post._id}`,
    //     lastModified: post.updatedDate,
    //   }))

    // const allRoutes = [...staticRoutes, ...dynamicRoutes]
    const allRoutes = [
      ...staticRoutes,
      {
        url: `${clientUrl}/blog/lau-Thai-chay-lang-dai-hoc`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${clientUrl}/blog/banh-hoi-binh-dinh`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${clientUrl}/blog/dong-nuong-da`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${clientUrl}/blog/choc-quach-nuong`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${clientUrl}/blog/banh-canh-ca-basa`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${clientUrl}/blog/com-ga-nui-Nhan`,
        lastModified: new Date().toISOString(),
      },
      {
        url: `${clientUrl}/blog/canh-rau-chua-ca-liet`,
        lastModified: new Date().toISOString(),
      },
    ]

    return allRoutes
  } catch (error) {
    return staticRoutes
  }
}
