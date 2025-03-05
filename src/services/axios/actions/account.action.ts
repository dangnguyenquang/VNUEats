import { client } from '@/services/axios'
import accountsEndpoint from '../endpoints/accounts.endpoint'
import { AccountResponse, AccountUpdateForm, Req_ChangePassword } from '@/types/api/account'

class AccountApi {
  // Lấy thông tin tài khoản
  async getAccount(): Promise<AccountResponse>{
    try {
      const res = await client.get(accountsEndpoint.getAccount)
      if (!res.data.account) {
        throw new Error('Không tìm thấy dữ liệu tài khoản.')
      }
      return res.data.account // Trả về dữ liệu tài khoản
    } catch (error) {
      console.error('Error fetching account:', error)
      throw new Error('Có lỗi xảy ra khi lấy thông tin tài khoản.')
    }
  }

  // Cập nhật thông tin tài khoản
  async updateAccount(formData: AccountUpdateForm) {
    try {
      const res = await client.patch(accountsEndpoint.updateAccount, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return res.data
    } catch (error) {
      console.error('Error updating account:', error)
      throw new Error('Có lỗi xảy ra khi cập nhật tài khoản.')
    }
  }

  async changePassword(passwordData: Req_ChangePassword) {
    try {
      const res = await client.patch(accountsEndpoint.changePassword, passwordData)
      return res.data
    } catch (error) {
      console.error('Error changing password:', error)
      throw new Error('Có lỗi xảy ra khi đổi mật khẩu.')
    }
  }
}

const accountApi = new AccountApi()
export default accountApi
