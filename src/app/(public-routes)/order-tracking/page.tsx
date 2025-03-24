// 'use client'

// import Navigation from '@/components/ui/Navigation'
// import ordersApi from '@/services/axios/actions/orders.action'
// import { Order, OrderResponse } from '@/types/api/order'
// import { useEffect, useState } from 'react'
// import { io } from 'socket.io-client'
// import OrdersList from './_components/OrdersList'

// const socket = io('http://104.248.150.211:3000')

// const tabLabels = ['Chờ xác nhận', 'Chờ vận chuyển', 'Hoàn thành', 'Đã hủy']

// const statusMap: Record<number, 'pending' | 'in-progress' | 'completed' | 'canceled'> = {
//   0: 'pending',
//   1: 'in-progress',
//   2: 'completed',
//   3: 'canceled',
// }

// const OrderTrackingPage: React.FC = () => {
//   const getInitialTab = (): number => {
//     const savedTab = localStorage.getItem('selectedTab')
//     return savedTab ? parseInt(savedTab, 10) : 0
//   }

//   const [selectedTab, setSelectedTab] = useState<number>(getInitialTab)
//   const [orders, setOrders] = useState<Order[]>([])
//   const [currentPage, setCurrentPage] = useState<number>(1)
//   const [totalPages, setTotalPages] = useState<number>(1)

//   const fetchOrders = async () => {
//     try {
//       const status = statusMap[selectedTab]
//       const response: OrderResponse = await ordersApi.getOrders(status, currentPage)

//       if (response.data?.orders) {
//         setOrders(response.data.orders)
//         setTotalPages(response.data.pagination?.numberPages || 1)
//       } else {
//         setOrders([])
//         setTotalPages(1)
//       }
//     } catch (error) {
//       console.error('Error fetching orders:', error)
//     }
//   }

//   useEffect(() => {
//     fetchOrders()
//   }, [selectedTab, currentPage])

//   useEffect(() => {
//     socket.on('updateRestaurantData', () => {
//       fetchOrders()
//     })
//     return () => {
//       socket.off('updateRestaurantData')
//     }
//   }, [])

//   const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
//     setSelectedTab(newValue)
//     localStorage.setItem('selectedTab', newValue.toString())
//     setCurrentPage(1)
//   }

//   const handlePageChange = (newPage: number) => {
//     setCurrentPage(newPage)
//   }

//   return (
//     <div className="w-full flex flex-col items-center mt-24 space-y-2">
//       <div className="w-full max-w-[800px] shadow-md">
//         <Navigation labels={tabLabels} value={selectedTab} onChange={handleTabChange} />
//       </div>

//       <div className="bg-[#fdf8e7] w-full max-w-[800px] min-h-[350px] shadow-md rounded-lg">
//         <OrdersList orders={orders} />
//       </div>

//       {totalPages > 1 && (
//         <div className="flex justify-center mt-4">
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               className={`w-10 h-10 px-1 py-[5px] mb-4 ${
//                 currentPage === index + 1
//                   ? 'bg-[#7d0600] text-white'
//                   : 'bg-white text-[#212b36]'
//               } rounded border border-[#dfe3e8] text-xl font-bold`}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default OrderTrackingPage
