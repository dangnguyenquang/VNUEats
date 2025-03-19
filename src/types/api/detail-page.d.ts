export type UserAvatar = {
    url: string
    public_id: string
}

export type Comment = {
    _id: string
    userId: string
    userName: string
    userAvatar: UserAvatar
    content: string
    star: number
}

export type Address = {
    street: string
    city: string
    borough: string
    zip: string
}

export type Restaurant = {
    _id: string
    ownerId: string
    name: string
    profit: number
    status: string
    phone: string
    quantitySolded: number
    starMedium: number
    time_close: string
    time_open: string
    __v: number
    createdAt: string
    updatedAt: string
    imageUrl: Image[]
    address: Address
    description: string
}

export type Image = {
    url: string
    public_id: string
    _id: string
}

export type FoodItem = {
    _id: string
    restaurantId: string
    imageUrl: Image[]
    title: string
    description: string
    quantity: number
    price: number
    isAvailable: boolean
    discount: number
    starMedium: number
    quantitySolded: number
    createdAt: string
    updatedAt: string
    __v: number
}

export type RestaurantData = {
    restaurant: Restaurant
    listAllFood: FoodItem[]
    listComment: Comment[]
}
