"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname()
  const isItem = pathname.includes("/item/")

  return (
    <div dir="rtl" className={`w-full border-t border-primaryBorder p-4 mb-${isItem ? "40" : "20"} md:mb-10`}>
      <div className="flex justify-center items-center gap-4">
        <Link prefetch={false} href="/about">عنا</Link>
        {" - "}
        <Link prefetch={false} href="/contact-us">تواصل معنا</Link>
      </div>
    </div>
  )
}