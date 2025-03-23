import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
  title: 'VNUEats – Khám phá ẩm thực làng đại học',
  description:
    'Khám phá những quán ăn ngon, không thể bỏ lỡ tại làng Đại Học Thủ Đức. Danh sách các quán ăn nổi bật tại làng Đại Học Thủ Đức dành cho sinh viên. Ngon, rẻ, sạch – cùng VNUEats khám phá ngay!',
  keywords: [
    'ăn vặt làng đại học',
    'ẩm thực sinh viên',
    'quán ăn giá rẻ Thủ Đức',
    'món ngon sinh viên',
    'địa điểm ăn uống',
    'ẩm thực đường phố',
    'review quán ăn sinh viên',
    'đặt đồ ăn làng đại học',
    'ăn trưa làng đại học',
    'đặt đồ ăn gần đây',
    'quán ăn ngon làng đại học Thủ Đức',
  ],
  openGraph: {
    title: 'VNUEats – Khám phá ẩm thực làng đại học',
    description:
      'Khám phá những quán ăn ngon, không thể bỏ lỡ tại làng Đại Học Thủ Đức. Danh sách các quán ăn nổi bật tại làng Đại Học Thủ Đức dành cho sinh viên. Ngon, rẻ, sạch – cùng VNUEats khám phá ngay!',
    url: 'https://vnueats.com',
    images: [
      {
        url: 'https://i.pinimg.com/736x/f4/00/e6/f400e61ef9f778657b1f843a589fbe2d.jpg',
        width: 1200,
        height: 630,
        alt: 'VNUEats – Địa điểm ăn uống ngon rẻ cho sinh viên',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNUEats – Khám phá ẩm thực làng đại học',
    description:
      'Khám phá những quán ăn ngon, không thể bỏ lỡ tại làng Đại Học Thủ Đức. Danh sách các quán ăn nổi bật tại làng Đại Học Thủ Đức dành cho sinh viên. Ngon, rẻ, sạch – cùng VNUEats khám phá ngay!',
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
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/favicon-96x96',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
