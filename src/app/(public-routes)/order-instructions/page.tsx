import Head from 'next/head'

export default function OrderInstructions() {
  return (
    <>
      <Head>
        <title>YummyVNU - Hướng dẫn đặt món</title>
        <meta
          name="description"
          content="Hướng dẫn chi tiết cách đặt món trên YummyVNU - Nhanh chóng, tiện lợi và dễ dàng."
        />
        <meta
          name="keywords"
          content="đặt món, YummyVNU, hướng dẫn đặt hàng, đặt món online, giao đồ ăn"
        />
        <meta name="author" content="YummyVNU Team" />
        <meta property="og:title" content="YummyVNU - Hướng dẫn đặt món" />
        <meta
          property="og:description"
          content="Hướng dẫn chi tiết cách đặt món trên YummyVNU - Nhanh chóng, tiện lợi và dễ dàng."
        />
        {/* <meta property="og:image" content="/images/yummy-contact.jpg" /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://yummy.vn/lien-he" /> */}
      </Head>
      <div className="py-20 flex justify-center items-center">
        <div className="max-w-[1150px] px-5">
          <h1 className="text-[60px] font-bold text-primary uppercase text-center">
            HƯỚNG DẪN ĐẶT MÓN
          </h1>
          <section className="mt-10 text-[20px] font-light">
            <p>
              Chào mừng bạn đến với <strong>YummyVNU</strong>! Chúng tôi luôn mong muốn
              mang lại trải nghiệm đặt món ăn trực tuyến nhanh chóng và tiện lợi. Dưới đây
              là các bước hướng dẫn chi tiết giúp bạn đặt món trên YummyVNU một cách dễ
              dàng:
            </p>
          </section>
          <section>
            <ol className="list-decimal pl-5">
              <article>
                <h2 className="mt-5 text-[25px] font-bold">
                  1. Đăng nhập hoặc Đăng ký tài khoản
                </h2>
                <p className="font-light text-[20px]">
                  <strong className="text-primary font-bold">Lưu ý:</strong> Để sử dụng
                  YummyVNU đặt món ăn, bạn cần có tài khoản.
                </p>
                <ul className="list-disc pl-5 font-light">
                  <li className="font-light text-[20px]">Truy cập website YummyVNU.</li>
                  <li className="font-light text-[20px]">
                    Chọn Đăng nhập nếu đã có tài khoản, hoặc Đăng ký nếu bạn là người dùng
                    mới.
                  </li>
                  <li className="font-light text-[20px]">
                    Điền thông tin gồm họ tên, số điện thoại và email để hoàn tất đăng ký.
                  </li>
                </ul>
              </article>
              <article>
                <h2 className="mt-5 text-[25px] font-bold">
                  2. Tìm kiếm món ăn và quán ăn
                </h2>
                <p className="font-light text-[20px]">
                  Bạn có thể tìm món ăn hoặc quán ăn qua thanh tìm kiếm hoặc các gợi ý
                  trên trang chủ.
                </p>
                <ul className="list-disc pl-5 font-light">
                  <li className="font-light text-[20px]">
                    Chọn tìm kiếm theo quán hoặc theo món ăn.
                  </li>
                  <li className="font-light text-[20px]">
                    Dùng bộ lọc trên trang “Món ăn” để tìm quán phù hợp.
                  </li>
                </ul>
              </article>
              <article>
                <h2 className="mt-5 text-[25px] font-bold">3. Thêm món vào giỏ hàng</h2>
                <p className="font-light text-[20px]">
                  Bạn chỉ có thể thêm món vào giỏ hàng trong trang chi tiết của từng quán
                  ăn.
                </p>
                <p className="font-light text-[20px]">
                  <strong className="text-primary font-bold">Lưu ý:</strong> Dữ liệu giỏ
                  hàng không được lưu nếu bạn rời khỏi trang chi tiết của quán.
                </p>
              </article>
              <article>
                <h2 className="mt-5 text-[25px] font-bold">4. Hoàn tất đặt hàng</h2>
                <ul className="list-disc pl-5 font-light">
                  <li className="font-light text-[20px]">
                    Kiểm tra giỏ hàng trong trang chi tiết quán ăn.
                  </li>
                  <li className="font-light text-[20px]">
                    Nhấn nút “Đặt món” để gửi đơn hàng đến quán ăn.
                  </li>
                  <li className="font-light text-[20px]">
                    Chờ xác nhận từ quán ăn trước khi đơn hàng được giao.
                  </li>
                </ul>
              </article>
              <article>
                <h2 className="mt-5 text-[25px] font-bold">5. Theo dõi đơn hàng</h2>
                <p className="font-light text-[20px]">
                  Bạn có thể kiểm tra trạng thái đơn hàng trong mục “Lịch sử mua hàng”.
                </p>
              </article>
              <article>
                <h2 className="mt-5 text-[25px] font-bold">6. Nhận hàng và thanh toán</h2>
                <p className="font-light text-[20px]">
                  Khi nhận hàng, vui lòng thanh toán trực tiếp với người giao hàng.
                </p>
              </article>
              <article>
                <h2 className="mt-5 text-[25px] font-bold">7. Đánh giá và phản hồi</h2>
                <p className="font-light text-[20px]">
                  Hãy để lại đánh giá sau khi nhận hàng để giúp YummyVNU cải thiện chất
                  lượng dịch vụ.
                </p>
              </article>
            </ol>
          </section>
          <section className="mt-10 text-[25px] font-bold text-center">
            <p>
              <strong className="text-secondary text-[30px]">YummyVNU</strong> hy vọng
              hướng dẫn này giúp bạn dễ dàng đặt món và có trải nghiệm hài lòng. Chúc bạn
              có những bữa ăn ngon miệng và tiện lợi với{' '}
              <strong className="text-secondary text-[30px]">YummyVNU</strong>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
