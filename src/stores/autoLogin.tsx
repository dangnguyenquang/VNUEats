import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import userAction from "@/services/axios/actions/user.action"
import React, { useEffect, useState } from "react"
import useAuth from "./useAuth"

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

  return (
    <main className='relative min-h-screen'>
      {isAuth === null && (
        <div className='fixed inset-0 z-10 flex items-center justify-center bg-white'>
          <LoadingSpinner />
        </div>
      )}

      <>{children}</>
    </main>
  )
}

export default AutoLogin
