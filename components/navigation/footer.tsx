"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname()
  const isItem = pathname.includes("/item/")

  return (
    <div dir="rtl" className={`w-full border-t border-primaryBorder p-4 md:mb-10 m-auto mb-${isItem ? "40" : "20"}`}>
      <div className="flex justify-center items-center gap-4">
        <Link href="/about">عنا</Link>
        {" - "}
        <Link href="/contact-us">تواصل معنا</Link>
      </div>
    </div>
  )
}