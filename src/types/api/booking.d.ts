export type OrderItem = {
    menuItemId: string
    quantity: string
}

export type Order = {
    restaurantId: string
    items: OrderItem[]
    deliveryAddress: string
    phone: string
    message: string
}
