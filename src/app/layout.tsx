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

  return (
    <html lang="en">
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
