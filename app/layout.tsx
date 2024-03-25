import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
// import { Nav } from "@/components/navigation/nav";

const font = Rubik({ weight: ["400", "500", "600", "700"], subsets: ["arabic"] })

export const metadata: Metadata = {
  title: "Slty.shop",
  description: "Sell anything anywhere For Free",
};

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
      <html lang={lang} dir={dir} suppressHydrationWarning={true}>
        <body className={font.className}>
          <Toaster />
          {/* <main className="w-full max-w-6xl min-h-screen mx-auto border-x border-primaryBorder flex flex-col relative">
            <Nav /> */}
            {children}
          {/* </main> */}
        </body>
      </html>
    </SessionProvider>
  );
}
