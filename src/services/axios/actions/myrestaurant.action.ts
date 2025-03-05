// import { client } from '@/services/axios'

// class RestaurantApi {
//   async getMyRestaurant() {
//     try {
//       const res = await client.get('/api/restaurant/manage/get-restaurant')
//       return res
//     } catch (error) {
//       console.log(error)
//       throw new Error('Có lỗi xảy ra khi lấy thông tin nhà hàng.')
//     }
//   }
//   async patchMyRestaurant(formData) {
//     try {
//       const res = await client.patch('/api/restaurant/manage/edit-restaurant', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       })
//       return res.data
//     } catch (error) {
//       console.log(error)
//       throw new Error('Có lỗi xảy ra khi sửa thông tin.')
//     }
//   }
// }

// const RestaurantApiInstance = new RestaurantApi()

// export default RestaurantApiInstance
