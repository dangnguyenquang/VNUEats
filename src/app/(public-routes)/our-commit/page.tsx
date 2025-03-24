import Head from 'next/head'

const OurCommit = () => {
  return (
    <>
      <Head>
        <title>vnuEats - Cam kết của Yummy</title>
        <meta
          name="description"
          content="Yummy cam kết mang đến món ăn chất lượng, giá cả hợp lý và giao hàng nhanh chóng."
        />
        <meta
          name="keywords"
          content="Yummy, đặt món ăn, giao hàng nhanh, thực phẩm chất lượng"
        />
        <meta name="author" content="vnuEats Team" />
        <meta property="og:title" content="vnuEats - Cam kết của Yummy" />
        <meta
          property="og:description"
          content="Yummy cam kết mang đến món ăn chất lượng, giá cả hợp lý và giao hàng nhanh chóng."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vnueats.com/our-commit" />
      </Head>
      <section className="py-20 flex justify-center items-center">
        <div className='px-10'>
          <h1 className="text-[40px] sm:text-[60px] font-bold text-primary  text-center">
            CAM KẾT CỦA vnuEats
          </h1>
          <p className="mb-10 text-primary font-medium text-[20px] sm:text-[25px] text-center">
            Chọn vnuEats - Chọn Trải Nghiệm Tốt Nhất
          </p>
          <div className="max-w-[1150px]">
            <p className="text-[20px] font-light">
              Tại vnuEats, chúng tôi cam kết mang đến trải nghiệm đặt món tốt nhất với
              chất lượng đảm bảo, giá cả hợp lý và giao hàng nhanh chóng.
            </p>
            <ol className="list-decimal pl-5">
              <li className="mt-5 text-[20px] font-bold">
                <h2>Chất lượng món ăn</h2>
                <p className="font-light">
                  Món ăn được chọn từ các nhà hàng uy tín, đảm bảo vệ sinh an toàn thực
                  phẩm.
                </p>
                <ul className="list-disc pl-10">
                  <li className="font-light">Nguyên liệu tươi ngon, an toàn.</li>
                  <li className="font-light">Món ăn được đóng gói cẩn thận.</li>
                  <li className="font-light">Đa dạng thực đơn từ các quán ăn uy tín.</li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                <h2>Giá cả hợp lý</h2>
                <p className="font-light">
                  Minh bạch giá cả, không có phí ẩn, ưu đãi hấp dẫn.
                </p>
                <ul className="list-disc pl-10">
                  <li className="font-light">Không có phí ẩn, rõ ràng minh bạch.</li>
                  <li className="font-light">Khuyến mãi thường xuyên.</li>
                  <li className="font-light">Ưu đãi cho nhóm đặt món lớn.</li>
                </ul>
              </li>
              <li className="mt-5 text-[20px] font-bold">
                <h2>Thời gian giao hàng nhanh chóng</h2>
                <p className="font-light">Đảm bảo giao hàng nhanh chóng và đúng giờ.</p>
                <ul className="list-disc pl-10">
                  <li className="font-light">
                    Hợp tác với các đối tác giao hàng chuyên nghiệp.
                  </li>
                  <li className="font-light">
                    Món ăn đến tay khách hàng đúng thời gian cam kết.
                  </li>
                </ul>
              </li>
            </ol>
            <p className="text-center mt-10 text-[20px] sm:text-[25px] font-bold">
              Với tất cả những cam kết trên,{' '}
              <strong className="text-secondary text-[30px]">vnuEats</strong> luôn là lựa
              chọn đáng tin cậy cho bữa ăn của bạn!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurCommit
