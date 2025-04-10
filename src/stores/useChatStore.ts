import { ChatMessage } from "@/types/api/chatbot"
import { create } from "zustand"

interface ChatState {
    messages: ChatMessage[]
    addMessage: (message: ChatMessage) => void
    clearMessages: () => void
}

export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    addMessage: (message) =>
        set((state) => ({
            messages: [...state.messages, message],
        })),
    clearMessages: () => set({ messages: [] }),
}))
