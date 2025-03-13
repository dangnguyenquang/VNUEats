import { client } from '@/services/axios'
import { ApiResponse, User } from '@/types/api/auth'
import authEndpoint from '../endpoints/auth.endpoint'

class AuthApi {
    async signIn(email: string, password: string): Promise<ApiResponse<User>> {
        try {
            const res = await client.post(authEndpoint.login, {
                email,
                password,
            })
            return res.data
        } catch (error) {
            throw new Error('Có lỗi xảy ra')
        }
    }

    async getOTP(email: string) {
        try {
            const res = await client.post(authEndpoint.getotp, { email })
            return res.data
        } catch (error) {
            throw new Error('Có lỗi xảy ra')
        }
    }

    async verifyOTP(email: string, otp: string) {
        try {
            const res = await client.post(authEndpoint.verifyotp, { email, otp })
            return res.data
        } catch (error) {
            throw new Error('Có lỗi xảy ra')
        }
    }

    async forgotPassword(newPassword: string, otp: string) {
        try {
            const res = await client.patch(authEndpoint.forgotpassword, {
                newPassword,
                otp,
            })
            return res.data
        } catch (error) {
            throw new Error('Có lỗi xảy ra')
        }
    }

    async signOut() {
        try {
            const res = await client.get(authEndpoint.signout)
            return res.data
        } catch (error) {
            throw new Error('Có lỗi xảy ra')
        }
    }

    async customerRegister(formData: FormData) {
        try {
            const res = await client.post(authEndpoint.register, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            return { msg: res.data.msg }
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || 'Đã xảy ra lỗi trong quá trình đăng ký',
            )
        }
    }

    async sellerRegister(formData: FormData) {
        try {
            const res = await client.post(authEndpoint.register, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            return res.data
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || 'Đã xảy ra lỗi trong quá trình đăng ký',
            )
        }
    }

    // async Search(filterList, page) {
    //   try {
    //     const res = await client.post(`${authEndpoint.search}?page=${page}`, filterList)
    //     return res
    //   } catch (error) {
    //     console.log(error)
    //     throw new Error('Có lỗi xảy ra')
    //   }
    // }
}

const authApi = new AuthApi()

export default authApi
