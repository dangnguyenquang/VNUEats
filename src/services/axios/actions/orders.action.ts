import { client } from "@/services/axios"
import { OrderResponse } from "@/types/api/order"
import ordersEndpoint from "../endpoints/orders.endpoint"

class OrdersApi {
    async getOrders(status: string, page: number): Promise<OrderResponse> {
        try {
            const res = await client.get<OrderResponse>(
                `${ordersEndpoint.getOrder}?status=${status}&page=${page}`,
            )
            return res.data
        } catch (error) {
            console.error(error)
            throw new Error("Có lỗi xảy ra khi lấy danh sách đơn hàng")
        }
    }

    async postEvaluation(
        idOrder: string,
        comment: string,
        listFood: any[],
    ): Promise<{ msg: string }> {
        try {
            const res = await client.post<OrderResponse>(ordersEndpoint.postEvaluation, {
                idOrder,
                comment,
                listFood,
            })
            return { msg: res.data.message || "Đánh giá đã được gửi" }
        } catch (error) {
            console.error("Error in postEvaluation: ", error)
            throw new Error("Có lỗi xảy ra khi gửi đánh giá")
        }
    }

    async cancelOrder(idOrder: string): Promise<OrderResponse> {
        try {
            const res = await client.patch<OrderResponse>(ordersEndpoint.cancelOrder, {
                idOrder,
            })
            return res.data
        } catch (error) {
            console.error("Error in cancelOrder: ", error)
            throw new Error("Có lỗi xảy ra khi hủy đơn")
        }
    }
}

const ordersApi = new OrdersApi()
export default ordersApi
