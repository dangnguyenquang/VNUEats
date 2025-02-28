import * as React from 'react'

interface Section {
  title: string
  content: string[]
}

const sections: Section[] = [
  {
    title: 'Phạm vi hoạt động',
    content: [
      'Yummy hiện chỉ phục vụ tại khu vực TP. Hồ Chí Minh, với mạng lưới các nhà hàng và quán ăn uy tín. Chúng tôi liên tục mở rộng mạng lưới đối tác và khu vực phục vụ để mang lại trải nghiệm đa dạng hơn cho khách hàng.',
    ],
  },
  {
    title: 'Quy trình đặt món và xác nhận đơn hàng',
    content: [
      'Khách hàng có thể dễ dàng truy cập Yummy qua website, lựa chọn món ăn từ danh sách phong phú của các quán ăn và nhà hàng.',
      'Mỗi đơn hàng sẽ được xác nhận ngay sau khi nhà hàng hoặc quán ăn xác nhận đơn hàng và khách hàng có thể theo dõi trạng thái đơn hàng trực tiếp qua tài khoản cá nhân trên Yummy.',
    ],
  },
  {
    title: 'Phí giao hàng và thời gian giao hàng',
    content: [
      'Phí giao hàng được tính dựa trên khoảng cách và thời gian giao hàng dự kiến, với các tùy chọn cho giao hàng nhanh hoặc giao hàng theo khung giờ định trước.',
      'Yummy cam kết giao hàng nhanh chóng và đúng thời gian cam kết. Trong trường hợp có sự cố hoặc chậm trễ, đội ngũ hỗ trợ sẽ thông báo và hỗ trợ khách hàng điều chỉnh lịch trình phù hợp.',
    ],
  },
  {
    title: 'Cam kết chất lượng món ăn',
    content: [
      'Yummy đảm bảo các món ăn được chuẩn bị và đóng gói cẩn thận bởi các đối tác nhà hàng đã qua kiểm định.',
      'Trong trường hợp khách hàng không hài lòng về chất lượng món ăn, Yummy sẽ phối hợp với đối tác nhà hàng để giải quyết và đền bù nếu cần thiết.',
    ],
  },
  {
    title: 'Chính sách đổi trả và khiếu nại',
    content: [
      'Yummy hỗ trợ khách hàng trong các trường hợp món ăn không đúng yêu cầu hoặc có vấn đề về chất lượng.',
      'Khách hàng có thể gửi khiếu nại bằng cách liên hệ trực tiếp với đội ngũ hỗ trợ của Yummy trong vòng 24 giờ kể từ khi nhận hàng.',
      'Sau khi tiếp nhận khiếu nại, Yummy sẽ làm việc với đối tác để xác minh và đưa ra phương án giải quyết trong vòng 1-2 ngày làm việc.',
    ],
  },
  {
    title: 'Chính sách cho đối tác nhà hàng và quán ăn',
    content: [
      'Yummy chào đón các nhà hàng và quán ăn tại TP. Hồ Chí Minh hợp tác để mang đến nhiều lựa chọn món ăn cho khách hàng.',
      'Các đối tác sẽ nhận được hỗ trợ từ Yummy trong quản lý đơn hàng, dịch vụ khách hàng, và các chương trình quảng bá đặc biệt.',
      'Yummy yêu cầu các đối tác cam kết đảm bảo chất lượng món ăn và dịch vụ, tuân thủ các quy định vệ sinh an toàn thực phẩm để duy trì uy tín và sự hài lòng của khách hàng.',
    ],
  },
  {
    title: 'Điều khoản sử dụng và trách nhiệm khách hàng',
    content: [
      'Khách hàng khi sử dụng dịch vụ của Yummy cần cung cấp thông tin chính xác để đảm bảo quá trình giao hàng và thanh toán diễn ra thuận lợi.',
      'Khách hàng có trách nhiệm tuân thủ các quy định và điều khoản của Yummy, tránh các hành vi gian lận hoặc lạm dụng dịch vụ.',
      'Yummy có quyền từ chối cung cấp dịch vụ hoặc chấm dứt hợp tác với khách hàng nếu phát hiện vi phạm các điều khoản hoặc có hành vi không đúng mực.',
    ],
  },
]

const OperatingPolicy: React.FC = () => {
  return (
    <div className="py-20 flex justify-center items-center">
      <div>
        <h1 className="text-[60px] font-bold text-red-800 uppercase text-center">
          CHÍNH SÁCH HOẠT ĐỘNG
        </h1>
        <div className="max-w-[1150px] mt-10">
          <p className="text-[20px] pl-5 font-light">
            Chào mừng quý khách đến với Yummy - nền tảng đặt đồ ăn trực tuyến phục vụ
            nhanh chóng và tiện lợi tại TP. Hồ Chí Minh. Chúng tôi cam kết cung cấp dịch
            vụ an toàn, đảm bảo chất lượng món ăn và đáp ứng nhu cầu đa dạng của khách
            hàng.
          </p>
          <ol className="list-decimal pl-5">
            {sections.map((section, index) => (
              <li key={index} className="mt-5 text-[20px] font-bold">
                {section.title}
                <ul className="list-disc pl-5 font-light">
                  {section.content.map((item, subIndex) => (
                    <li key={subIndex}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-[25px] font-bold text-center">
            Cảm ơn quý khách hàng đã tin tưởng và đồng hành cùng{' '}
            <strong className="text-secondary text-[30px]">Yummy</strong>. Chúng tôi luôn
            nỗ lực mang đến trải nghiệm dịch vụ tốt nhất và sự hài lòng tuyệt đối cho từng
            khách hàng tại TP. Hồ Chí Minh.
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatingPolicy
