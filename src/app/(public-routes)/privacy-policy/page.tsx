import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>YummyVNU - Chính sách bảo mật</title>
        <meta
          name="description"
          content="Chính sách bảo mật thông tin của YummyVNU, cam kết bảo vệ dữ liệu cá nhân khách hàng khi sử dụng dịch vụ."
        />
        <meta
          name="keywords"
          content="YummyVNU, bảo mật thông tin, chính sách quyền riêng tư"
        />
        <meta name="author" content="YummyVNUVNU Team" />
        <meta property="og:title" content="YummyVNUVNU - Chính sách bảo mật" />
        <meta
          property="og:description"
          content="Chính sách bảo mật thông tin của YummyVNU, cam kết bảo vệ dữ liệu cá nhân khách hàng."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="py-20 flex justify-center items-center">
        <div>
          <h1 className="text-[60px] font-bold text-primary uppercase text-center">
            CHÍNH SÁCH BẢO MẬT THÔNG TIN
          </h1>
          <p className="mb-10 text-primary font-light text-[25px] text-center">
            Ngày có hiệu lực: 01/01/2025
          </p>
          <section className="max-w-[1150px]">
            <ol className="list-decimal pl-5">
              <li className="mt-5 text-[20px] font-bold">
                Mục đích thu thập thông tin cá nhân
                <ul className="list-disc pl-5 font-light">
                  <li>Hỗ trợ đặt hàng, giao hàng và liên hệ khách hàng.</li>
                  <li>
                    Thông tin như tên, số điện thoại, địa chỉ sẽ được dùng để hoàn tất đơn
                    hàng.
                  </li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                Phạm vi sử dụng thông tin
                <ul className="list-disc pl-5 font-light">
                  <li>Thông tin chỉ sử dụng trong nội bộ YummyVNU để nâng cao dịch vụ.</li>
                  <li>
                    Có thể chia sẻ với đối tác giao hàng nhưng không tiết lộ cho bên thứ
                    ba nếu không có sự đồng ý.
                  </li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                Thời gian lưu trữ thông tin
                <ul className="list-disc pl-5 font-light">
                  <li>
                    Lưu trữ trong suốt thời gian sử dụng dịch vụ, trừ khi có yêu cầu pháp
                    lý khác.
                  </li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                Cam kết bảo mật thông tin
                <ul className="list-disc pl-5 font-light">
                  <li>Áp dụng biện pháp bảo mật để chống truy cập trái phép.</li>
                  <li>Thực hiện các biện pháp an ninh để bảo vệ thông tin cá nhân.</li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                Quyền của khách hàng
                <ul className="list-disc pl-5 font-light">
                  <li>Có quyền yêu cầu chỉnh sửa, xóa thông tin cá nhân.</li>
                  <li>Có thể từ chối nhận thông tin quảng cáo.</li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                Thay đổi chính sách
                <ul className="list-disc pl-5 font-light">
                  <li>YummyVNU có quyền thay đổi chính sách và cập nhật trên website.</li>
                </ul>
              </li>
            </ol>
            <p className="mt-10 text-[25px] font-bold text-center">
              Cảm ơn quý khách đã tin tưởng{' '}
              <strong className="text-secondary text-[30px]">YummyVNU</strong>.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
