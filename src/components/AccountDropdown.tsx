"use client"

import { PATH_NAME } from "@/configs/pathName"
import useCheckRole from "@/hooks/useCheckRole"
import authApi from "@/services/axios/actions/auth.action"
import useAuth from "@/stores/useAuth"
import { User } from "@/types/api/auth"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import HistoryIcon from "@mui/icons-material/History"
import Logout from "@mui/icons-material/Logout"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Tooltip from "@mui/material/Tooltip"
import Link from "next/link"
import { useRouter } from "next/navigation"
import * as React from "react"
import { toast } from "react-toastify"

interface AccountMenuProps {
  user: User
  setUserInfo: (user: User | null) => void
}

export default function AccountMenu({ user, setUserInfo }: AccountMenuProps) {
  const { logout, setUser } = useAuth()
  const router = useRouter()

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogout = async () => {
    try {
      const res = await authApi.signOut()
      logout()
      setUserInfo(null)

      toast.success("Đăng xuất thành công!")
    } catch (error) {
      toast.error("Đã xảy ra lỗi, thử lại sau!")
    }

    router.push(PATH_NAME.HOME)
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.Fragment>
      <Box>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='large'
            sx={{ ml: 2, p: 0 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
          >
            <div className='flex gap-3 justify-start'>
              <div className='text-white flex-col gap-1 text-sm justify-start'>
                <p className='font-bold text-[15px]'>{user?.username}</p>
                <p>{user?.email}</p>
              </div>
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={user?.avatar?.url}
                alt='avatar'
              />
            </div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        disableScrollLock
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link href={PATH_NAME.DETAIL_ACCOUNT}>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingTop: "8px", paddingBottom: "8px" }}
          >
            <ListItemIcon>
              <AccountCircleIcon fontSize='small' />
            </ListItemIcon>
            Tài khoản của tôi
          </MenuItem>
        </Link>
        <Link href={PATH_NAME.ORDER_TRACKING}>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingTop: "8px", paddingBottom: "8px" }}
          >
            <ListItemIcon>
              <HistoryIcon fontSize='small' />
            </ListItemIcon>
            Lịch sử mua hàng
          </MenuItem>
        </Link>
        {useCheckRole("seller") && (
          <Link href={PATH_NAME.RESTAURANT_DASHBOARD}>
            <MenuItem
              onClick={handleClose}
              sx={{ paddingTop: "8px", paddingBottom: "8px" }}
            >
              <ListItemIcon>
                <RestaurantIcon fontSize='small' />
              </ListItemIcon>
              Nhà hàng của tôi
            </MenuItem>
          </Link>
        )}

        {useCheckRole("admin") && (
          <Link href={PATH_NAME.ADMIN_MANAGEACCOUNT}>
            <MenuItem
              onClick={handleClose}
              sx={{ paddingTop: "8px", paddingBottom: "8px" }}
            >
              <ListItemIcon>
                <AdminPanelSettingsIcon fontSize='small' />
              </ListItemIcon>
              Admin
            </MenuItem>
          </Link>
        )}

        <Divider sx={{ marginTop: "5px", marginBottom: "5px" }} />

        <MenuItem onClick={() => handleLogout()}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
