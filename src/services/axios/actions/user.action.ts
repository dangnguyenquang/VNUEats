import { client } from "@/services/axios"
import { ApiResponse, User } from "@/types/api/auth"
import userEndpoint from "../endpoints/user.endpoint"

class UserApi {
    async getMe(): Promise<ApiResponse<User>> {
        try {
            const res = await client.get(userEndpoint.getme)
            return res.data
        } catch (error) {
            throw error
        }
    }

    // async chatBot(payload) {
    //   try {
    //     const res = await client.post(userEndpoint.chatbot, payload)
    //     return res
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
}

export default new UserApi()
