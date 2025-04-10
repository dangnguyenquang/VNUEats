import { client } from "@/services/axios"
import { ApiResponse, User } from "@/types/api/auth"
import { ChatRequest, ChatResponse } from "@/types/api/chatbot"
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

    async chatBot(payload: ChatRequest): Promise<ChatResponse> {
        try {
            const res = await client.post(userEndpoint.chatbot, payload)
            return res.data
        } catch (error) {
            throw error
        }
    }
}

export default new UserApi()
