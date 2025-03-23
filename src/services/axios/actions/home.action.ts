import { client } from '@/services/axios'
import { FoodData } from '@/types/api/home'
import homeEndpoint from '../endpoints/home.endpoint'

class HomeApi {
    async getHome(): Promise<FoodData> {
        try {
            const res = await client.get(homeEndpoint.gethome)
            return res.data
        } catch (error) {
            throw new Error('Đã có lỗi xảy ra')
        }
    }
}

const homeApiInstance = new HomeApi()

export default homeApiInstance
