import { Restaurant } from "@/types/api/detail-page"
import { useState } from "react"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

interface Props {
  restaurant: Restaurant
}

const RestaurantImage = ({ restaurant }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % restaurant.imageUrl.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? restaurant.imageUrl.length - 1 : prevIndex - 1,
    )
  }

  const handleImageClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div className='relative flex flex-col sm:gap-5 sm:w-[550px] w-screen gap-2'>
      <div className='relative overflow-hidden sm:w-full sm:h-[400px] sm:rounded-xl w-auto h-[300px]'>
        <div
          className={`absolute inset-0 flex transition-transform duration-500 ease-in-out object-cover ${
            direction === 1
              ? "-translate-x-full"
              : direction === -1
                ? "translate-x-full"
                : "translate-x-0"
          }`}
          style={{
            transform: `translateX(-${currentIndex * 550}px)`,
            width: `${restaurant.imageUrl.length * 550}px`,
          }}
        >
          {restaurant.imageUrl.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Image ${index + 1}`}
              className='w-[550px] h-[400px] object-cover'
            />
          ))}
        </div>
      </div>

      <div
        onClick={handlePrev}
        className='flex absolute left-0 items-center opacity-20 hover:opacity-30  bg-gray-800 text-white p-4 h-[400px] cursor-pointer rounded-s-xl max-sm:hidden'
      >
        <GrFormPrevious size={30} />
      </div>
      <div
        onClick={handleNext}
        className='flex absolute right-0 items-center opacity-20 hover:opacity-30  bg-gray-800 text-white p-4 h-[400px] cursor-pointer rounded-e-xl max-sm:hidden'
      >
        <GrFormNext size={30} />
      </div>

      <div className='flex gap-2 overflow-x-auto max-sm:px-2  '>
        {restaurant.imageUrl.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg cursor-pointer border-2 ${
              index === currentIndex ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default RestaurantImage
