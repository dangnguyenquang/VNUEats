import React from 'react'
import Head from 'next/head'

export default function ContactInstructions() {
  return (
    <>
      <Head>
        <title>Hướng Dẫn Liên Hệ | Yummy</title>
        <meta
          name="description"
          content="Hướng dẫn liên hệ với Yummy qua số điện thoại, email, và quy trình xử lý khiếu nại. Đội ngũ hỗ trợ sẵn sàng phục vụ quý khách."
        />
        <meta name="keywords" content="Yummy, liên hệ, hỗ trợ khách hàng, số điện thoại Yummy, email Yummy" />
        <meta name="author" content="Yummy Team" />
        <meta property="og:title" content="Hướng Dẫn Liên Hệ | Yummy" />
        <meta
          property="og:description"
          content="Hướng dẫn liên hệ với Yummy qua số điện thoại, email, và quy trình xử lý khiếu nại."
        />
        <meta property="og:image" content="/images/yummy-contact.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yummy.vn/lien-he" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hướng Dẫn Liên Hệ | Yummy" />
        <meta
          name="twitter:description"
          content="Hướng dẫn liên hệ với Yummy qua số điện thoại, email, và quy trình xử lý khiếu nại."
        />
        <meta name="twitter:image" content="/images/yummy-contact.jpg" />
      </Head>

      <main className="py-20 flex justify-center items-center">
        <div>
          <h1 className="text-[60px] font-bold text-primary uppercase text-center">
            HƯỚNG DẪN LIÊN HỆ
          </h1>

          <section className="max-w-[1150px] mt-10">
            <p className="text-[20px] font-light">
              Chúng tôi luôn sẵn sàng hỗ trợ quý khách hàng mọi lúc, mọi nơi. Nếu quý khách cần liên
              hệ với Yummy về các vấn đề liên quan đến đơn hàng, dịch vụ hoặc bất kỳ thắc mắc nào khác, vui lòng tham khảo các phương thức dưới đây:
            </p>

            <ol className="list-decimal pl-5">
              <li className="mt-5 text-[20px] font-bold">
                <h2>Liên hệ qua tổng đài hỗ trợ</h2>
                <ul className="list-disc pl-5 font-light">
                  <li><strong>Số điện thoại:</strong> 0338963327</li>
                  <li><strong>Phí gọi:</strong> Miễn phí</li>
                  <li><strong>Hỗ trợ:</strong> Tư vấn đặt hàng, theo dõi tình trạng đơn hàng, hỗ trợ khiếu nại và giải quyết các vấn đề phát sinh.</li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                <h2>Liên hệ qua email</h2>
                <ul className="list-disc pl-5 font-light">
                  <li><strong>Email hỗ trợ khách hàng:</strong> <a href="mailto:yummy2024@gmail.com" className="text-blue-600">yummy2024@gmail.com</a></li>
                  <li><strong>Thời gian phản hồi:</strong> Từ 1-2 ngày làm việc</li>
                  <li>
                    <strong>Nội dung cần cung cấp:</strong> Họ tên, số điện thoại liên hệ, mã đơn hàng, và vấn đề cần hỗ trợ chi tiết.
                  </li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                <h2>Quy trình xử lý khiếu nại</h2>
                <ul className="list-disc pl-5 font-light">
                  <li><strong>Bước 1:</strong> Quý khách liên hệ với Yummy qua tổng đài hoặc email.</li>
                  <li><strong>Bước 2:</strong> Đội ngũ hỗ trợ tiếp nhận và xác minh thông tin.</li>
                  <li><strong>Bước 3:</strong> Chúng tôi phản hồi trong vòng 24 - 48 giờ.</li>
                  <li><strong>Bước 4:</strong> Nếu khiếu nại được giải quyết, chúng tôi sẽ cập nhật kết quả qua phương thức liên hệ đã cung cấp.</li>
                </ul>
              </li>
            </ol>
            <div className="mt-10 text-[25px] font-bold text-center">
              Cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của{' '}
              <strong className="text-secondary text-[30px]">Yummy</strong>. Đội ngũ hỗ trợ của
              chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng quý khách!
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
