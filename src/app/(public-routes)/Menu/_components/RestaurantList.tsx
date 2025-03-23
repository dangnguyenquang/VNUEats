import RestaurantCard from '@/components/RestaurantCard'

type Restaurant = {
  _id: string
  name: string
  starMedium: number
  imageUrl: { url: string }[]
  address: {
    street: string
    borough: string
    city: string
  }
}

type RestaurantListProps = {
  Restaurants: Restaurant[]
  isFilterOpen: boolean
}

const RestaurantList: React.FC<RestaurantListProps> = ({ Restaurants, isFilterOpen }) => {
  return isFilterOpen ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
      {Restaurants.map((restaurant) => (
        <div key={restaurant._id} className="flex justify-center">
          <RestaurantCard
            image={restaurant.imageUrl[0].url}
            rating={restaurant.starMedium}
            restaurant={restaurant.name}
            address={`${restaurant.address.street}, ${restaurant.address.borough}, ${restaurant.address.city}`}
            id={restaurant._id}
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
      {Restaurants.map((restaurant) => (
        <div key={restaurant._id} className="flex justify-center">
          <RestaurantCard
            image={restaurant.imageUrl[0].url}
            rating={restaurant.starMedium}
            restaurant={restaurant.name}
            address={`${restaurant.address.street}, ${restaurant.address.borough}, ${restaurant.address.city}`}
            id={restaurant._id}
          />
        </div>
      ))}
    </div>
  )
}

export default RestaurantList
