export interface ImageUrl {
    url: string
    public_id: string
    _id?: string
}

export interface Address {
    street: string
    city: string
    borough: string
}

export interface SpecialtyFood {
    imageUrl: ImageUrl
    _id: string
    name: string
    createdAt: string
    updatedAt: string
    slug: string
    __v: number
}

export interface Restaurant {
    address: Address
    _id: string
    ownerId: string
    name: string
    profit: number
    quantitySolded: number
    phone: string
    time_open: string
    time_close: string
    starMedium: number
    status: string
    description: string
    imageUrl: ImageUrl[]
    createdAt: string
    updatedAt: string
    slug: string
    __v: number
    review: number
}

export interface Food {
    _id: string
    restaurantId: string
    imageUrl: ImageUrl[]
    title: string
    description: string
    quantity: number
    price: number
    category: string
    isAvailable: boolean
    discount: number
    starMedium: number
    quantitySolded: number
    createdAt: string
    updatedAt: string
    __v: number
    restaurantName: string
    restaurantAddress: Address
}

export interface FoodData {
    specialtyFoods: SpecialtyFood[]
    restaurants: Restaurant[]
    foods: Food[]
}
