import Head from 'next/head'
import * as React from 'react'

interface Section {
  title: string
  content: string[]
}

const sections: Section[] = [
  {
    title: 'Phạm vi hoạt động',
    content: [
      'YummyVNU hiện chỉ phục vụ tại khu vực Làng đại học Thủ Đức, với mạng lưới các nhà hàng và quán ăn uy tín. Chúng tôi liên tục mở rộng mạng lưới đối tác và khu vực phục vụ để mang lại trải nghiệm đa dạng hơn cho khách hàng.',
    ],
  },
  {
    title: 'Quy trình đặt món và xác nhận đơn hàng',
    content: [
      'Khách hàng có thể dễ dàng truy cập YummyVNU qua website, lựa chọn món ăn từ danh sách phong phú của các quán ăn và nhà hàng.',
      'Mỗi đơn hàng sẽ được xác nhận ngay sau khi nhà hàng hoặc quán ăn xác nhận đơn hàng và khách hàng có thể theo dõi trạng thái đơn hàng trực tiếp qua tài khoản cá nhân trên YummyVNU.',
    ],
  },
  {
    title: 'Phí giao hàng và thời gian giao hàng',
    content: [
      'Phí giao hàng được tính dựa trên khoảng cách và thời gian giao hàng dự kiến, với các tùy chọn cho giao hàng nhanh hoặc giao hàng theo khung giờ định trước.',
      'YummyVNU cam kết giao hàng nhanh chóng và đúng thời gian cam kết. Trong trường hợp có sự cố hoặc chậm trễ, đội ngũ hỗ trợ sẽ thông báo và hỗ trợ khách hàng điều chỉnh lịch trình phù hợp.',
    ],
  },
  {
    title: 'Cam kết chất lượng món ăn',
    content: [
      'YummyVNU đảm bảo các món ăn được chuẩn bị và đóng gói cẩn thận bởi các đối tác nhà hàng đã qua kiểm định.',
      'Trong trường hợp khách hàng không hài lòng về chất lượng món ăn, YummyVNU sẽ phối hợp với đối tác nhà hàng để giải quyết và đền bù nếu cần thiết.',
    ],
  },
  {
    title: 'Chính sách đổi trả và khiếu nại',
    content: [
      'YummyVNU hỗ trợ khách hàng trong các trường hợp món ăn không đúng yêu cầu hoặc có vấn đề về chất lượng.',
      'Khách hàng có thể gửi khiếu nại bằng cách liên hệ trực tiếp với đội ngũ hỗ trợ của YummyVNU trong vòng 24 giờ kể từ khi nhận hàng.',
      'Sau khi tiếp nhận khiếu nại, YummyVNU sẽ làm việc với đối tác để xác minh và đưa ra phương án giải quyết trong vòng 1-2 ngày làm việc.',
    ],
  },
  {
    title: 'Chính sách cho đối tác nhà hàng và quán ăn',
    content: [
      'YummyVNU chào đón các nhà hàng và quán ăn tại Làng đại học Thủ Đức hợp tác để mang đến nhiều lựa chọn món ăn cho khách hàng.',
      'Các đối tác sẽ nhận được hỗ trợ từ YummyVNU trong quản lý đơn hàng, dịch vụ khách hàng, và các chương trình quảng bá đặc biệt.',
      'YummyVNU yêu cầu các đối tác cam kết đảm bảo chất lượng món ăn và dịch vụ, tuân thủ các quy định vệ sinh an toàn thực phẩm để duy trì uy tín và sự hài lòng của khách hàng.',
    ],
  },
  {
    title: 'Điều khoản sử dụng và trách nhiệm khách hàng',
    content: [
      'Khách hàng khi sử dụng dịch vụ của YummyVNU cần cung cấp thông tin chính xác để đảm bảo quá trình giao hàng và thanh toán diễn ra thuận lợi.',
      'Khách hàng có trách nhiệm tuân thủ các quy định và điều khoản của YummyVNU, tránh các hành vi gian lận hoặc lạm dụng dịch vụ.',
      'YummyVNU có quyền từ chối cung cấp dịch vụ hoặc chấm dứt hợp tác với khách hàng nếu phát hiện vi phạm các điều khoản hoặc có hành vi không đúng mực.',
    ],
  },
]

const OperatingPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>YummyVNU - Chính sách hoạt động</title>
        <meta
          name="description"
          content="Chính sách hoạt động của YummyVNU - nền tảng đặt đồ ăn trực tuyến tại làng đại học thành phố Hồ Chí Mình."
        />
        <meta
          name="keywords"
          content="YummyVNU, chính sách, đặt đồ ăn, giao hàng, làng đại học"
        />
        <meta name="author" content="YummyVNU Team" />
        <meta property="og:title" content="YummyVNU - Chính sách hoạt động" />
        <meta
          property="og:description"
          content="YummyVNU cung cấp dịch vụ đặt món an toàn và tiện lợi."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="py-20 px-10 flex justify-center items-center">
        <div>
          <h1 className="text-[30px] sm:text-[60px] font-bold text-primary uppercase text-center">
            CHÍNH SÁCH HOẠT ĐỘNG
          </h1>
          <div className="max-w-[1150px] mt-10">
            <p className="text-[20px] pl-5 font-light">
              Chào mừng quý khách đến với YummyVNU - nền tảng đặt đồ ăn trực tuyến phục vụ
              tại Làng đại học Thủ Đức. Chúng tôi cam kết cung cấp dịch vụ an toàn, đảm
              bảo chất lượng món ăn.
            </p>
            <ol className="list-decimal pl-5">
              {sections.map((section, index) => (
                <li key={index} className="mt-5 text-[20px] font-bold">
                  <h2 className="text-[22px] font-bold">{section.title}</h2>
                  <ul className="list-disc pl-5 font-light">
                    {section.content.map((item, subIndex) => (
                      <li key={subIndex}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div className="mt-10 text-[25px] font-bold text-center">
              Cảm ơn quý khách đã tin tưởng{' '}
              <strong className="text-secondary">YummyVNU</strong>. Chúng tôi luôn nỗ lực
              để mang đến trải nghiệm dịch vụ tốt nhất.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OperatingPolicy
