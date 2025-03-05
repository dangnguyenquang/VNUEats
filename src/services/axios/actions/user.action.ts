import { client } from '@/services/axios'
import userEndpoint from '../endpoints/user.endpoint'

class UserApi {
  async getMe() {
    try {
      const res = await client.get(userEndpoint.getme)
      return res
    } catch (error) {
      console.log(error)
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
