import { client } from "@/services/axios"
import detailsEndpoint from "../endpoints/details.endpoint"

class DetailsApi {
    async getDetails(id: string | undefined | string[], list: { listIdFood: string[] }) {
        try {
            const res = await client.post(`${detailsEndpoint.getDetails}/${id}`, list)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

const DetailsApiInstance = new DetailsApi()

export default DetailsApiInstance
