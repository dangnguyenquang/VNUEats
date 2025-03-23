import RestaurantCard from '@/components/RestaurantCard'

const RestaurantList = ({ Restaurants, isFilterOpen }) => {
    return isFilterOpen ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {Restaurants.map((restaurant, index) => (
                <div key={index} className="flex justify-center">
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
            {Restaurants.map((restaurant, index) => (
                <div key={index} className="flex justify-center">
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
