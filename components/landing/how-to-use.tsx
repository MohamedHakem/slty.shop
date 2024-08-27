import Image from "next/image"
import { Almarai } from "next/font/google";

import HowToStep1 from '@/public/assets/homepage/step1-signup-and-choose-your-domain.svg'
import HowToStep2 from '@/public/assets/homepage/step2-store.svg'
import HowToStep3 from '@/public/assets/homepage/step3-share-and-start-selling.svg'

const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })

export default function HowToUse() {
  return (
    <div className={`h-full w-full flex flex-col gap-32 py-20 md:py-32 bg-grayBg ${AlmaraiFont.className}`}>
      <div className="flex flex-col items-center justify-center gap-10 md:gap-20 w-full">
        <h1 className="text-3xl text-white font-bold text-center px-4 md:text-4xl">
          طريقة إنشاء متجرك الالكتروني مجانا مع سلتي
        </h1>
        <div className="flex flex-col gap-16 md:flex-row justify-between w-full xl:w-[1152px] max-w-screen-xl px-8 md:px-4">
          <div>
            <div>
              <Image
                src={HowToStep1}
                alt="Create your shop for free forever in 20 seconds with Slty.shop"
                className="relative z-10 ml-[10px] w-full lg:max-w-[1023px] -scale-x-100
              md:ml-0 overflow-hidden max-w-[100%]"
              />
              <p className="text-gray-400 text-xl md:text-2xl p-2">خطوة 1</p>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold my-2 md:my-4">
              سجل في منصة سلتي في 10 ثواني
            </h3>
            <p className="text-gray-300 text-lg md:text-xl">
              احجز اسم دومين مجاني مناسب لأسم متجرك واستكمل بيانات حسابك في ثواني لتبدأ .
            </p>
          </div>
          <div>
            <div>
              <Image
                src={HowToStep2}
                alt="Create your shop for free forever in 20 seconds with Slty.shop"
                className="relative z-10 ml-[10px] w-full lg:max-w-[1023px] -scale-x-100
              md:ml-0 overflow-hidden max-w-[100%]"
              />
              <p className="text-gray-400 text-xl md:text-2xl p-2">خطوة 2</p>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold my-2 md:my-4">
              أضف منتجات متجرك الإلكتروني
            </h3>
            <p className="text-gray-300 text-lg md:text-xl">
              خلي متجرك علي ذوقك وأضف منتجاتك ويمكنك إدارة المخزون والمزيد
            </p>
          </div>
          <div>
            <div>
              <Image
                src={HowToStep3}
                alt="Create your shop for free forever in 20 seconds with Slty.shop"
                className="relative z-10 ml-[10px] w-full lg:max-w-[1023px] -scale-x-100
              md:ml-0 overflow-hidden max-w-[100%]"
              />
              <p className="text-gray-400 text-xl md:text-2xl p-2">خطوة 3</p>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold my-2 md:my-4">
              شارك متجرك مع العالم وابدأ البيع مجانا
            </h3>
            <p className="text-gray-300 text-lg md:text-xl">
              متجرك جاهز لإستقبال الطلبات! أنشر متجرك علي حساباتك عالسوشيال ميديا وابدأ البيع فورا.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}