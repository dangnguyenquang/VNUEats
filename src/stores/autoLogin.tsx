import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import userAction from '@/services/axios/actions/user.action'
import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'

const AutoLogin = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, login, logout, setUser } = useAuth()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (isAuth !== null) return

    async function fetchMe() {
      try {
        const res = await userAction.getMe()
        setUser(res.user)
        login()
      } catch (error) {
        logout()
      }
    }

    if (hydrated) {
      fetchMe()
    }
  }, [hydrated, login, logout, setUser, isAuth])

  if (!hydrated) {
    return <>{children}</>
  }

  if (isAuth === null) {
    return (
      <main className="container flex h-dvh items-center justify-center">
        <LoadingSpinner />
      </main>
    )
  }

  return <>{children}</>
}

export default AutoLogin
