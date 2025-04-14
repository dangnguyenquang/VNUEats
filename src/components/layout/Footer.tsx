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

      <div className='px-10 flex max-sm:flex-col justify-between max-sm:gap-10'>
        <div className='flex flex-col justify-between'>
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

          <div className='flex items-center gap-3 mt-5'>
            <a
              href='https://www.facebook.com/vnueats'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Facebook sx={{ color: "white", fontSize: "30px" }} />
            </a>
            <a
              href='https://www.youtube.com/@vnuEats'
              target='_blank'
              rel='noopener noreferrer'
            >
              <YouTube sx={{ color: "white", fontSize: "30px" }} />
            </a>
            <a
              href='https://www.instagram.com/vnueats'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Instagram sx={{ color: "white", fontSize: "30px" }} />
            </a>
            <a
              href='https://www.tiktok.com/@vnueats'
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

        <div className='flex justify-end items-center sm:hidden mx-auto'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2393298922107!2d106.80152507560221!3d10.86939285747096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752760218e4731%3A0xcdac54d28860c424!2zdm51RWF0cyAtIEtow6FtIHBow6Eg4bqpbSB0aOG7sWMgbMOgbmcgxJHhuqFpIGjhu41j!5e0!3m2!1svi!2s!4v1743956641660!5m2!1svi!2s'
            width='300'
            height='200'
            loading='lazy'
          ></iframe>
        </div>

        <div className='flex justify-end items-center max-sm:hidden'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2393298922107!2d106.80152507560221!3d10.86939285747096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752760218e4731%3A0xcdac54d28860c424!2zdm51RWF0cyAtIEtow6FtIHBow6Eg4bqpbSB0aOG7sWMgbMOgbmcgxJHhuqFpIGjhu41j!5e0!3m2!1svi!2s!4v1743956641660!5m2!1svi!2s'
            width='600'
            height='300'
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Footer
