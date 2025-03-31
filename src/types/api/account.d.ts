export interface Account {
    _id: string
    name: string
    email: string
    phone: string
    name_account: string
    password_account: string
    address: string
    role: string
    createdAt: string
    updatedAt: string
    __v: number
    avatar?: { url: string }
}

export interface AccountResponse {
    account: Account
}

export interface AccountUpdateForm {
    avatar: string | File
    address: string
    phone: string
}

export interface Req_ChangePassword {
    oldPassword: string
    password: string
}

export interface AvatarUploaderProps {
    currentAvatar?: string
    onAvatarChange: (file: File) => void
}
