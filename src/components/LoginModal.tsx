'use client'

import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { PATH_NAME } from '@/configs/pathName'
import authApi from '@/services/axios/actions/auth.action'
import useAuth from '@/stores/useAuth'
import { User } from '@/types/api/auth'
import { useRouter } from 'next/navigation'
import { Button } from './ui/Button'
import PasswordTextField from './ui/PasswordTextField'
import RequiredTextField from './ui/RequiredTextField'

interface LoginModalProps {
  className?: string
  children: React.ReactNode
  disabled?: boolean
  setUserInfo: (user: User) => void
}

export default function LoginModal({
  className,
  children,
  disabled = false,
  setUserInfo,
}: LoginModalProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isForgot, setIsForgot] = useState(false)

  const router = useRouter()
  const { setUser, login } = useAuth()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await authApi.signIn(email, password)

      setUser(res.user)
      login()

      setUserInfo(res.user)
      if (res.user) {
        toast.success('Đăng nhập thành công!')
      } else {
        toast.error('Tên đăng nhập hoặc mật khẩu không đúng!')
      }
    } catch (error) {
      toast.error('Đã có lỗi xảy ra, thử lại sau!')
    }
  }

  const handleGetOtp = async (email: string) => {
    try {
      const res = await authApi.getOTP(email)
      sessionStorage.setItem('email', email)

      toast.success('Mã xác thực đã được gửi đến email!')
      router.push(PATH_NAME.OTPCODE)
      handleClose()
    } catch (error) {
      toast.error('Đã có lỗi xảy ra, thử lại sau!')
    }
  }

  return (
    <React.Fragment>
      <div className={className} onClick={handleClickOpen}>
        {children}
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '12px',
            width: fullScreen ? '100%' : '520px',
            backgroundImage: 'url("/images/bg-login.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingBottom: '24px',
          },
        }}
      >
        <DialogTitle
          id="responsive-dialog-title"
          className="flex items-center justify-end px-6 pb-6 pt-4"
        >
          <CloseIcon onClick={handleClose} className="cursor-pointer text-white" />
        </DialogTitle>
        <DialogContent className="px-10 flex flex-col">
          <DialogContentText>
            <img
              src={'/icons/logo.svg'}
              alt="Yummy logo"
              style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
              className="mx-auto"
            />
          </DialogContentText>
          {!isForgot ? (
            <>
              <DialogContentText
                sx={{
                  color: 'white',
                  fontWeight: '700',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  textAlign: 'center',
                  fontSize: '1.125rem',
                  marginBottom: '32px',
                }}
              >
                Xin chào, hãy nhập thông tin bên dưới!
              </DialogContentText>

              <RequiredTextField
                placeholder="Email"
                className="w-[400px]"
                whiteBg
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />

              <PasswordTextField
                placeholder="Mật khẩu"
                className="w-[400px] mt-0"
                whiteBg
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
              />
              <div
                onClick={() => setIsForgot(!isForgot)}
                className="text-end mr-10 mt-[-6px] text-primary font-bold hover:underline cursor-pointer"
              >
                Quên mật khẩu?
              </div>
            </>
          ) : (
            <>
              <DialogContentText
                sx={{
                  color: 'white',
                  fontWeight: '700',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  textAlign: 'center',
                  fontSize: '1.125rem',
                  marginBottom: '32px',
                }}
              >
                Nhập email của bạn bên dưới!
              </DialogContentText>

              <RequiredTextField
                placeholder="Email"
                className="w-[400px]"
                whiteBg
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}
        </DialogContent>
        <DialogActions className="flex flex-col gap-4 px-6 pb-8 mt-8">
          {!isForgot ? (
            <>
              <Button
                onClick={() => {
                  handleLogin(email, password)
                  handleClose()
                }}
                autoFocus
                disabled={disabled}
                className="text-xl px-12 py-6"
              >
                Đăng nhập
              </Button>
              <span className="text-primary">
                Bạn chưa có tài khoản?{' '}
                <Link
                  onClick={handleClose}
                  className="font-bold hover:underline"
                  href={PATH_NAME.CUSTOMER_REGISTER}
                >
                  Đăng ký ngay
                </Link>
              </span>
            </>
          ) : (
            <>
              <Button
                onClick={() => {
                  handleGetOtp(email)
                }}
                autoFocus
                disabled={disabled}
                className="text-xl px-12 py-6"
              >
                Gửi mã xác thực
              </Button>

              <div
                className="font-bold hover:underline cursor-pointer"
                onClick={() => setIsForgot(!isForgot)}
              >
                Quay trở lại đăng nhập
              </div>
            </>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
