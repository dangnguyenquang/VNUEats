import BubblyButton from "@/components/ui/BubblyButton"
import { formatNumber, truncateStringToWords } from "@/helpers/wordHelpper"
import { FoodItem } from "@/types/api/detail-page"
import StarRateIcon from "@mui/icons-material/StarRate"

interface Props {
  food: FoodItem
  onClick: () => void
  disabled: boolean
}

const FoodDetailsMobile = ({ food, onClick, disabled = false }: Props) => {
  return (
    <div className='relative z-10 group rounded-lg sm:rounded-xl max-sm:flex-col flex sm:p-5 h-[400px] w-[170px] sm:h-[165px] sm:w-[600px] gap-2 sm:gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:hidden max-sm:pb-3'>
      <div className='relative'>
        <img
          src={food.imageUrl[0].url}
          alt=''
          className='rounded-lg sm:rounded-xl object-cover w-[170px] sm:w-[125px] h-[170px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'
        />
        {disabled && (
          <div className='absolute inset-0 bg-white opacity-50 rounded-lg font-bold flex items-center justify-center text-primary text-xl'>
            {" "}
            HẾT HÀNG
          </div>
        )}
      </div>

      <div className='flex flex-col gap-2 flex-1 max-sm:px-2'>
        <div className='flex max-sm:flex-col sm:justify-between'>
          <h2 className='text-lg sm:text-[22px] font-bold text-primary'>{food.title}</h2>
          <div className='flex sm:items-center sm:justify-center text-[15px] font-medium gap-1'>
            <p>{food.starMedium.toFixed(1)}/5</p>
            <StarRateIcon className='text-yellow-400' sx={{ fontSize: "20px" }} />
          </div>
        </div>

        <div className='flex flex-col gap-2 text-sm'>
          <p className=''>
            <strong>Mô tả:</strong> {truncateStringToWords(food.description, 6)}
          </p>
          <p className='sm:hidden'>
            <strong>Số lượng còn lại:</strong> {food.quantity}
          </p>
        </div>

        <div className=' flex justify-between items-center mt-auto'>
          <div className='flex gap-1 items-end text-primary'>
            <div>
              {food.discount > 0 && (
                <div className='text-[12px] sm:text-[16px] mb-[-5px] line-through'>
                  {formatNumber(food.price)}
                </div>
              )}
              <div className='font-bold text-[20px] sm:text-[24px]'>
                {formatNumber(food.price - food.price * (food.discount / 100))}
              </div>
            </div>
            <span className='text-[12px] font-light pb-1'>VND</span>
          </div>

          <p className='max-sm:hidden'>
            <strong>Số lượng còn lại:</strong> {food.quantity}
          </p>

          <BubblyButton
            disabled={disabled}
            onClick={onClick}
            className={`rounded-xl py-[1px] px-2.5 text-2xl text-white ${disabled ? "bg-primary/50" : "bg-primary"}`}
          >
            +
          </BubblyButton>
        </div>
      </div>
    </div>
  )
}

export default FoodDetailsMobile
