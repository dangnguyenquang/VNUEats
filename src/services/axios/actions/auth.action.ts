import { client } from '@/services/axios'
import { LoginResponse } from '@/types/api/auth'
import authEndpoint from '../endpoints/auth.endpoint'

class AuthApi {
    async signIn(email: string, password: string): Promise<LoginResponse> {
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

    // async customerRegister(formData) {
    //   try {
    //     const res = await client.post(authEndpoint.register, formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     })
    //     return { msg: res.msg }
    //   } catch (error) {
    //     // return { error: error.message || 'Đã xảy ra lỗi trong quá trình đăng ký' }
    //     throw new Error('Có lỗi xảy ra')
    //   }
    // }

    // async sellerRegister(formData) {
    //   try {
    //     const res = await client.post(authEndpoint.register, formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     })
    //     return { msg: res.msg }
    //   } catch (error) {
    //     // return { error: error.message || 'Đã xảy ra lỗi trong quá trình đăng ký' }
    //     throw new Error('Có lỗi xảy ra')
    //   }
    // }

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
