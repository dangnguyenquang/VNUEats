import Head from "next/head"

const CaChuoiChien = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Cá Chuối Chiên – Miên Mang Vị Giác",
    description:
      "Hướng dẫn cách làm cá chuối chiên giòn rụm thơm ngon tại nhà, gợi nhớ hương vị quê hương. Công thức dễ làm, nguyên liệu đơn giản, vị đậm đà, giòn ngoài mềm trong.",
    image: "https://www.vnueats.com/images/ca-chuoi-chien.jpg",
    url: "https://vnueats.com/blog/ca-chuoi-chien",
    datePublished: "2024-05-12T00:00:00+07:00",
    dateModified: "2024-05-12T00:00:00+07:00",
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
      "@id": "https://vnueats.com/blog/ca-chuoi-chien",
    },
  }

  return (
    <>
      <Head>
        <title>Cá Chuối Chiên – Miên Mang Vị Giác | VNUEats</title>
        <meta
          name='description'
          content='Cá chuối chiên giòn rụm, thơm ngon dễ làm tại nhà. Hướng dẫn công thức chi tiết, vị mặn ngọt hài hòa gợi nhớ hương quê.'
        />
        <meta
          name='keywords'
          content='cá chuối chiên, cá lóc chiên, món ngon Việt Nam, món chiên giòn, đặc sản quê hương, món ăn dân dã'
        />
        <link rel='canonical' href='https://vnueats.com/blog/ca-chuoi-chien' />

        {/* Open Graph */}
        <meta property='og:title' content='Cá Chuối Chiên – Miên Mang Vị Giác' />
        <meta
          property='og:description'
          content='Cá chuối chiên giòn rụm, thơm ngon dễ làm tại nhà. Hướng dẫn công thức chi tiết, vị mặn ngọt hài hòa gợi nhớ hương quê.'
        />
        <meta
          property='og:image'
          content='https://www.vnueats.com/images/ca-chuoi-chien.jpg'
        />
        <meta property='og:url' content='https://vnueats.com/blog/ca-chuoi-chien' />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='vi_VN' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Cá Chuối Chiên – Miên Mang Vị Giác' />
        <meta
          name='twitter:description'
          content='Cá chuối chiên giòn rụm, thơm ngon dễ làm tại nhà. Hướng dẫn công thức chi tiết, vị mặn ngọt hài hòa gợi nhớ hương quê.'
        />
        <meta
          name='twitter:image'
          content='https://www.vnueats.com/images/ca-chuoi-chien.jpg'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main style={{ maxWidth: "800px", margin: "auto", padding: "1rem" }}>
        <h1>🐟 Cá Chuối Chiên – Miên Mang Vị Giác</h1>

        <img
          src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...'
          alt='Cá Chuối Chiên 1'
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <p>
          Cá chuối chiên, hay còn gọi là cá lóc chiên, là món ăn dân dã quen thuộc trong
          ẩm thực Việt Nam. Với lớp da giòn rụm, thịt cá mềm ngọt và hương vị đậm đà, món
          ăn này không chỉ hấp dẫn mà còn gợi nhớ hương vị quê nhà.
        </p>

        <h2>🧂 Nguyên Liệu</h2>
        <ul>
          <li>1 con cá chuối (khoảng 1–1.2kg)</li>
          <li>1 muỗng canh nước mắm</li>
          <li>1/2 muỗng cà phê tiêu</li>
          <li>1 muỗng cà phê bột ngọt</li>
          <li>1 muỗng cà phê tỏi băm</li>
          <li>1 muỗng cà phê hành tím băm</li>
          <li>Dầu ăn</li>
        </ul>

        <h2>👩‍🍳 Cách Làm Cá Chuối Chiên Giòn</h2>
        <ol>
          <li>
            <strong>Sơ Chế Cá:</strong> Làm sạch cá, bỏ ruột, đánh vảy và rửa sạch với
            nước muối loãng để khử mùi tanh.
          </li>
          <li>
            <strong>Ướp Cá:</strong> Ướp cá với nước mắm, tiêu, bột ngọt, tỏi và hành tím
            trong khoảng 30 phút để cá thấm gia vị.
          </li>
          <li>
            <strong>Chiên Cá:</strong> Đun nóng dầu ăn trong chảo, cho cá vào chiên với
            lửa vừa. Chiên đến khi cá vàng đều hai mặt và da giòn rụm.
          </li>
        </ol>

        <img
          src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...'
          alt='Cá Chuối Chiên 2'
          style={{ width: "100%", marginTop: "1rem" }}
        />

        <h2>🍽️ Thưởng Thức</h2>
        <p>
          Cá chuối chiên ngon nhất khi ăn nóng, kèm với cơm trắng và nước mắm chua ngọt
          hoặc mắm me. Bạn cũng có thể cuốn cá với bánh tráng, rau sống và bún để tạo
          thành món cuốn hấp dẫn.
        </p>

        <h2>📌 Mẹo Nhỏ</h2>
        <ul>
          <li>
            Để cá không bị dính chảo, hãy đảm bảo chảo và dầu thật nóng trước khi cho cá
            vào.
          </li>
          <li>Không nên lật cá quá nhiều lần khi chiên để tránh làm vỡ cá.</li>
        </ul>

        <h2>📣 Theo Dõi VNUEats</h2>
        <ul>
          <li>
            🌐 Website: <a href='https://vnueats.com/'>https://vnueats.com</a>
          </li>
          <li>
            📝 Blog: <a href='https://vnueats.com/blog/'>https://vnueats.com/blog</a>
          </li>
        </ul>
      </main>
    </>
  )
}

export default CaChuoiChien
