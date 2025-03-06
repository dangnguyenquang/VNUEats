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
}

export interface AccountResponse {
    account: Account
}

export interface AccountUpdateForm {
    avatar: File
    adress: string
    phone: string
}

export interface Req_ChangePassword {
    oldPassword: string
    password: string
}
