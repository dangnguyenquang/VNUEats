export interface MessagePart {
    text: string
}

export interface Message {
    role: "user" | "model"
    parts: MessagePart[]
}

export interface ChatRequest {
    history: Message[]
    question: string
}

export interface ChatResponse {
    message: string
    answer: string
}

export interface ChatMessage {
    role: "user" | "model"
    text: string
}
