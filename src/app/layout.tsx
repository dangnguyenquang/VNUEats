import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'vnuEats – Khám phá ẩm thực làng đại học',
  description:
    'Khám phá những quán ăn ngon, không thể bỏ lỡ tại làng Đại Học Thủ Đức. Danh sách các quán ăn nổi bật tại làng Đại Học Thủ Đức dành cho sinh viên. Ngon, rẻ, sạch – cùng vnuEats khám phá ngay!',
  keywords: [
    'ăn vặt làng đại học',
    'quán ăn giá rẻ Thủ Đức',
    'món ngon sinh viên',
    'địa điểm ăn uống vnu',
    'quán ăn ngon vnu',
    'review quán ăn sinh viên vnu',
    'đặt đồ ăn làng đại học',
    'ăn trưa làng đại học',
    'đặt đồ ăn gần đây',
    'quán ăn ngon làng đại học Thủ Đức',
    'vnu eats',
    'VNU eats',
    'vnuEats',
    'VNU Eats',
    'Khám phá ẩm thực làng đại học',
    'Khám phá ẩm thực vnu',
    'ăn vặt vnu',
  ],
  openGraph: {
    title: 'vnuEats – Khám phá ẩm thực làng đại học',
    description:
      'Khám phá những quán ăn ngon, không thể bỏ lỡ tại làng Đại Học Thủ Đức. Danh sách các quán ăn nổi bật tại làng Đại Học Thủ Đức dành cho sinh viên. Ngon, rẻ, sạch – cùng vnuEats khám phá ngay!',
    url: 'https://vnueats.com',
    images: [
      {
        url: 'https://i.pinimg.com/736x/f4/00/e6/f400e61ef9f778657b1f843a589fbe2d.jpg',
        width: 1200,
        height: 630,
        alt: 'vnuEats – Địa điểm ăn uống ngon rẻ cho sinh viên',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'vnuEats – Khám phá ẩm thực làng đại học',
    description:
      'Khám phá những quán ăn ngon, không thể bỏ lỡ tại làng Đại Học Thủ Đức. Danh sách các quán ăn nổi bật tại làng Đại Học Thủ Đức dành cho sinh viên. Ngon, rẻ, sạch – cùng vnuEats khám phá ngay!',
    images: ['https://i.pinimg.com/736x/f4/00/e6/f400e61ef9f778657b1f843a589fbe2d.jpg'],
  },
  alternates: {
    canonical: 'https://vnueats.com',
  },
  verification: {
    google: 'qWaMtk5cUkw5LEkyrIHU6nkEXKwWsP-2GYwUz2OCkqQ',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'vnuEats',
    url: 'https://vnueats.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vnueats.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Trang chủ',
          item: 'https://vnueats.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Món ăn',
          item: 'https://vnueats.com/menu',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Giới thiệu',
          item: 'https://vnueats.com/about-us',
        },
      ],
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'vnuEats',
    url: 'https://vnueats.com',
    logo: 'https://vnueats.com/favicon/favicon.ico',
    sameAs: [
      'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fvnu.eats%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2FG2jE2fXxI3NplG5iInzf0Uuq0RQzjr7cOQUkiDCjSV_p_kHNziDDw7E_aem_nswSMjhug8OKObYV4l9dzw&h=AT2RrJf0IuNGUF-dWUNY4quw-_M4u5R7CZAX25L9-jp7jIVevl2DBhUJ_9jQB4u2aEjzpZV0IzHtiu9Auv8lRYublYGaCUCN2OyXUTeM7RBeMHXXsyYd1weDsVxgLIuE90NT',
      'https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40it.inmyheart%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1w-wL_xu3Hu5muyiHY8YgGhqqbqqcTXnfx1XA2iIPkVcmbTISGDHCExyk_aem_pMx5XLtylZher_biVdG2jA&h=AT0PmJnXf8-G2cbUJEXZeG9Le-vs59EPL_rIx4Mydo2LpAt8Jv4HuRPtsP9o1vMUTbFMlk6Z6fcBG3McBs26zNf-rUwmwPwgkdJUMnt2ke3vPQA1vcToRnytFV95q9V2COqg',
      'https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40vnuEats%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2FG2jE2fXxI3NplG5iInzf0Uuq0RQzjr7cOQUkiDCjSV_p_kHNziDDw7E_aem_nswSMjhug8OKObYV4l9dzw&h=AT1PHhSpQfkl0nzf6Kh0kwumxNP4yAVBoQK20WK7BT5PlFpj_1K2pWlO8m5ioYGw_QjeD2RthN_MJGbgmt-SVL5Jjq1C1wohF8qK4UgZ9mjdvMOvV85cQ0UG5pRkDk10EGpb',
    ],
  }

  return (
    <html lang="vi">
      <head>
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  )
}
