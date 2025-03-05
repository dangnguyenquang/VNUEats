export interface User {
    email: string
    role: 'seller' | 'admin'
    userId: string
    username: string
}

export interface LoginResponse {
    success: boolean
    msg: string
    user: User
}
