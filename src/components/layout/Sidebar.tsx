"use client"

import { PATH_NAME } from "@/configs/pathName"
import useAuth from "@/stores/useAuth"
import { Avatar } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import LoginModal from "../LoginModal"
import LogoutModal from "../LogoutModal"
import { Button } from "../ui/Button"

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const { user } = useAuth()
  const pathname = usePathname()

  const [userInfo, setUserInfo] = useState(user)
  console.log(userInfo)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  return (
    <div className='md:hidden'>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 p-5 transition-transform transform flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: 'url("/images/bg-login.png")',
        }}
      >
        <div>
          <IoMdClose
            className='text-white mb-6 font-bold text-3xl text-right cursor-pointer ml-auto'
            onClick={toggleSidebar}
          />

          {userInfo && (
            <div className='p-3 mx-auto cursor-pointer mb-8 hover:bg-secondary/10 rounded-xl'>
              <div className='flex gap-3 justify-start'>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={userInfo?.avatar?.url}
                  alt='avatar'
                />
                <div className='text-white flex-col gap-1 text-sm justify-start'>
                  <p className='font-bold text-[15px]'>{userInfo?.username}</p>
                  <p>{userInfo?.email}</p>
                </div>
              </div>
            </div>
          )}

          <nav className='flex flex-col gap-4'>
            <Link
              href={PATH_NAME.HOME}
              className={
                pathname === PATH_NAME.HOME
                  ? "text-yellow-200 font-medium half-underline text-lg"
                  : "text-white font-medium hover:text-yellow-200"
              }
              onClick={toggleSidebar}
            >
              Trang chủ
            </Link>
            <Link
              href={PATH_NAME.MENU}
              className={
                pathname === PATH_NAME.MENU
                  ? "text-yellow-200 font-medium half-underline text-lg"
                  : "text-white font-medium hover:text-yellow-200"
              }
              onClick={toggleSidebar}
            >
              Món ăn
            </Link>
            <Link
              href={PATH_NAME.ABOUTUS}
              className={
                pathname === PATH_NAME.ABOUTUS
                  ? "text-yellow-200 font-medium half-underline text-lg"
                  : "text-white font-medium hover:text-yellow-200"
              }
              onClick={toggleSidebar}
            >
              Giới thiệu
            </Link>

            {userInfo && (
              <Link
                href={PATH_NAME.ORDER_TRACKING}
                className={
                  pathname === PATH_NAME.ORDER_TRACKING
                    ? "text-yellow-200 font-medium half-underline text-lg"
                    : "text-white font-medium hover:text-yellow-200"
                }
                onClick={toggleSidebar}
              >
                Lịch sử đơn hàng
              </Link>
            )}
          </nav>
        </div>

        {!userInfo ? (
          <div className='flex flex-col mb-6 gap-3.5'>
            <Button variant='outline' className='border-primary text-primary'>
              Đăng ký
            </Button>
            <LoginModal setUserInfo={(user) => setUserInfo(user)}>
              <Button className='bg-primary hover:bg-primary w-full'>Đăng nhập</Button>
            </LoginModal>
          </div>
        ) : (
          <LogoutModal setUserInfo={(user) => setUserInfo(user)}>
            <Button className='bg-primary hover:bg-primary w-full'>Đăng xuất</Button>
          </LogoutModal>
        )}
      </div>
    </div>
  )
}

export default Sidebar
