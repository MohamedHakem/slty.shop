// import { CategoriesNav } from "@/components/navigation/categories-nav";
import { ClaimShopName } from "@/components/claim-shopname";
import { Almarai, Cairo, Noto_Sans_Arabic } from "next/font/google";
import { cn } from "@/lib/utils";
// import { ContainerScroll } from "@/components/container-scroll-animation";
import { ContainerScreen } from "@/components/container-screen";
import { FadedBackgroundLogo } from "@/components/faded-background-logo";
// import { Lamp } from "@/components/lamp";
// import { motion } from 'framer-motion';
import { FcCheckmark } from "react-icons/fc";

export const dynamic = "force-static";
// export const revalidate = 3600

// const CairoFont = Cairo({ weight: ["400", "500", "600", "700", "800"], subsets: ["arabic"] })
const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })
// const NotoFont = Noto_Sans_Arabic({ weight: ["400", "500", "600", "700", "800"], subsets: ["arabic"] })

export default function Home() {

  return (
    <div dir="rtl" className="flex flex-col items-center">
      <div className="w-full h-full bg-gradient-to-b from-white via-beige to-white gap-4 px-5 md:px-0">
        {/* H1 (what it does) */}
        <div className="flex items-center justify-center h-full w-full pt-16 md:pt-20 pb-4">
          <h1 className={cn("text-[32px] md:text-[50px] text-black leading-[1.875] md:leading-relaxed font-extrabold max-w-[57rem] text-center", AlmaraiFont.className)}>
          أنشئ متجرك الالكتروني
          {/* {" "}<span className="bg-black text-white py-2 px-[10px] md:py-5 md:px-3 -rotate-1">مجاناً مدي الحياة</span>{" "} */}
          {" "}
          <span className="relative whitespace-nowrap mr-1 px-[6px]">
            <span className="absolute bg-black h-[56px] -top-2 -bottom-1 -left-2 -right-2
              md:h-[86px] md:-left-[6px] md:-top-[12px] md:bottom-0 md:-right-[6px]"></span>
            <span className="relative text-white md:text-[44px]">مجاناً مدي الحياة</span>
          </span>
          </h1>
        </div>

        {/* Subtitle (How it works) */}
        <div className="flex flex-col items-center justify-center h-full w-full pt-3 pb-4 md:pb-6 gap-6 md:gap-5">
          <p className={cn("text-base md:text-2xl text-black/80 font-semibold max-w-[39rem] text-center md:leading-[2.75rem]", AlmaraiFont.className)}>
            مع منصة
            <span className="bg-gradient-to-b from-primary/40 to-primary bg-clip-text text-center text-xl md:text-3xl font-bold text-black">
              {" "}سلتي
            </span>،
            أنشئ متجرك في
            {" "}<span className="text-black font-black">20 ثانية</span>
            ،
            واربط منتجاتك بحلول ذكيَّة وزود مبيعاتك لحد
            {/* {" "}<span className="text-white bg-primary/90 px-2 py-1 mx-1 font-black">300 %</span>{" "} */}
            {" "}<span className="text-black font-black">300 %</span>{" "}
            <span className="hidden md:inline">بسهولة</span>
          </p>

          <div className={cn("flex gap-4 text-base text-black leading-normal font-medium", AlmaraiFont.className)}>
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
        <ContainerScreen>
          <div className="flex flex-col items-center justify-center h-full w-full py-28">
            <h1 className={cn("text-5xl text-black leading-normal font-extrabold max-w-3xl text-center", AlmaraiFont.className)}>
              انشاء متجر الكتروني مجاني مدي الحياة مع منصة سلتي في 60 ثانية
            </h1>
          </div>
        </ContainerScreen>


        {/* <Lamp>
          <FadedBackgroundLogo />
        </Lamp> */}

        <FadedBackgroundLogo />

      </div>
      <div className="h-[1000px]"></div>
      {/* Dashboard Screenshot */}
      {/* Traditional Ecomm VS Slty platform (COST, TIME, FEATURES) (check shipfa.st, instatus.com, others) short similar to shipfast, not long so the features can be in the view */}
      {/* Features */}
      {/* Wall of Love */}
      {/* Marketplace as a distribution channel */}
      {/* Our Clients! */}
      {/* Templates */}
      {/* Out Partners! */}
      {/* Newsletter or some offer or section */}
      {/* FAQ */}
    </div>
  );
}
