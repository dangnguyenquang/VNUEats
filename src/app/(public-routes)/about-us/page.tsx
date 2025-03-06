'use client'
import { faClock, faShieldAlt, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Image_intro from '../../assets/images/aboutUs/about_us_intro.png'
import Image_mission_1 from '../../assets/images/aboutUs/about_us_mission.png'
import Image_mission_2 from '../../assets/images/aboutUs/about_us_mission1.png'
import Image_Group from '../../assets/images/aboutUs/group_img.png'

import Image_value from '../../assets/images/aboutUs/about_us_ourvalue.png'

export default function AboutUs() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 50,
      easing: 'ease-in-out',
      mirror: true,
    })
  }, [])

  // Biến Style cho Heading
  const styleTextHeading = 'text-[28px] md:text-[36px] lg:text-[48px] xl:text-[50px]'
  // Biến Style cho các description
  const styleTextDesc = 'text-[12px] md:text-[16px] lg:text-[18px] xl:text-[25px]'
  // Mảng các thẻ item của Giá trị mà Yummy mang lại
  const Items = [
    {
      icon: faShieldAlt,
      title: 'An toàn và chất lượng',
      desc: 'Đảm bảo món ăn được giao đúng yêu cầu, an toàn thực phẩm.',
    },
    {
      icon: faClock,
      title: 'Tiện lợi và nhanh chóng',
      desc: 'Tiết kiệm thời gian cho khách hàng với vài thao tác đơn giản.',
    },
    {
      icon: faTag,
      title: 'Ưu đãi hấp dẫn',
      desc: 'YummyVNU cung cấp các chương trình khuyến mãi thường xuyên cho khách hàng thân thiết và mới.',
    },
  ]
  return (
    <>
      <Head>
        <title>YummyVNU - Về chúng tôi</title>
        <meta
          name="description"
          content="Giới thiệu về các thành viên sáng lập, sứ mệnh và giá trị của YummyVNU mang lại."
        />
        <meta name="keywords" content="YummyVNU, giá trị Yummy, sứ mệnh Yummy" />
        <meta name="author" content="YummyVNU Team" />
        <meta property="og:title" content="YummyVNU - Về chúng tôi" />
        <meta
          property="og:description"
          content="Giới thiệu về các thành viên sáng lập, sứ mệnh và giá trị của YummyVNU mang lại."
        />
        {/* <meta property="og:image" content="/images/yummy-contact.jpg" /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://yummy.vn/lien-he" /> */}
      </Head>

      <div className="w-full" style={{ minWidth: '410px' }}>
        {/*====================================== Giới thiệu về Yummy ======================================*/}
        <section
          className="flex justify-center w-full items-center mt-[100px]"
          data-aos="fade-up"
        >
          <div className="flex items-center w-[96%] p-[30px] md:p-[50px] bg-secondary rounded-[20px]">
            <Image
              src={Image_intro}
              alt="Bánh pizza theo phong cách châu Âu tại làng đại học."
              className="max-w-[41.5%] h-auto max-sm:hidden"
            />
            <div
              className="flex justify-center p-[30px] bg-accent rounded-[20px] lg:absolute lg:left-[445px] lg:right-[90px]"
              data-aos="zoom-in"
            >
              <div className="w-[94.5%]">
                <h1
                  className={`text-primary font-bold text-center  ${styleTextHeading} mt-[18px]`}
                >
                  GIỚI THIỆU VỀ YummyVNU
                </h1>
                <div className="mt-[30px] text-center">
                  <p className={`${styleTextDesc}`}>
                    Được xây dựng bởi{' '}
                    <strong className="font-bold">
                      một nhóm sinh viên tại Trường Đại học Công nghệ thông tin - ĐHQG
                      TPHCM
                    </strong>{' '}
                    từ giữa năm 2024.
                  </p>
                  <p className={`${styleTextDesc}`}>
                    <strong className={`font-bold  text-secondary ${styleTextDesc}`}>
                      YummyVNU
                    </strong>{' '}
                    là cộng đồng tin cậy cho mọi người có thể tìm kiếm, đánh giá và đặt
                    món ăn ngon từ các địa điểm ăn uống trong khu vực làng đại học thành
                    phố Hồ Chí Minh. Từ đó kết nối những thực khách đến với các món đặc
                    sản làng đại học.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================== Những con người tạo nên Yummy ====================================== */}
        <section className=" mt-[70px] px-[20px] sm:px-[40px] lg:px-[70px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <h1
              className={`text-primary font-bold text-center lg:text-left w-full lg:w-[600px] ${styleTextHeading}`}
              data-aos="fade-right"
            >
              NHỮNG CON NGƯỜI TẠO NÊN{' '}
              <strong
                className={`text-secondary font-bold text-center lg:text-left w-full lg:w-[600px] ${styleTextHeading}`}
              >
                YummyVNU
              </strong>
            </h1>
            <p
              className={`font-medium italic text-center lg:text-left w-full lg:w-[55vw] ${styleTextDesc}`}
              data-aos="fade-left"
            >
              “Chúng tôi - những con người sáng lập ra YummyVNU, cùng với những ngọn lửa
              đam mê cháy bỏng dành cho công nghệ, chúng tôi đã và đang không ngừng nỗ lực
              trau dồi và hoàn thiện bản thân hơn để mang đến những sản phẩm vượt trội và
              tạo ra những trải nghiệm tuyệt vời nhất cho mọi người.”
            </p>
          </div>
          <div className="relative group">
            <Image
              src={Image_Group}
              alt="Nhóm sinh viên trường Đại học Công nghệ thông tin sáng lập và phát triển YummyVNU."
              className="h-[320px] sm:h-[480px] lg:h-[640px] w-full object-cover mt-10"
              data-aos="zoom-in"
            />
            <div className="absolute inset-0 flex justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div
                className={`transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out mt-[100px] sm:mt-[200px] lg:mt-[300px] p-[70px]`}
              >
                <p className={`${styleTextDesc} text-center`}>
                  Nhóm chúng tôi gồm 5 thành viên đến từ lớp CNTT2022.1:
                </p>
                <div className=" justify-center">
                  <ol className="ml-[50px] list-decimal list-inside text-center">
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
        <section className=" p-[20px] lg:p-[70px] flex relative flex-col lg:flex-row justify-center">
          <div
            className="relative md:mr-[120px] flex justify-center flex-shrink-0"
            data-aos="fade-down-right"
          >
            <Image
              src={Image_mission_1}
              alt="Thực đơn bữa cơm gia đình tại quán cơm quê ở làng đại học."
              className=" w-full  xl:w-[550px] xl:h-[420px] lg:h-[340px]  rounded-[20px]"
            />
            <Image
              src={Image_mission_2}
              alt="Món chả trứng hấp siêu ngon tại quán cơm quê ở làng đại học."
              className="absolute xl:top-[150px] lg:left-[180px] lg:top-[100px] xl:left-[290px] lg:w-[300px] xl:w-[350px] rounded-[20px] max-lg:hidden"
            />
          </div>
          <div
            className="flex flex-col items-center max-lg:mt-5 "
            data-aos="fade-up-left"
          >
            <h1
              className={`text-primary font-bold  w-full ${styleTextHeading} max-lg:text-center`}
            >
              <strong className={`text-secondary ${styleTextHeading} font-bold`}>
                YummyVNU
              </strong>{' '}
              - Thưởng thức đặc sản làng đại học!
            </h1>
            <p className={`font-light ${styleTextDesc} mt-[30px] max-lg:text-center`}>
              Bạn đang tìm kiếm món ngon làng đại học để thưởng thức? Hãy khám phá ngay
              YummyVNU – nền tảng đặt món ăn trực tuyến hàng đầu dành cho sinh viên và cư
              dân khu vực làng đại học. Chúng tôi mang đến danh sách những đặc sản làng
              đại học hấp dẫn, từ các món ăn vặt nổi tiếng đến những bữa ăn đầy đủ dinh
              dưỡng với giá cả hợp lý. <br />
              YummyVNU cam kết mang đến trải nghiệm đặt món nhanh chóng, an toàn và tiện
              lợi. Chỉ với vài cú click, bạn đã có ngay những món ngon làng đại học giao
              tận nơi, đảm bảo chất lượng và giá cả hợp lý.
            </p>
            <button
              className="px-[30px] py-[15px] bg-primary rounded-[100px] text-accent text-[11px] md:text-[15px] xl:text-[20px] transition-all duration-300 hover:bg-accent hover:text-primary hover:shadow-lg mt-[20px]"
              // onClick={'routes.OURCOMMIT'}
            >
              Cam kết của YummyVNU
            </button>
          </div>
        </section>

        {/*====================================== Giá trị Yummy mang lại ======================================*/}
        <section
          className="flex flex-col items-center min-w-screen min-h-[700px] py-[4.1vw] px-[5vw]"
          style={{
            backgroundImage: `url(${Image_value.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1
            className={`mb-[3vw] text-accent uppercase font-bold text-center ${styleTextHeading}`}
          >
            Giá trị YummyVNU mang lại
          </h1>
          <div className="flex flex-wrap justify-center gap-[5vw] ">
            {Items.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={index * 200}
                key={index}
                className="relative w-[90%] sm:w-[293px] h-auto p-[3vw] mt-[2vw] bg-accent bg-opacity-70 rounded-[20px]"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="4x"
                  className="absolute top-[-2.125vw] left-1/2 transform -translate-x-1/2 "
                />
                <div className={`mt-[12px] text-center font-bold ${styleTextDesc}`}>
                  {item.title}
                </div>
                <p className="mt-[40px] text-center font-light sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
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
