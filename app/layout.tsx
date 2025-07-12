import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "바이브코딩 스터디 - PM의 손끝으로 MVP를 만들다",
  description: "코딩 없이 직접 개발하는 4주 실습 스터디. Firebase, Vercel, API 등을 실전으로 배워보세요.",
  keywords: "바이브코딩, 스터디, PM, 개발, Firebase, Vercel, API, MVP",
  authors: [{ name: "김민균" }],
  openGraph: {
    title: "바이브코딩 스터디",
    description: "PM의 손끝으로 MVP를 만들다 – 코딩 없이 직접 개발하는 4주 실습 스터디",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
