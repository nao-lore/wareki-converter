import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "和暦西暦変換ツール - 年齢早見表付き | wareki",
  description:
    "和暦と西暦をかんたん変換。令和・平成・昭和・大正・明治に対応。年齢早見表・干支表示・履歴書用フォーマット付き。無料で使えるオンライン変換ツール。",
  keywords: [
    "和暦 西暦 変換",
    "令和 西暦",
    "年齢早見表",
    "和暦 変換",
    "令和 何年",
    "西暦 和暦",
    "元号 変換",
    "履歴書 和暦",
    "干支 早見表",
  ],
  openGraph: {
    title: "和暦西暦変換ツール - 年齢早見表付き",
    description:
      "和暦と西暦をかんたん変換。令和・平成・昭和・大正・明治対応。年齢早見表・干支・履歴書フォーマット付き。",
    locale: "ja_JP",
    type: "website",
    url: "https://wareki.vercel.app",
    siteName: "wareki - 和暦西暦変換ツール",
  },
  twitter: {
    card: "summary_large_image",
    title: "和暦西暦変換ツール - 年齢早見表付き",
    description:
      "和暦と西暦をかんたん変換。令和・平成・昭和・大正・明治対応。年齢早見表・干支・履歴書フォーマット付き。",
  },
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  alternates: {
    canonical: "https://wareki.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "和暦西暦変換ツール",
              description:
                "和暦と西暦をかんたん変換できるオンラインツール。令和・平成・昭和・大正・明治に対応。年齢早見表・干支表示・履歴書用フォーマット付き。",
              url: "https://wareki.vercel.app",
              applicationCategory: "UtilityApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
              inLanguage: "ja",
              browserRequirements: "Requires JavaScript",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
