import { Restaurant } from "@/types/api/detail-page"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import StarRateIcon from "@mui/icons-material/StarRate"

interface Props {
  restaurantInfo: Restaurant
}

const RestaurantInfo = ({ restaurantInfo }: Props) => {
  return (
    <div className='w-full bg-primary p-4 sm:py-8 sm:px-6 flex flex-col gap-5 text-white sm:rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h1 className='sm:text-[30px] font-bold text-[25px]'>{restaurantInfo.name}</h1>
      </div>
      <div className='flex items-center justify-start text-[20px] font-medium gap-1'>
        <p>{restaurantInfo.starMedium.toFixed(1)}/5</p>
        <StarRateIcon className='text-yellow-400' sx={{ fontSize: "24px" }} />
      </div>
      <div className='flex justify-between gap-4'>
        <p>{`${`${restaurantInfo.address.street} ${restaurantInfo.address.borough} ${restaurantInfo.address.city}`}`}</p>
        <p>
          <strong>Số điện thoại:</strong> {restaurantInfo.phone}
        </p>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-4 items-center max-sm:justify-between max-sm:w-full'>
          <span className='sm:text-xl text-base font-bold text-[#13D602]'>
            Giờ mở cửa
          </span>
          <div className='flex gap-1'>
            <AccessTimeFilledIcon />
            <span>{`${restaurantInfo.time_open} - ${restaurantInfo.time_close}`}</span>
          </div>
        </div>
      </div>
      <p>
        <strong>Mô tả:</strong> {restaurantInfo.description}
      </p>
    </div>
  )
}

export default RestaurantInfo
