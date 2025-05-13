import Head from "next/head"

const CanhLaChuaCaLiet = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Canh Lá Chua Với Cá Liệt – Hương Vị Quê Nhà Giữa Lòng Làng Đại Học",
    description:
      "Canh lá chua nấu cá liệt – món ăn dân dã, thanh mát và đậm đà hương vị miền Trung, nay đã có tại làng đại học. Một món ngon không thể bỏ qua trên hành trình ẩm thực sinh viên VNU!",
    image: "https://i.pinimg.com/736x/7f/d1/10/7fd1103e83034e6096cee3e1d52877f6.jpg",
    url: "https://vnueats.com/blog/canh-rau-chua-ca-liet",
    datePublished: "2024-05-10T00:00:00+07:00",
    dateModified: "2024-05-10T00:00:00+07:00",
    author: {
      "@type": "Organization",
      name: "VNUEats",
    },
    publisher: {
      "@type": "Organization",
      name: "VNUEats",
      logo: {
        "@type": "ImageObject",
        url: "https://vnueats.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vnueats.com/blog/canh-rau-chua-ca-liet",
    },
  }

  return (
    <>
      <Head>
        <title>Canh Rau Chua Cá Liệt – Hương Vị Quê Nhà Giữa Lòng Làng Đại Học</title>
        <link rel='canonical' href='https://vnueats.com/blog/canh-rau-chua-ca-liet' />
        <meta
          name='description'
          content='Canh lá chua nấu cá liệt – món ăn dân dã, thanh mát và đậm đà hương vị miền Trung, nay đã có tại làng đại học. Một món ngon không thể bỏ qua trên hành trình ẩm thực sinh viên VNU!'
        />
        <meta
          name='keywords'
          content='canh lá chua, cá liệt, món ăn miền Trung, vnuEats, quán ăn làng đại học, món ngon làng đại học , canh lá chua cá liệt'
        />
        <meta
          property='og:title'
          content='Canh Lá Chua Với Cá Liệt – Hương Vị Quê Nhà Giữa Lòng Làng Đại Học'
        />
        <meta
          property='og:description'
          content='Món canh dân dã mà đậm đà, chuẩn vị quê nhà – Canh lá chua nấu cá liệt, hiện đã có mặt tại làng đại học Thủ Đức.'
        />
        <meta
          property='og:image'
          content='https://i.pinimg.com/736x/7f/d1/10/7fd1103e83034e6096cee3e1d52877f6.jpg'
        />
        <meta
          property='og:url'
          content='https://vnueats.com/blog/canh-rau-chua-ca-liet'
        />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='vi_VN' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Canh Lá Chua Với Cá Liệt – Hương Vị Quê Nhà Giữa Lòng Làng Đại Học'
        />
        <meta
          name='twitter:description'
          content='Một món canh thanh mát, chuẩn vị miền Trung – Canh lá chua với cá liệt khiến bao người xa quê phải xuyến xao.'
        />
        <meta
          name='twitter:image'
          content='https://i.pinimg.com/736x/7f/d1/10/7fd1103e83034e6096cee3e1d52877f6.jpg'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div>
        <h1>Canh Rau Chua Cá Liệt – Hương Vị Quê Nhà Giữa Lòng Làng Đại Học</h1>
        <p>
          Trong những ngày oi nóng hay chỉ đơn giản là muốn tìm một món canh thanh mát, dễ
          ăn thì <strong>canh lá chua với cá liệt</strong> luôn là lựa chọn hoàn hảo cho
          nhiều người, đặc biệt là sinh viên tại <strong>Làng Đại học</strong>. Món ăn này
          không chỉ ngon mà còn gợi nhớ vị quê nhà thân thương.
        </p>
        <img
          src='https://i.pinimg.com/736x/7f/d1/10/7fd1103e83034e6096cee3e1d52877f6.jpg'
          alt='Canh lá chua cá liệt'
          className='mx-auto w-[55%] h-[400px] object-cover rounded-xl shadow-lg my-4 mb-6'
        />
        <h2>1. Canh lá chua là gì?</h2>
        <p>
          Lá chua còn được biết đến với nhiều cái tên quen thuộc như xương chua, me chua,
          hay bụp chua. Danh pháp khoa học của loại cây này là Hibiscus Surattensis, thuộc
          họ cẩm quỳ. Đây là loài cây mọc hoang dại tại nhiều vùng quê Việt Nam, đặc biệt
          phổ biến ở Miền Trung.
        </p>
        <img
          src='https://i.pinimg.com/736x/90/73/b7/9073b7c0fda4bdb3ac226089cbc46a66.jpg'
          alt='Lá chua'
          className='mx-auto w-[55%] h-[400px] object-cover rounded-xl shadow-lg my-4 mb-6'
        />
        <p>
          Lá mọc theo kiểu có phiến, chia thành nhiều chùy (phổ biến là 5 - 7 thùy). Phần
          gốc của lá tương tự như hình trái tim, phần cuối lá tương đối dài. Lá của loài
          cây này có vị chua thanh, hay được dùng như một loại rau
        </p>

        <h2>2. Cá liệt – "Người bạn đồng hành" hoàn hảo với lá sống chua</h2>
        <img
          src='https://i.pinimg.com/736x/84/07/54/840754dfd100cf16ac340961926d912b.jpg'
          alt='Cá liệt'
          className='mx-auto w-[55%] h-[400px] object-cover rounded-xl shadow-lg my-4 mb-6'
        />
        <p>
          Cá liệt là loại cá đồng nhỏ, có phần thân mỏng và thịt mềm, thường được đánh bắt
          ở các mương rạch hoặc đồng ruộng. Ở Làng Đại học Thủ Đức, bạn có thể tìm thấy cá
          liệt được bán tại các khu chợ dân sinh hoặc mang từ quê lên. Cá liệt khi luộc
          hoặc kho lạt giữ được vị ngọt nguyên bản, rất thích hợp để ăn kèm với rau sống –
          đặc biệt là lá chua sống.
        </p>
        <h2>3. Lá sống chua ăn với cá liệt – Hương vị "chạm" đến ký ức tuổi thơ</h2>
        <p>
          Không cần chế biến cầu kỳ, món lá chua sống ăn với cá liệt luộc hoặc kho nhạt
          mang đến cảm giác thanh mát, nhẹ bụng nhưng cực kỳ đưa cơm. Cách ăn đơn giản: gỡ
          thịt cá liệt, gói với lá chua tươi, chấm thêm chút nước mắm nguyên chất pha ớt –
          chua, cay, mặn, ngọt hòa quyện khiến thực khách phải xuýt xoa.
        </p>
        <p>
          Món ăn này thường được các bạn sinh viên tại Làng Đại học Thủ Đức truyền tai
          nhau, đặc biệt những bạn có gốc gác từ miền Tây. Hương vị ấy không chỉ làm dịu
          đi nỗi nhớ nhà, mà còn trở thành món ăn "signature" mỗi dịp thèm cơm quê.
        </p>

        <h2>4. Hương vị quen mà lạ giữa lòng thành phố</h2>
        <p>
          Giữa vô vàn món ăn nhanh, canh lá chua cá liệt nổi bật nhờ sự thanh mát, đậm đà
          và không gây ngán. Nước canh trong vắt, có vị chua dịu nhẹ hòa cùng mùi thơm của
          cá, rau thơm, hành lá và ớt lát, khiến ai ăn rồi cũng nhớ mãi.
        </p>
        <img
          src='https://i.pinimg.com/736x/59/a8/27/59a827117987b9bd077943551df73c94.jpg'
          alt='Cá liệt'
          className='mx-auto w-[55%] h-[400px] object-cover rounded-xl shadow-lg my-4 mb-6'
        />
        <h2>5. Vì sao bạn nên thử?</h2>
        <ul className='list-disc ml-5 space-y-2'>
          <li>Món canh thanh mát, giải nhiệt hiệu quả trong thời tiết nóng bức.</li>
          <li>Nguyên liệu tự nhiên, ít dầu mỡ – tốt cho sức khỏe.</li>
          <li>Gợi nhớ hương vị quê nhà đối với sinh viên miền Trung xa xứ.</li>
        </ul>

        <h2>6. Địa chỉ thưởng thức ở ngay Làng Đại học Thủ Đức</h2>
        <p>
          Một vài quán cơm tại khu vực Làng Đại học hiện nay đã bổ sung{" "}
          <strong>canh lá chua cá liệt </strong> vào thực đơn, như một cách đưa hương vị
          quê nhà đến gần hơn với sinh viên.
        </p>
        <ol className='list-decimal ml-10'>
          <li>
            Quán <strong>cơm cô Ba</strong>
            <ul className='list-disc ml-5'>
              <li>
                Địa chỉ:{" "}
                <address className='inline'>Ngay gần KTX khu B - DHQG TpHCM</address>
              </li>
            </ul>
          </li>
          <li>
            Quán <strong>cơm Thanh Đạm</strong>
            <ul className='list-disc ml-5'>
              <li>
                Địa chỉ:{" "}
                <address className='inline'>
                  Ngay chợ Nhân Văn - làng Đại học Thủ Đức
                </address>
              </li>
            </ul>
          </li>
        </ol>

        <h2>7. Lời Kết</h2>
        <p>
          Nếu bạn là người yêu thích những món ăn thanh mát, dễ ăn và mang đậm bản sắc quê
          hương,
          <strong> canh lá chua cá liệt</strong> chính là món bạn nên thử. Không chỉ ngon,
          món ăn còn là một lát cắt ký ức của nhiều người con miền Trung đang học tập, làm
          việc tại Sài Gòn.
        </p>

        <p>
          Hãy thử một lần và chia sẻ cảm nhận với cộng đồng ẩm thực sinh viên trên fanpage{" "}
          <a
            href='https://facebook.com/vnueats'
            className='text-blue-600 hover:underline'
          >
            vnuEats
          </a>{" "}
          và trên Intagram{" "}
          <a
            href='https://www.instagram.com/vnueats/'
            className='text-blue-600 hover:underline'
          >
            vnuEats
          </a>{" "}
          !
        </p>
      </div>
    </>
  )
}

export default CanhLaChuaCaLiet
