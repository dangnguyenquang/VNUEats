"use client"
import { faClock, faShieldAlt, faTag } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Aos from "aos"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Image_intro from "../../../assets/images/aboutUs/about_us_intro.png"
import Image_mission_1 from "../../../assets/images/aboutUs/about_us_mission.png"
import Image_mission_2 from "../../../assets/images/aboutUs/about_us_mission1.png"
import Image_value from "../../../assets/images/aboutUs/about_us_ourvalue.png"
import Image_Group from "../../../assets/images/aboutUs/group_img.png"

export default function AboutUs() {
  const router = useRouter()
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 50,
      easing: "ease-in-out",
      mirror: true,
    })
  }, [])

  // Biến Style cho Heading
  const styleTextHeading = "text-[28px] md:text-[36px] lg:text-[48px] xl:text-[50px]"
  // Biến Style cho các description
  const styleTextDesc = "text-[12px] md:text-[16px] lg:text-[18px] xl:text-[25px]"
  // Mảng các thẻ item của Giá trị mà vnuEats mang lại
  const Items = [
    {
      icon: faShieldAlt,
      title: "An toàn và chất lượng",
      desc: "Đảm bảo món ăn được giao đúng yêu cầu, an toàn thực phẩm.",
    },
    {
      icon: faClock,
      title: "Tiện lợi và nhanh chóng",
      desc: "Tiết kiệm thời gian cho khách hàng với vài thao tác đơn giản.",
    },
    {
      icon: faTag,
      title: "Ưu đãi hấp dẫn",
      desc: "vnuEats cung cấp các chương trình khuyến mãi thường xuyên cho khách hàng thân thiết và mới.",
    },
  ]
  return (
    <>
      <Head>
        <title>vnuEats - Về chúng tôi</title>
        <meta
          name='description'
          content='Giới thiệu về các thành viên sáng lập, sứ mệnh và giá trị của vnuEats mang lại.'
        />
        <meta name='keywords' content='vnuEats, giá trị vnuEats, sứ mệnh vnuEats' />
        <meta name='author' content='vnuEats Team' />
        <meta property='og:title' content='vnuEats - Về chúng tôi' />
        <meta
          property='og:description'
          content='Giới thiệu về các thành viên sáng lập, sứ mệnh và giá trị của vnuEats mang lại.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://vnuEats.com/about-us' />
      </Head>

      <div className='w-full' style={{ minWidth: "410px" }}>
        {/*====================================== Giới thiệu về vnuEats ======================================*/}
        <section
          className='flex justify-center w-full items-center mt-[150px]'
          data-aos='fade-up'
        >
          <div className='flex items-center w-[96%] p-[30px] md:p-[50px] bg-secondary rounded-[20px]'>
            <Image
              src={Image_intro}
              alt='Bánh pizza theo phong cách châu Âu tại làng đại học.'
              className='max-w-[41.5%] h-auto max-sm:hidden'
            />
            <div
              className='flex justify-center p-[30px] bg-accent rounded-[20px] lg:absolute lg:left-[445px] lg:right-[90px]'
              data-aos='zoom-in'
            >
              <div className='w-[94.5%]'>
                <h1
                  className={`text-primary font-bold text-center  ${styleTextHeading} mt-[18px]`}
                >
                  GIỚI THIỆU VỀ vnuEats
                </h1>
                <div className='mt-[30px] text-center'>
                  <p className={`${styleTextDesc}`}>
                    Được xây dựng bởi{" "}
                    <strong className='font-bold'>
                      một nhóm sinh viên tại Trường Đại học Công nghệ thông tin - ĐHQG
                      TPHCM
                    </strong>{" "}
                    từ giữa năm 2024.
                  </p>
                  <p className={`${styleTextDesc}`}>
                    <strong className={`font-bold  text-secondary ${styleTextDesc}`}>
                      vnuEats
                    </strong>{" "}
                    là cộng đồng tin cậy cho mọi người có thể tìm kiếm, đánh giá và đặt
                    món ăn ngon từ các địa điểm ăn uống trong khu vực Làng Đại học Thủ
                    Đức. Từ đó kết nối những thực khách đến với các món đặc sản ở làng đại
                    học một cách nhanh chóng và tiện lợi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================== Những con người tạo nên vnuEats ====================================== */}
        <section className=' mt-[70px] px-[20px] sm:px-[40px] lg:px-[70px]'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
            <h1
              className={`text-primary font-bold text-center lg:text-left w-full lg:w-[600px] ${styleTextHeading}`}
              data-aos='fade-right'
            >
              NHỮNG CON NGƯỜI TẠO NÊN{" "}
              <strong
                className={`text-secondary font-bold text-center lg:text-left w-full lg:w-[600px] ${styleTextHeading}`}
              >
                vnuEats
              </strong>
            </h1>
            <p
              className={`font-light italic text-center lg:text-left w-full lg:w-[55vw] ${styleTextDesc}`}
              data-aos='fade-left'
            >
              “Chúng tôi - những con người sáng lập ra vnuEats, cùng với những ngọn lửa
              đam mê cháy bỏng dành cho công nghệ, chúng tôi đã và đang không ngừng nỗ lực
              trau dồi và hoàn thiện bản thân hơn để mang đến những sản phẩm vượt trội và
              tạo ra những trải nghiệm tuyệt vời nhất cho mọi người.”
            </p>
          </div>
          <div className='relative group'>
            <Image
              src={Image_Group}
              alt='Nhóm sinh viên trường Đại học Công nghệ thông tin sáng lập và phát triển vnuEats.'
              className='h-[320px] sm:h-[480px] lg:h-[640px] w-full object-cover mt-10'
              data-aos='zoom-in'
            />
            <div className='absolute inset-0 flex justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000'>
              <div
                className={`transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out mt-[100px] sm:mt-[200px] lg:mt-[300px] p-[70px]`}
              >
                <p className={`${styleTextDesc} text-center`}>
                  Nhóm chúng tôi gồm 5 thành viên đến từ lớp CNTT2022.1:
                </p>
                <div className=' justify-center'>
                  <ol className='ml-[50px] list-decimal list-inside text-center'>
                    <li className={`${styleTextDesc} font-light `}>
                      <strong>Nguyễn Quang Đăng</strong> - 22520191
                    </li>
                    <li className={`${styleTextDesc} font-light`}>
                      <strong>Nguyễn Công Bá</strong> - 22520087
                    </li>
                    <li className={`${styleTextDesc} font-light`}>
                      <strong>Phạm Văn Duy</strong> - 22520341
                    </li>
                    <li className={`${styleTextDesc} font-light`}>
                      <strong>Lê Hoàng Đức</strong> - 22520351
                    </li>
                    <li className={`${styleTextDesc} font-light`}>
                      <strong>Lê Minh Khôi</strong> - 22520698
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*====================================== Sứ mệnh của chúng tôi ======================================*/}
        <section className=' p-[20px] lg:p-[70px] flex relative flex-col lg:flex-row justify-center'>
          <div
            className='relative md:mr-[120px] flex justify-center flex-shrink-0'
            data-aos='fade-down-right'
          >
            <Image
              src={Image_mission_1}
              alt='Thực đơn bữa cơm gia đình tại quán cơm quê ở làng đại học.'
              className=' w-full  xl:w-[550px] xl:h-[420px] lg:h-[340px]  rounded-[20px] max-lg:hidden'
            />
            <Image
              src={Image_mission_2}
              alt='Món chả trứng hấp siêu ngon tại quán cơm quê ở làng đại học.'
              className='absolute xl:top-[150px] lg:left-[180px] lg:top-[100px] xl:left-[290px] lg:w-[300px] xl:w-[350px] rounded-[20px] max-lg:hidden'
            />
          </div>
          <div
            className='flex flex-col items-center max-lg:mt-5 '
            data-aos='fade-up-left'
          >
            <h1
              className={`text-primary font-bold  w-full ${styleTextHeading} max-lg:text-center`}
            >
              <strong className={`text-secondary ${styleTextHeading} font-bold`}>
                vnuEats
              </strong>{" "}
              - Thưởng thức các món ăn đặc sản Làng Đại học tại Thủ Đức!
            </h1>
            <p className={`font-light ${styleTextDesc} mt-[30px] max-lg:text-center`}>
              Bạn đang tìm kiếm món ngon làng đại học để thưởng thức? Hãy khám phá ngay{" "}
              <strong className='text-secondary'>vnuEats</strong> – nền tảng đặt món ăn
              trực tuyến hàng đầu dành cho sinh viên và cư dân khu vực làng đại học Thủ
              Đức. Chúng tôi mang đến danh sách những món ăn đặc sản làng đại học hấp dẫn,
              từ các món ăn vặt nổi tiếng đến những bữa ăn đầy đủ dinh dưỡng với những mức
              giá hợp lý cho mọi người. <br />
              <strong className='text-secondary'>vnuEats</strong> cam kết mang đến trải
              nghiệm đặt món nhanh chóng, an toàn và tiện lợi. Chỉ với vài cú click, bạn
              đã có thể đặt ngay những món ngon ở Làng Đại học Thủ đức và món ăn sẽ được
              giao tận nơi, đảm bảo chất lượng và giá cả hợp lý cho bạn.
            </p>
            <button
              className='px-[30px] py-[15px] bg-primary rounded-[100px] text-accent text-[11px] md:text-[15px] xl:text-[20px] transition-all duration-300 hover:bg-accent hover:text-primary hover:shadow-lg mt-[20px]'
              onClick={() => router.push("/our-commit")}
            >
              Cam kết của vnuEats
            </button>
          </div>
        </section>

        {/*====================================== Giá trị vnuEats mang lại ======================================*/}
        <section
          className='flex flex-col items-center min-w-screen min-h-[700px] py-[4.1vw] px-[5vw] mt-5'
          style={{
            backgroundImage: `url(${Image_value.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            className={`mb-[3vw] text-accent uppercase font-bold text-center ${styleTextHeading}`}
          >
            Giá trị vnuEats mang lại
          </h1>
          <div className='flex flex-wrap justify-center gap-[5vw] '>
            {Items.map((item, index) => (
              <div
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-delay={index * 200}
                key={index}
                className='relative w-[90%] sm:w-[293px] h-auto p-[3vw] mt-[2vw] bg-accent bg-opacity-70 rounded-[20px]'
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className='absolute top-[-4.125vw] sm:top-[-2.125vw] left-1/2 transform -translate-x-1/2 text-[40px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[70px]'
                />
                <div
                  className={`mt-[20px] sm:mt-[12px] text-center font-bold text-[20px] lg:text-[25px]`}
                >
                  {item.title}
                </div>
                <p className='mt-[10px] lg:mt-[40px] text-center font-light sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
