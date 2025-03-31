import { client } from "@/services/axios"
import { Order } from "@/types/api/booking"
import bookingEndpoint from "../endpoints/booking.endpoint"

class BookingApi {
    async bookingFood(payload: Order) {
        try {
            const res = await client.post(`${bookingEndpoint.bookingFood}`, payload)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}

const BookingApiInstance = new BookingApi()

export default BookingApiInstance
