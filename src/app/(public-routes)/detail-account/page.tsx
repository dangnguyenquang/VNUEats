'use client'

import AvatarUploader from '@/components/ui/avatar-uploader'
import { Button } from '@/components/ui/Button'
import NumericTextField from '@/components/ui/NumericTextField'
import PasswordTextField from '@/components/ui/PasswordTextField'
import RequiredTextField from '@/components/ui/RequiredTextField'
import accountApi from '@/services/axios/actions/account.action'
import authApi from '@/services/axios/actions/auth.action'
import { AccountResponse, AccountUpdateForm } from '@/types/api/account'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import SideNav from './_components/SideNav'

const DetailAccount = () => {
  const [selectedTab, setSelectedTab] = useState('account')
  const [accountInfo, setAccountInfo] = useState<AccountUpdateForm | null>(null)
  const [avatar, setAvatar] = useState<string | File | undefined>(undefined)
  const [isChanged, setIsChanged] = useState(false)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const response: AccountResponse = await accountApi.getAccount()
        const account = response.account

        setAccountInfo({
          phone: account.phone,
          address: account.address,
          avatar: account.avatar?.url as string | File,
        })
        setAvatar(account.avatar?.url || undefined)
      } catch (error) {
        toast.error('Không thể tải thông tin tài khoản.')
        console.error('Error fetching account info:', error)
      }
    }

    fetchAccountInfo()
  }, [])

  const uploadImg = (avatar: File) => {
    setAvatar(avatar)
    setIsChanged(true)
  }

  const handleInputChange = (field: keyof AccountUpdateForm, value: string) => {
    setAccountInfo((prev) => ({ ...prev, [field]: value }) as AccountUpdateForm)
    setIsChanged(true)
  }

  const handleSave = async () => {
    if (!accountInfo) return
    try {
      const updatedData: AccountUpdateForm = {
        phone: accountInfo.phone,
        address: accountInfo.address,
        avatar: avatar instanceof File ? avatar : new File([], ''),
      }
      await accountApi.updateAccount(updatedData)
      toast.success('Cập nhật thông tin thành công!')
      setIsChanged(false)
    } catch (error) {
      toast.error('Có lỗi xảy ra khi cập nhật tài khoản.')
      console.error('Error updating account:', error)
    }
  }

  const handlePasswordChange = async () => {
    try {
      await accountApi.changePassword({ oldPassword, password: newPassword })
      toast.success('Đổi mật khẩu thành công!')
      setOldPassword('')
      setNewPassword('')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Có lỗi xảy ra khi đổi mật khẩu.')
      }
      console.error('Error changing password:', error)
    }
  }

  const handleLogout = async () => {
    try {
      const msg = await authApi.signOut()
      toast.success(msg)
      window.location.href = '/'
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Có lỗi xảy ra khi đăng xuất.')
      }
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="flex flex-wrap mt-[79px]">
      <div className="w-full lg:w-1/5">
        <SideNav selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      </div>
      <div className="flex-1 w-full lg:w-4/5 px-4">
        {selectedTab === 'account' && accountInfo && (
          <>
            <div className="block text-center text-primary text-4xl font-medium uppercase leading-[100px] my-2">
              Hồ sơ của tôi
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-screen">
              <div className="flex flex-col items-center">
                <AvatarUploader
                  currentAvatar={typeof avatar === 'string' ? avatar : undefined}
                  onAvatarChange={uploadImg}
                />
              </div>
              <div className="col-span-2 space-y-4">
                <NumericTextField
                  className="w-full"
                  label="Số điện thoại"
                  value={accountInfo.phone}
                  handleChange={(e) => handleInputChange('phone', e.target.value)}
                />
                <RequiredTextField
                  className="w-full"
                  label="Địa chỉ"
                  value={accountInfo.address}
                  handleChange={(e) => handleInputChange('address', e.target.value)}
                />
                <div className="flex justify-center">
                  <Button
                    className={`mb-4 ${isChanged ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    disabled={!isChanged}
                    onClick={handleSave}
                  >
                    Lưu
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
        {selectedTab === 'change-password' && (
          <div className="min-h-screen">
            <div className="block text-center text-primary text-4xl font-medium uppercase leading-[100px] my-2">
              Đổi mật khẩu
            </div>
            <div className="max-w-[500px] mx-auto space-y-4">
              <PasswordTextField
                className="w-full"
                label="Mật khẩu cũ"
                value={oldPassword}
                handleChange={(e) => setOldPassword(e.target.value)}
              />
              <PasswordTextField
                className="w-full"
                label="Mật khẩu mới"
                value={newPassword}
                handleChange={(e) => setNewPassword(e.target.value)}
                confirm
              />
              <div className="flex justify-center mt-6">
                <Button className="bg-primary text-white" onClick={handlePasswordChange}>
                  Đổi mật khẩu
                </Button>
              </div>
            </div>
          </div>
        )}
        {selectedTab === 'logout' && (
          <div className="min-h-screen text-center mt-20">
            <h5 className="text-xl font-bold">Bạn có muốn đăng xuất?</h5>
            <Button className="mt-6 bg-red-500 text-white" onClick={handleLogout}>
              Đăng xuất
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DetailAccount
