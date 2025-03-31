export interface OrderResponse {
    data: any
    message?: string
}

export interface OrderItemProps {
    idFood: string
    imageUrl: string
    title: string
    quantity: number
    price: number
    starMedium: number
    address?: string
}

export interface FoodItem {
    food: {
        _id: string
        title: string
        starMedium?: number
        imageUrl?: { url: string }[]
    }
}

export interface Food {
    _id: string
    title: string
    price: number
    starMedium: number
    imageUrl: { url: string }[]
}

export interface OrderItem {
    food: Food
    quantity: number
}

export interface Order {
    _id: string
    nameRestaurant: { name: string }
    deliveryAddress: string
    items: OrderItem[]
    totalPrice: number
    restaurantId: string
    status: 'pending' | 'in-progress' | 'completed' | 'canceled'
}

export interface ReviewModalProps {
    open: boolean
    onClose: () => void
    items: FoodItem[]
    idOrder: string
}

export interface NavigationProps {
    labels: string[]
    value: number
    onChange: (event: React.SyntheticEvent, newValue: number) => void
}

export interface OrderProps {
    order: Order
}

export interface OrdersListProps {
    orders: Order[]
}
