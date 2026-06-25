import type { Metadata } from "next";
import "./globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
// 네이버 규칙: description ≤ 80자, og:description === description
const DESC =
  "AI가 뉴스를 3줄로 요약하고, 영어회화·시험 준비까지. Teddy 앱으로 매일을 더 똑똑하게.";
const TITLE = "Teddy — AI 뉴스 요약 & 영어 학습 앱";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESC,
  applicationName: "Teddy",
  keywords: [
    "AI 뉴스 요약", "뉴스 요약 앱", "뉴스 브리핑", "속보 알림",
    "영어회화 앱", "AI 영어회화", "오픽 앱", "토익스피킹", "영어 단어 앱", "발음 평가",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE,
    siteName: "Teddy",
    type: "website",
    locale: "ko_KR",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION
      ? { "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION }
      : {},
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
