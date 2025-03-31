import { PATH_NAME } from "@/configs/pathName"
import { faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Facebook, Instagram, YouTube } from "@mui/icons-material"
import ApartmentIcon from "@mui/icons-material/Apartment"
import EmailIcon from "@mui/icons-material/Email"
import FmdGoodIcon from "@mui/icons-material/FmdGood"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import Image from "next/image"
import Link from "next/link"
import logo_vnuEats from "../../assets/icons/logo.svg"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div
      className='min-w-screen py-[50px] px-2 md:px-5 lg:px-20'
      style={{
        backgroundImage: `url('/images/footer.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='flex flex-col md:flex-row max-md:gap-8 justify-between w-full items-center text-white px-10'>
        <Image
          src={logo_vnuEats}
          alt='vnuEats logo'
          style={{ width: "350px", height: "auto" }}
        />
        <div className='grid grid-cols-3 gap-x-[30px] md:gap-x-[20px] lg:gap-x-[40px] gap-y-[1px]'>
          <div>
            <p className='text-[20px] sm:text-[25px] font-bold'>Về vnuEats</p>
            <div className='md:text-sm flex flex-col mt-5 md:mt-3 text-[#C9C9C9] gap-2.5 md:gap-[5px]'>
              <Link
                href={PATH_NAME.ABOUTUS}
                className='hover:underline'
                onClick={scrollToTop}
              >
                Giới thiệu
              </Link>
              <Link
                href={PATH_NAME.OURCOMMIT}
                className='hover:underline'
                onClick={scrollToTop}
              >
                Cam kết của vnuEats
              </Link>
            </div>
          </div>
          <div>
            <p className='text-[20px] sm:text-[25px] font-bold'>Chính sách</p>
            <div className='md:text-sm flex flex-col mt-5 md:mt-3 text-[#C9C9C9] gap-2.5 md:gap-[5px]'>
              <Link
                href={PATH_NAME.OPERATINGPOLICY}
                className='hover:underline'
                onClick={scrollToTop}
              >
                Chính sách hoạt động
              </Link>
              <Link
                href={PATH_NAME.PRIVACYPOLICY}
                className='hover:underline'
                onClick={scrollToTop}
              >
                Chính sách bảo mật thông tin
              </Link>
            </div>
          </div>
          <div>
            <p className='text-[20px] sm:text-[25px] font-bold'>Hướng dẫn</p>
            <div className='md:text-sm flex flex-col mt-5 md:mt-3 text-[#C9C9C9] gap-2.5 md:gap-[5px]'>
              <Link
                href={PATH_NAME.ORDERINSTRUCTIONS}
                className='hover:underline'
                onClick={scrollToTop}
              >
                Hướng dẫn đặt món
              </Link>
              <Link
                href={PATH_NAME.CONTACTINSTRUCTIONS}
                className='hover:underline'
                onClick={scrollToTop}
              >
                Hướng dẫn liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-white mx-auto w-[80%] md:w-full my-10 md:my-12'></div>

      <div className='px-10'>
        <div className='flex flex-col gap-2 max-w-[470px] text-white'>
          <div className='flex gap-4 items-center'>
            <ApartmentIcon />
            <p className='text-[20px] sm:text-[28px] font-semibold uppercase'>
              Công ty TNHH vnuEats
            </p>
          </div>
          <div className='flex gap-4 items-center'>
            <FmdGoodIcon />
            <p className='text-sm'>
              Số 16, đường Hoàng Diệu 2, phường Linh Trung, TP.Thủ Đức, TP. Hồ Chí Minh
            </p>
          </div>
          {/* <div className='flex gap-4 items-center'>
            <VerifiedIcon />
            <p className='text-sm'>
              Giấy CN DKDN số: 8386365078 do Sở Kế hoạch và Đầu tư TP.HCM cấp 12/10/2024
            </p>
          </div> */}
          <div className='flex gap-4 items-center'>
            <EmailIcon />
            <p className='text-sm'>Email: vnueats2025@gmail.com</p>
          </div>
          <div className='flex gap-4 items-center'>
            <LocalPhoneIcon />
            <p className='text-sm'>SDT: 0338963327</p>
          </div>
        </div>

        <div className='flex justify-end items-center gap-3 mt-5'>
          <a
            href='https://www.facebook.com/profile.php?id=61574616120300'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Facebook sx={{ color: "white", fontSize: "30px" }} />
          </a>
          <a
            href='https://www.youtube.com/channel/UCNMnKJHdce_AEamIH2LCz-g'
            target='_blank'
            rel='noopener noreferrer'
          >
            <YouTube sx={{ color: "white", fontSize: "30px" }} />
          </a>
          <a
            href='https://www.instagram.com/vnu.eats/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Instagram sx={{ color: "white", fontSize: "30px" }} />
          </a>
          <a
            href='https://www.tiktok.com/@it.inmyheart'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon
              icon={faTiktok}
              style={{ color: "white", fontSize: "30px" }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
