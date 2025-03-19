'use client'

import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

import { PATH_NAME } from '@/configs/pathName'
import authApi from '@/services/axios/actions/auth.action'
import useAuth from '@/stores/useAuth'
import { User } from '@/types/api/auth'
import { useRouter } from 'next/navigation'
import { Button } from './ui/Button'

interface LogoutProps {
  className?: string
  children: React.ReactNode
  disabled?: boolean
  setUserInfo: (user: User | null) => void
}

export default function LogoutModal({
  className,
  children,
  disabled = false,
  setUserInfo,
}: LogoutProps) {
  const router = useRouter()
  const { logout } = useAuth()
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogout = async () => {
    try {
      const res = await authApi.signOut()
      logout()
      setUserInfo(null)

      toast.success('Đăng xuất thành công!')
      router.push(PATH_NAME.HOME)
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
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '12px',
            paddingBottom: '10px',
            width: '500px',
          },
        }}
      >
        <DialogTitle
          id="responsive-dialog-title"
          className="flex items-center justify-between px-6 pt-4"
        >
          <span className="text-2xl">Đăng xuất</span>
          <CloseIcon onClick={handleClose} className="cursor-pointer" />
        </DialogTitle>
        <DialogContent className="px-10 flex flex-col">
          <DialogContentText
            sx={{
              fontSize: '1rem',
            }}
          >
            Bạn chắc chắn muốn đăng xuất
          </DialogContentText>
        </DialogContent>
        <DialogActions className="mr-2 gap-2">
          <Button
            variant="outline"
            onClick={() => {
              handleClose()
            }}
            disabled={disabled}
            className="px-8 border-primary text-primary"
          >
            Hủy
          </Button>
          <Button
            onClick={() => {
              handleClose()
              handleLogout()
            }}
            className="font-bold hover:underline"
            autoFocus
          >
            Đăng xuất
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
