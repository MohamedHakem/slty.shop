import type { Metadata } from "next";
import { Noto_Sans_Arabic, Rubik } from "next/font/google";
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CSPostHogProvider } from "@/app/_analytics/provider";


const font = Rubik({ weight: ["400", "500", "600", "700"], subsets: ["arabic"] })
// const font = Noto_Sans_Arabic({ weight: ["400", "500", "600", "700"], subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "Slty.shop",
  description: "Sell anything anywhere For Free",
};

export const revalidate = 3600
export const fetchCache = 'default-cache'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const lang = "ar";
  const dir = "ltr";


  return (
    <SessionProvider session={session}>
      <CSPostHogProvider>
        <html lang={lang} dir={dir} suppressHydrationWarning={true}>
          <body className={font.className}>
            <Toaster />
            {children}
            <SpeedInsights />
          </body>
        </html>
      </CSPostHogProvider>
    </SessionProvider>
  );
}
