import { PATH_NAME } from "@/configs/pathName"
import Link from "next/link"

const FoodCategory = () => {
  const getLinkWithCategory = (category: string) => {
    return `${PATH_NAME.MENU}?categories=${category}`
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-8 mx-auto max-w-[1200px] w-fit'>
      {/* Đồ uống */}
      <Link href={getLinkWithCategory("Đồ+uống")} className='w-fit'>
        <div
          className='relative rounded-lg h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[260px] md:w-[220px] lg:h-[300px] lg:w-[250px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group shadow-md'
          style={{
            backgroundImage: `url('/images/home/juice_category.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(5px 0 0 0 round 15% 0)",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>
          <div className='relative mt-auto text-center text-white'>
            <div className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold font-oswald transition-all duration-[400ms] group-hover:translate-y-[-20px]'>
              Đồ uống
            </div>
          </div>
        </div>
      </Link>

      {/* Thức ăn nhanh */}
      <Link href={getLinkWithCategory("Thức+ăn+nhanh")} className='w-fit'>
        <div
          className='relative rounded-lg h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[260px] md:w-[220px] lg:h-[300px] lg:w-[250px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group shadow-md'
          style={{
            backgroundImage: `url('/images/home/fastfood_category.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(5px 0 0 0 round 15% 0)",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>
          <div className='relative mt-auto text-center text-white'>
            <div className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold font-oswald transition-all duration-[400ms] group-hover:translate-y-[-20px]'>
              Thức ăn nhanh
            </div>
          </div>
        </div>
      </Link>

      {/* Món Á */}
      <Link href={getLinkWithCategory("Món+Á")} className='w-fit'>
        <div
          className='relative rounded-lg h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[260px] md:w-[220px] lg:h-[300px] lg:w-[250px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group shadow-md'
          style={{
            backgroundImage: `url('/images/home/eu_category.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(5px 0 0 0 round 15% 0)",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>
          <div className='relative mt-auto text-center text-white'>
            <div className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold font-oswald transition-all duration-[400ms] group-hover:translate-y-[-20px]'>
              Món Á
            </div>
          </div>
        </div>
      </Link>

      {/* Cơm */}
      <Link href={getLinkWithCategory("Cơm")} className='w-fit'>
        <div
          className='relative rounded-lg h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[260px] md:w-[220px] lg:h-[300px] lg:w-[250px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group shadow-md'
          style={{
            backgroundImage: `url('/images/home/category.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(5px 0 0 0 round 15% 0)",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>
          <div className='relative mt-auto text-center text-white'>
            <div className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold font-oswald transition-all duration-[400ms] group-hover:translate-y-[-20px]'>
              Cơm
            </div>
          </div>
        </div>
      </Link>

      {/* Trà sữa */}
      <Link href={getLinkWithCategory("Trà+sữa")} className='w-fit'>
        <div
          className='relative rounded-lg h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[260px] md:w-[220px] lg:h-[300px] lg:w-[250px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group shadow-md'
          style={{
            backgroundImage: `url('/images/home/milktea_category.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(5px 0 0 0 round 15% 0)",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>
          <div className='relative mt-auto text-center text-white'>
            <div className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold font-oswald transition-all duration-[400ms] group-hover:translate-y-[-20px]'>
              Trà sữa
            </div>
          </div>
        </div>
      </Link>

      {/* Món chay */}
      <Link href={getLinkWithCategory("Món+chay")} className='w-fit'>
        <div
          className='relative rounded-lg h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[260px] md:w-[220px] lg:h-[300px] lg:w-[250px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group shadow-md'
          style={{
            backgroundImage: `url('/images/home/vegan_category.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(5px 0 0 0 round 15% 0)",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>
          <div className='relative mt-auto text-center text-white'>
            <div className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold font-oswald transition-all duration-[400ms] group-hover:translate-y-[-20px]'>
              Món chay
            </div>
          </div>
        </div>
      </Link>

      {/* Bún phở */}
      <Link href={getLinkWithCategory("Bún+phở")} className='w-fit'>
        <div
          className='relative rounded-lg h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[260px] md:w-[220px] lg:h-[300px] lg:w-[250px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group shadow-md'
          style={{
            backgroundImage: `url('/images/home/pho_category.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(5px 0 0 0 round 15% 0)",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>
          <div className='relative mt-auto text-center text-white'>
            <div className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold font-oswald transition-all duration-[400ms] group-hover:translate-y-[-20px]'>
              Bún phở
            </div>
          </div>
        </div>
      </Link>

      {/* Đồ ăn vặt */}
      <Link href={getLinkWithCategory("Đồ+ăn+vặt")} className='w-fit'>
        <div
          className='relative rounded-lg h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[260px] md:w-[220px] lg:h-[300px] lg:w-[250px] py-3 px-5 flex flex-col md:hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer group shadow-md'
          style={{
            backgroundImage: `url('/images/home/snack_category.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            clipPath: "inset(5px 0 0 0 round 15% 0)",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/60 rounded-lg'></div>
          <div className='relative mt-auto text-center text-white'>
            <div className='text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold font-oswald transition-all duration-[400ms] group-hover:translate-y-[-20px]'>
              Đồ ăn vặt
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FoodCategory
