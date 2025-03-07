export interface Avatar {
    url: string
    public_id: string
}

export interface User {
    email: string
    role: string
    userId: string
    username: string
    exp?: number
    address: string
    phone: string
    avatar: Avatar
    restaurantId?: string
}

export interface ApiResponse<T> {
    success?: boolean
    msg: string
    user: T
}
