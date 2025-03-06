import useAuth from '@/stores/useAuth'
import { useMemo } from 'react'

function useCheckRole(userRole: string) {
    const { user } = useAuth()
    const currentRole = user?.role || ''

    const hasRole = useMemo(() => {
        return userRole === currentRole
    }, [userRole, currentRole])

    return hasRole
}

export default useCheckRole
