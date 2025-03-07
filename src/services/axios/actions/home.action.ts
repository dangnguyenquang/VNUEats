import { client } from '@/services/axios'
import homeEndpoint from '../endpoints/home.endpoint'

class HomeApi {
    async getHome() {
        try {
            const res = await client.get(homeEndpoint.gethome)
            return res
        } catch (error) {
            console.log(error)
        }
    }
}

const homeApiInstance = new HomeApi() // Đổi tên biến instance để tránh trùng tên

export default homeApiInstance
