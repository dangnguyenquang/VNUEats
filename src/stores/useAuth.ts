import userAction from "@/services/axios/actions/user.action"
import { User } from "@/types/api/auth"
import { create } from "zustand"

// Định nghĩa kiểu dữ liệu cho Zustand Store
interface AuthState {
    isAuth: boolean | null
    user: User | null
    login: () => void
    logout: () => void
    setUser: (user: User) => void
    fetchMe: () => Promise<void>
}

const initialState: Pick<AuthState, "isAuth" | "user"> = {
    isAuth: null,
    user: null,
}

const useAuth = create<AuthState>((set, get) => ({
    ...initialState,

    login() {
        set({ isAuth: true })
    },

    logout() {
        set({ isAuth: false, user: null })
    },

    setUser(user: User) {
        set({ user })
    },

    async fetchMe() {
        try {
            const res = await userAction.getMe()
            set({ user: res.user, isAuth: true })
        } catch (error) {
            console.log(error)
            get().logout()
        }
    },
}))

export default useAuth
