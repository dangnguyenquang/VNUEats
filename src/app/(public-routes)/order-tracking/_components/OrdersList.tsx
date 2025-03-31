import { OrdersListProps } from '@/types/api/order'
import OrderCard from './OrderCard'

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  return (
    <>
      {orders.length > 0 ? (
        <div className="flex flex-col items-center mb-10 space-y-4 md:space-y-6">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <div className="opacity-50 text-center">
          <p className="mt-auto text-lg font-medium text-gray-600">
            Bạn không có đơn hàng nào
          </p>
        </div>
      )}
    </>
  )
}

export default OrdersList
