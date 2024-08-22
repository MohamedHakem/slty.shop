import { Provider, Balancer } from 'react-wrap-balancer'
import { FcCheckmark } from "react-icons/fc";
import { Almarai } from "next/font/google";
import { cn } from "@/lib/utils";

const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })

export default function LandingSubtitle() {
  // Subtitle: How it does it
  return (
    <Provider>
    <div className="flex flex-col items-center justify-center h-full w-full py-2 gap-4 md:gap-4">
      <p className={cn("text-base md:text-2xl text-lightBlack/60 font-semibold max-w-[44rem] text-center md:leading-[2.75rem]", AlmaraiFont.className)}>
        <Balancer>
          مع منصة
          سلتي،
          {" "}      
          {/* <span className="bg-gradient-to-b from-primary/40 to-primary bg-clip-text text-center text-xl md:text-3xl font-bold text-lightBlack">
            {" "}سلتي
          </span>، */}
          أنشئ متجرك في
          {" "}<span className="md:text-lightBlack md:font-black">20</span>
          {" "} ثانية،
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
    </Provider> 
    )
}