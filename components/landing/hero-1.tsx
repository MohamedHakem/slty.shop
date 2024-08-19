import { cn } from "@/lib/utils";
import { Provider, Balancer } from 'react-wrap-balancer'
import { Almarai } from "next/font/google";
import { FcCheckmark } from "react-icons/fc";
import { ClaimShopName } from "@/components/claim-shopname";
import HeroArtwork1 from "@/components/landing/hero-artwork-1";
import HeroArtwork2 from "./hero-artwork-2";

const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })

export default function Hero1() {
  return (
    <Provider>
      <div className="w-full h-full bg-gradient-to-b from-white via-beige to-white gap-4 md:px-0 md:pb-40">
        {/* H1 (what it does) */}
        <div className="flex items-center justify-center h-full w-full pt-16 md:pt-20 pb-4">
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

        {/* Subtitle (How it works) */}
        <div className="flex flex-col items-center justify-center h-full w-full pt-3 pb-4 md:pb-6 gap-6 md:gap-5">
          <p className={cn("text-base md:text-3xl text-lightBlack/60 font-semibold max-w-[44rem] text-center md:leading-[2.75rem]", AlmaraiFont.className)}>
            <Balancer>
              مع منصة
              <span className="bg-gradient-to-b from-primary/40 to-primary bg-clip-text text-center text-xl md:text-3xl font-bold text-lightBlack">
                {" "}سلتي
              </span>،
              أنشئ متجرك في
              {" "}<span className="text-lightBlack font-black">20 ثانية</span>
              ،
              واربط منتجاتك بحلول ذكيَّة وزود مبيعاتك لحد
              {" "}<span className="text-lightBlack font-black">300 %</span>{" "}
              <span className="hidden md:inline">بسهولة</span>
            </Balancer>
          </p>

          <div className={cn("flex gap-4 text-base text-lightBlack leading-normal font-medium", AlmaraiFont.className)}>
            <div className="hidden md:flex gap-[6px] max-w-3xl text-center justify-center items-center">
              <span className="flex rounded-full w-[20px] h-[20px] bg-green-500 items-center justify-center">
                <FcCheckmark color="#ffffff" size={12} strokeWidth={5} />
              </span>
              <p>دومين مجاني</p>
            </div>
            <div className="flex gap-[6px] max-w-3xl text-sm text-center justify-center items-center">
              <span className="flex rounded-full w-[20px] h-[20px] bg-green-500 items-center justify-center">
                <FcCheckmark color="#ffffff" size={12} strokeWidth={5} />
              </span>
              <p>30 أداة مجانية</p>
            </div>
            <div className="flex gap-[6px] max-w-3xl text-sm text-center justify-center items-center">
              <span className="flex rounded-full w-[20px] h-[20px] bg-green-500 items-center justify-center">
                <FcCheckmark color="#ffffff" size={12} strokeWidth={5} />
              </span>
              <p>لا تحتاج خبرة في البرمجة او التصميم</p>
            </div>
          </div>
        </div>
        <ClaimShopName />

        {/* <ContainerScroll > */}

        {/* <FadedBackgroundLogo /> */}

        {/* phone instead of ContainerScreen - on Mobile */}

        {/* <Lamp> <FadedBackgroundLogo /> </Lamp> */}

        {/* <FadedBackgroundLogo /> */}


        {/* a container section with 2 images floating one on top of the other */}
        {/* <HeroArtwork1 /> */}
        <HeroArtwork2 />
      </div>
    </Provider>
  )
}