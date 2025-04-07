export interface ImageUrl {
    url: string
    public_id: string
}

export interface Blog {
    _id: string
    title: string
    author: string
    slug: string
    content: string
    description: string
    imageUrls: ImageUrl[]
    createdAt: string
    updatedAt: string
}
