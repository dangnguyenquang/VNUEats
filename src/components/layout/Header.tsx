'use client'

import { User } from '@/types/api/auth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LoginModal from '../LoginModal'
import { Button } from '../ui/Button'
import Image from 'next/image'
import { PATH_NAME } from '@/configs/pathName'
import useAuth from '@/stores/useAuth'
import AccountMenu from '../AccountDropdown'
import logo_vnuEats from "../../assets/icons/logo.svg"

interface HeaderProps {
  toggleSidebar: () => void
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const pathname = usePathname()
  const { user, isAuth } = useAuth()

  const [scrolled, setScrolled] = useState(false)
  const [userInfo, setUserInfo] = useState<User | null>(user)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`z-40 w-full fixed top-0 left-0 py-[13px] px-[30px] md:px-[40px] lg:px-[60px] flex justify-between items-center bg-primary transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-b-[20px]'
          : 'shadow-none rounded-b-none'
      }`}
    >
      <div className="gap-[70px] flex items-center">
        <Link href={PATH_NAME.HOME}>
          <Image
            src={logo_vnuEats}
            alt="Yummy logo"
            className="max-md:w-[90px] max-lg:w-[100px] lg:w-[160px]"
          />
        </Link>
        <div className="flex gap-10 max-md:hidden items-center ml-[20px]">
          <Link
            href={PATH_NAME.HOME}
            className={
              pathname === PATH_NAME.HOME
                ? 'font-medium half-underline text-yellow-200 text-[20px]'
                : 'text-white font-medium hover:text-yellow-200 text-[20px]'
            }
          >
            Trang chủ
          </Link>
          <Link
            href={PATH_NAME.MENU}
            className={
              pathname === PATH_NAME.MENU
                ? 'font-medium half-underline text-yellow-200 text-[20px]'
                : 'text-white font-medium hover:text-yellow-200 text-[20px]'
            }
          >
            Món ăn
          </Link>
          <Link
            href={PATH_NAME.ABOUTUS}
            className={
              pathname === PATH_NAME.ABOUTUS
                ? 'font-medium half-underline text-yellow-200 text-[20px]'
                : 'text-white font-medium hover:text-yellow-200 text-[20px]'
            }
          >
            Giới thiệu
          </Link>
        </div>
      </div>
      {!userInfo ? (
        <div className="flex gap-6 max-md:hidden">
          <Link href={PATH_NAME.CUSTOMER_REGISTER}>
            <Button variant="outline">Đăng ký</Button>
          </Link>
          <Button className="bg-secondary hover:bg-secondary">
            <LoginModal setUserInfo={(user) => setUserInfo(user)}>Đăng nhập</LoginModal>
          </Button>
        </div>
      ) : (
        <div className="max-md:hidden">
          <AccountMenu
            user={userInfo}
            setUserInfo={(user: User | null) => setUserInfo(user)}
          />
        </div>
      )}

      <button
        className="hidden max-md:block text-white text-2xl focus:outline-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </div>
  )
}

export default Header
