import { cn } from "@/lib/utils";
import { Almarai } from "next/font/google";

const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })

export default function LandingTitle() {
  // Title (what it does) 
  return (
    <div className="flex items-center justify-center h-full w-full pt-6 md:pt-14 pb-4">
      <h1 className={cn("text-[32px] md:text-[50px] text-lightBlack leading-[1.875] md:leading-relaxed font-extrabold max-w-[57rem] text-center", AlmaraiFont.className)}>
        أنشئ متجرك الالكتروني
        {" "}
        <span className="relative whitespace-nowrap mr-1 px-[6px]">
          <span className="absolute bg-lightBlack h-[56px] -top-2 -bottom-1 -left-2 -right-2
              md:h-[86px] md:-left-[6px] md:-top-[12px] md:bottom-0 md:-right-[6px]"></span>
          <span className="relative text-white md:text-[44px]">مجاناً مدي الحياة</span>
        </span>
      </h1>
    </div>
  )
}