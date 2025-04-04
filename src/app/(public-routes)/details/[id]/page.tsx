"use client"

import { Skeleton } from "@mui/material"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import LoginModal from "@/components/LoginModal"
import { formatNumber } from "@/helpers/wordHelpper"
import DetailsApiInstance from "@/services/axios/actions/details.action"
import useAuth from "@/stores/useAuth"
import { FoodItem, RestaurantData } from "@/types/api/detail-page"
import { ShoppingCart } from "lucide-react"
import BookingModal from "./_components/BookingModal"
import FoodCart from "./_components/FoodCart"
import FoodDetails from "./_components/FoodDetails"
import FoodDetailsMobile from "./_components/FoodDetailsMobile"
import RestaurantImage from "./_components/RestaurantImage"
import RestaurantInfo from "./_components/RestaurantInfo"
import ReviewList from "./_components/ReviewList"

export type CartItem = FoodItem & { quantity: number }

const DetailsPage = () => {
  const { user, isAuth } = useAuth()

  const [data, setData] = useState<RestaurantData>()
  const [cart, setCart] = useState<CartItem[]>([])
  const [userInfo, setUserInfo] = useState(user)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { id } = useParams()

  const sidebarRef = useRef<HTMLDivElement>(null)

  const searchParams = useSearchParams()

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar()
      }
    }

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  useEffect(() => {
    const foodId = searchParams.get("id") ?? ""

    const list = {
      listIdFood: [foodId],
    }

    const fetchData = async () => {
      try {
        const detailsData = await DetailsApiInstance.getDetails(id, list)
        setData(detailsData)
      } catch (error) {}
    }

    if (id) {
      fetchData()
    }
  }, [id])

  const handleAddItem = (id: string) => {
    const itemToAdd = data && data.listAllFood.find((item) => item._id === id)
    if (!itemToAdd) return

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === id)

      if (existingItem) {
        return prevCart.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...prevCart, { ...itemToAdd, quantity: 1 }]
    })
  }

  const isItemDisabled = (id: string): boolean => {
    if (!data) return true

    const foodItem = data.listAllFood.find((item) => item._id === id)
    if (!foodItem) return true

    if (foodItem.quantity === 0) return true

    const cartItem = cart.find((item) => item._id === id)
    return cartItem ? cartItem.quantity >= foodItem.quantity : false
  }

  const handleIncreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item._id !== id) return item

        const foodItem = data?.listAllFood.find((f) => f._id === id)
        if (!foodItem) return item

        return {
          ...item,
          quantity: item.quantity < foodItem.quantity ? item.quantity + 1 : item.quantity,
        }
      }),
    )
  }

  const handleDecreaseQuantity = (id: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const totalAmount = cart.reduce(
    (total, item) =>
      total + (item.price - item.price * (item.discount / 100)) * item.quantity,
    0,
  )

  const onChangeQuality = (id: string, value: number) => {
    const itemFind = data && data.listAllFood.find((item) => item._id === id)
    if (!itemFind) return

    if (value > itemFind.quantity) return

    setCart((prevCart) =>
      prevCart
        .map((item) => (item._id === id ? { ...item, quantity: value } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const transformMenuItems = (items: CartItem[]) => {
    return items.map((item) => ({
      menuItemId: item._id,
      quantity: item.quantity.toString(),
    }))
  }

  return (
    <div className='relavive max-w-[1250px] mx-auto sm:py-10 py-0'>
      <div
        ref={sidebarRef}
        className={`z-50 fixed top-0 right-0 h-full w-80 bg-gray-100 transform transition-transform duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] sm:hidden ${
          isSidebarOpen ? "z-150 translate-x-0" : "translate-x-full z-10"
        }`}
      >
        {/* Nút Settings */}
        <button
          onClick={toggleSidebar}
          className='absolute left-[-3.5rem] top-40 bg-primary pr-3 pl-5 rounded-sm py-2.5 text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
          style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%, 15% 50%)",
          }}
        >
          <ShoppingCart />
        </button>

        <div className='p-4 z-10 rounded-l-lg'>
          <h2 className='font-bold text-primary text-[24px] mb-10 flex justify-center'>
            GIỎ HÀNG CỦA TÔI
          </h2>
          <div className='flex flex-col gap-3 max-h-[400px] overflow-y-auto px-1 py-2'>
            {cart.length !== 0 ? (
              cart?.map((item) => (
                <FoodCart
                  foodInfo={item}
                  key={item?._id}
                  onIncrease={() => handleIncreaseQuantity(item?._id)}
                  onDecrease={() => handleDecreaseQuantity(item?._id)}
                  onChangeQuality={(value: number) => onChangeQuality(item?._id, value)}
                />
              ))
            ) : (
              <div className='opacity-50'>
                <img
                  src='/images/empty_cart.png'
                  alt=''
                  className='mx-auto max-w-60 mt-[-30px] h-auto'
                />
                <p className='text-center mt-[-30px]'>Giỏ hàng của bạn đang trống</p>
              </div>
            )}
          </div>

          <div className='w-full py-4 mt-5 flex flex-col items-center'>
            <div className='flex w-full justify-between font-bold text-xl sm:text-2xl'>
              <p>Tổng tiền:</p>
              <div className='flex gap-1 items-end text-primary'>
                <p>{formatNumber(totalAmount)}</p>
                <span className='text-[12px] font-light pb-1'>VND</span>
              </div>
            </div>

            {data &&
              cart.length > 0 &&
              (userInfo ? (
                <BookingModal
                  className='rounded-xl font-bold flex justify-center items-center bg-secondary text-[#FDFDFD] cursor-pointer text-xl h-10 w-[50%] mx-auto mt-5 hover:bg-secondary/80'
                  user={userInfo}
                  restaurantId={data.restaurant._id}
                  items={transformMenuItems(cart)}
                >
                  Đặt món
                </BookingModal>
              ) : (
                <LoginModal
                  setUserInfo={(user) => {
                    console.log(user)
                    setUserInfo(user)
                  }}
                  className='rounded-xl font-bold flex justify-center items-center bg-secondary text-[#FDFDFD] cursor-pointer text-xl h-10 w-[50%] mx-auto mt-5 hover:bg-secondary/80'
                >
                  Đặt món
                </LoginModal>
              ))}
          </div>
        </div>
      </div>

      {data ? (
        <div className='w-full flex gap-8 max-sm:flex-col max-sm:gap-4'>
          <RestaurantImage restaurant={data?.restaurant} />
          <div className='flex-1'>
            <RestaurantInfo restaurantInfo={data?.restaurant} />
          </div>
        </div>
      ) : (
        <div className='w-full flex justify-between gap-8'>
          <Skeleton variant='rectangular' width={455} height={500} />
          <Skeleton variant='rectangular' className='flex-1' height={400} />
        </div>
      )}

      {data && (
        <div className='flex justify-between gap-10 my-14'>
          <div className='sm:flex sm:flex-col sm:gap-3.5 max-sm:grid-cols-2 grid gap-2 max-sm:w-[350px] max-sm:mx-auto'>
            {data?.listAllFood.map((food, index) => (
              <div key={food._id}>
                <FoodDetails
                  food={food}
                  disabled={isItemDisabled(food?._id)}
                  onClick={() => handleAddItem(food?._id)}
                />
                <FoodDetailsMobile
                  food={food}
                  disabled={isItemDisabled(food?._id)}
                  onClick={() => handleAddItem(food?._id)}
                />
              </div>
            ))}
          </div>

          <div
            className='w-[500px] h-fit px-[30px] py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-col items-center justify-center max-sm:hidden'
            style={{
              position: "sticky",
              top: "100px",
            }}
          >
            <h2 className='font-bold text-primary text-[30px] mb-10'>GIỎ HÀNG CỦA TÔI</h2>
            <div className='flex flex-col gap-3 max-h-[400px] overflow-y-auto px-1 py-2'>
              {cart.length !== 0 ? (
                cart?.map((item) => (
                  <FoodCart
                    foodInfo={item}
                    key={item?._id}
                    onIncrease={() => handleIncreaseQuantity(item?._id)}
                    onDecrease={() => handleDecreaseQuantity(item?._id)}
                    onChangeQuality={(value: number) => onChangeQuality(item?._id, value)}
                  />
                ))
              ) : (
                <div className='opacity-50'>
                  <img
                    src='/images/empty_cart.png'
                    alt=''
                    className='mx-auto max-w-60 mt-[-30px] h-auto'
                  />
                  <p className='text-center mt-[-30px]'>Giỏ hàng của bạn đang trống</p>
                </div>
              )}
            </div>

            <div className='w-full py-4 mt-5 flex flex-col items-center'>
              <div className='flex w-full justify-between font-bold text-2xl'>
                <p>Tổng tiền:</p>
                <div className='flex gap-1 items-end text-primary'>
                  <p>{formatNumber(totalAmount)}</p>
                  <span className='text-[12px] font-light pb-1'>VND</span>
                </div>
              </div>

              {cart.length > 0 &&
                (userInfo ? (
                  <BookingModal
                    className='rounded-xl font-bold flex justify-center items-center bg-secondary text-[#FDFDFD] cursor-pointer text-xl h-10 w-[50%] mx-auto mt-5 hover:bg-secondary/80'
                    user={userInfo}
                    restaurantId={data.restaurant._id}
                    items={transformMenuItems(cart)}
                  >
                    Đặt món
                  </BookingModal>
                ) : (
                  <LoginModal
                    setUserInfo={(user) => {
                      console.log(user)
                      setUserInfo(user)
                    }}
                    className='rounded-xl font-bold flex justify-center items-center bg-secondary text-[#FDFDFD] cursor-pointer text-xl h-10 w-[50%] mx-auto mt-5 hover:bg-secondary/80'
                  >
                    Đặt món
                  </LoginModal>
                ))}
            </div>
          </div>
        </div>
      )}

      {data && <ReviewList reviews={data?.listComment} />}
    </div>
  )
}

export default DetailsPage
