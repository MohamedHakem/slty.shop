/* eslint-disable @next/next/no-img-element */
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
import Image from "next/image";
import { Provider, Balancer } from 'react-wrap-balancer'

import HeaderImg1 from '@/public/assets/homepage/header-1.png'
import HeaderImg2 from '@/public/assets/homepage/header-2.webp'
import HeaderAdd1 from '@/public/assets/homepage/header-add-1.svg'
import HeaderAdd2 from '@/public/assets/homepage/header-add-2.png'

import HowToStep1 from '@/public/assets/homepage/step1-signup-and-choose-your-domain.svg'
import HowToStep2 from '@/public/assets/homepage/step2-store.svg'
import HowToStep3 from '@/public/assets/homepage/step3-share-and-start-selling.svg'

import FeatureCard from "@/components/landing/feature-card";
import FeatureSection from "@/components/landing/feature-section";
import { title } from "process";
// import { HeaderAdd1 } from "@/components/landing/header-add-1"

export const dynamic = "force-static";
// export const revalidate = 3600

// const CairoFont = Cairo({ weight: ["400", "500", "600", "700", "800"], subsets: ["arabic"] })
const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })
// const NotoFont = Noto_Sans_Arabic({ weight: ["400", "500", "600", "700", "800"], subsets: ["arabic"] })

const FeaturesList = [
  {
    key: "SetupCustomizationFeatures",
    title: "إعداد وتخصيص متجرك",
    description: "قم بإعداد وتخصيص متجرك بسهولة",
    features: [
      { title: "إعداد متجرك مجانا", description: "أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة وإدارة المخزون، والتسويق، بكل سهولة", bgColorHex: "#F5F5F7", marginTop: 0 },
      { title: "دومين مجاني", description: "احصل علي نطاق مجاني او أضف نطاقك بضغطة واحدة في ثواني", bgColorHex: "#F5F5F7", marginTop: 400 },
      { title: "متجرك على ذوقك", description: "نجاحك التجاري يحتاج لمظهر أنيق. اختر تصميمًا يناسب علامتك التجارية واجعل متجرك يعكس هويتك بشكل مثالي.", bgColorHex: "#F5F5F7", marginTop: -232 },
      { title: "تصميمات متوافقة مع كل الشاشات", description: "متجرك أنيق لعملائك في كل الشاشات.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "سهِّل تجربة الطلب من متجرك", description: "قلِّل خطوات إتمام الطلب في متجرك إلى النصف مع ميزة الطلب المباشر، ومكِّن عميلك من الشراء والدفع بسرعة.", bgColorHex: "#F5F5F7", marginTop: -232 },
      { title: "زيارات غير محدودة لمتجرك مجانا", description: "اعمل حملات إعلانية واستقبل زيارات لا نهائية لمتجرك مجانا", bgColorHex: "#F5F5F7", marginTop: 0 },
      { title: "إدارة المخزون الخاص بك بسهولة", description: "تحكم بكفاءة في المخزون الخاص بك من خلال أدوات متقدمة لإدارة الكميات وتوقع الاحتياجات. قم بتحسين عمليات التخزين وتجنب نفاد المخزون أو الفائض لضمان استمرارية العمل.", bgColorHex: "#F5F5F7", marginTop: 400 },
      { title: "إدارة طلبات العملاء بسهولة", description: "تابع طلبات العملاء بدقة وسرعة من خلال نظام إدارة متكامل. قم بتتبع ومعالجة الطلبات بكفاءة لضمان تجربة شراء سلسة ومرضية للعملاء.", bgColorHex: "#F5F5F7", marginTop: -232 },
      { title: "إدارة منتجاتك بكل أنواعها بسهولة", description: "قم بتنظيم وإدارة جميع منتجاتك بسهولة بغض النظر عن تنوعها. استخدم أدوات مرنة للتحكم في تفاصيل المنتج، الأسعار، والصور لتلبية احتياجات عملائك بشكل أفضل.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "يمكنك بيع أي نوع منتج حتي المنتجات الرقمية في متجرك، مجانا", description: "قم ببيع أي نوع من المنتجات بسهولة، بما في ذلك المنتجات الرقمية، دون تكاليف إضافية. افتح آفاقاً جديدة لأرباحك من خلال تقديم مجموعة متنوعة من المنتجات في متجرك.", bgColorHex: "#F5F5F7", marginTop: -232 },
      { title: "إسمح لعملاءك بالدفع بالإشتراك في خدمة أو منتجك بشكل دوري!", description: "قدّم لعملائك خيار الدفع المتكرر للاشتراك في خدماتك أو منتجاتك. عزّز الولاء وزيادة الإيرادات من خلال تمكين الدفع الدوري بسهولة وسلاسة.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "إدارة ال أب-سيل Upsell بسهولة", description: "تحكم بفعالية في استراتيجيات البيع الإضافي (Upsell) لتعزيز قيمة مشتريات العملاء. قم بتقديم عروض محسّنة تجذب انتباه العملاء الحاليين بسهولة وبدون جهد إضافي.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "إدارة الكروس-سيل Cross-Sell بسهولة", description: "نفّذ استراتيجيات البيع المتبادل (Cross-Sell) بكل سلاسة لزيادة مبيعاتك. قدّم منتجات متكاملة أو خدمات إضافية تزيد من قيمة سلة المشتريات بطريقة سهلة ومؤثرة.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "إدارة الأفتر-سيل After-Sell بسهولة", description: "حقق إيرادات إضافية من كل عميل من خلال تقديم عروض بيع محسّنة بعد إتمام الشراء. قم بزيادة المبيعات باستخدام أدوات فعّالة لعرض الترقيات والعروض المميزة بعد الشراء بنقرة واحدة.", bgColorHex: "#F5F5F7", marginTop: 168 },
      // { title: "إدارة الداون-سيل Down-Sell بسهولة", description: "خفض تكاليف البيع مع الحفاظ على رضا العملاء عبر استراتيجيات البيع المخفّض (Down-Sell). اعرض خصومات أو قدم بدائل اقتصادية للمنتجات ذات السعر المرتفع، تلبي احتياجات العملاء دون التفريط بالجودة.", bgColorHex: "#F5F5F7", marginTop: 168 },
      // { title: "إدارة الداون-سيل Down-Sell بسهولة", description: "خفض تكاليف البيع مع الحفاظ على رضا العملاء عبر استراتيجيات البيع المخفّض (Down-Sell). استخدم هذه الاستراتيجية لزيادة المبيعات من خلال تقديم بدائل اقتصادية لعملاء مترددين أو في حالات سلة المشتريات المهجورة. هذه التقنية تساعد على استعادة العملاء المحتملين وزيادة الإيرادات عن طريق تقديم خصومات أو بدائل ذات أسعار أقل دون التفريط بالجودة.", bgColorHex: "#F5F5F7", marginTop: 168 },
      // { title: "إدارة الداون-سيل Down-Sell بسهولة", description: "خفض تكاليف البيع مع الحفاظ على رضا العملاء عبر استراتيجيات البيع المخفّض (Down-Sell). استخدم هذه الاستراتيجية لزيادة المبيعات من خلال تقديم بدائل اقتصادية لعملاء مترددين أو في حالات سلة المشتريات المهجورة. هذه التقنية تساعد على استعادة العملاء المحتملين وزيادة الإيرادات من خلال تقديم خصومات أو بدائل ذات أسعار أقل، دون خسارة البيع!", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "إدارة الداون-سيل Down-Sell بسهولة", description: "استفد من استراتيجيات البيع المخفّض (Down-Sell) لزيادة المبيعات واستعادة العملاء المحتملين. قدم بدائل اقتصادية للمنتجات ذات الأسعار المرتفعة أو عروض خاصة لحالات سلة المشتريات المهجورة، لتحفيز الشراء وعدم خسارة البيع!", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "إدارة الحزم Packages بسهولة", description: "قم بتصميم وإدارة عروض الحزم (Packages) بطريقة سهلة ومتكاملة. اجمع بين المنتجات أو الخدمات لخلق عروض جذابة تلبي متطلبات العملاء المتنوعة.", bgColorHex: "#F5F5F7", marginTop: 168 },
    ],
  },
  // {
  //   key: "EcommerceFeatures",
  //   title: "أدوات التجارة الإلكترونية",
  //   description: "كل الأدوات الأساسية لتشغيل متجرك",
  //   features: [
  //     { title: "زيارات غير محدودة لمتجرك مجانا", description: "feature description 1", bgColorHex: "#F5F5F7", marginTop: 0 },
  //     { title: "إدارة المخازن الخاصة بك بسهولة", description: "feature description 2", bgColorHex: "#F5F5F7", marginTop: 400 },
  //     { title: "إدارة طلبات العملاء بسهولة", description: "feature description 3", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "إدارة منتجاتك بكل أنواعها بسهولة", description: "feature description 4", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "يمكنك بيع أي نوع منتج حتي المنتجات الرقمية في متجرك، مجانا", description: "feature description 5", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "إسمح لعملاءك بالدفع بالإشتراك في خدمة أو منتجك بشكل دوري!", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "إدارة ال أب-سيل Upsell بسهولة", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "إدارة الكروس-سيل Cross-Sell بسهولة", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "إدارة الأفتر-سيل After-Sell بسهولة", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "إدارة الداون-سيل Down-Sell بسهولة", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "إدارة الحزم Packages بسهولة", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //   ],
  // },
  {
    key: "MarketingAndCustomerExperienceFeatures",
    title: "أدوات التسويق المتقدمة",
    description: "عزز ظهور منتجاتك وضاعف مبيعاتك",
    features: [
      { title: "حسِّن ظهور موقعك في جوجل (SEO)", description: "أظهِر موقع متجرك في النتائج الأولى من جوجل عبر إضافة تحسينات الظهور على محركات البحث (SEO) مباشرة من لوحة تحكم متجرك!", bgColorHex: "#F5F5F7", marginTop: 0 },
      { title: "كوبونات تخفيض لتشجيع عملائك بالدفع", description: "شجِّع عملاءك على إتمام الشراء من متجرك عبر كوبونات تخفيض تُستبدل مباشرةً عند الطلب.", bgColorHex: "#F5F5F7", marginTop: 400 },
      { title: "زود مبيعاتك بالتسويق بالعمولة", description: "تعاقد مع مسوقين بالعمولة من اختيارك وشاركهم رابط أو كوبون خاص بكل مسوُّق يمكّنك من تتبّع مبيعاته وحساب عمولته.", bgColorHex: "#F5F5F7", marginTop: -232 },
      { title: "فعل نظام الولاء لعملائك", description: "قدِّم نقاط ولاء تلقائية لعملائك وحفِّزهم على تكرار الشراء من متجرك مقابل استبدال النقاط بمكافآت أنت تحددها.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "أنشئ حملات تسويقية بسهولة من داخل متجرك", description: "ارفع معدل زيارات متجرك وفرص وصول رسائلك الترويجية إلى شريحة عملاء أوسع عبر إطلاق حملات تسويق عبر البريد الإلكتروني ورسائل نصية SMS.", bgColorHex: "#F5F5F7", marginTop: -232 },
      { title: "عرض اشترِ واحد والثانِ مجانًا", description: "العرض المُفضّل عند الكثير! روِّج لمنتجاتك عبر عرض 1+1 مجانًا وحدِّد المنتجات المشمولة في العرض.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "تحكّم بشروط العروض", description: "حدِّد نوع كل عرض وشروطه كتحديد خصم نسبة معينة مثل 20% أو مبلغ ثابت مثل 25 ح.م على قيمة مشتريات العميل.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "تدرّج بالخصومات حسب الكمية", description: "أنشئ مجموعة خصومات في آن واحد تتدرج نسبتها تلقائيًا بناءً على كمية الطلب لكل عميل.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "خصِّص الكوبونات التسويقية", description: "شارك كل مسوُّق بالعمولة كوبون أو رابط تسويقي خاص يمكِّنك من تحديد شروط الاستخدام ونسبة العمولة.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "حلِّل بيانات متجرك", description: "تتبّع حركة زوار متجرك وأداء إعلاناتك على جوجل في تقارير دقيقة تساعدك في اتخاذ قرارات تسويقية أفضل.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "افهم عملاءك أكثر مع تسجيلات وخرائط حرارية", description: "اطّلع على تفاعل الزوار مع متجرك الإلكتروني، وراقب تحركاتهم وسلوكهم أثناء تصفّح موقعك عبر تسجيلات وخرائط حرارية.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "أرسل تنبيهات ورسائل SMS، أيميل، او إشعارات لعملائك من داخل متجرك مباشرة", description: "أرسل تحديثات حالات الطلب ورسائل تسويقية إلى عملائك عبر SMS او إيميل او إشعارات الهاتف بشكل تلقائي ومؤتمت.", bgColorHex: "#F5F5F7", marginTop: 168 },
      { title: "سهِّل التواصل مع زوار متجرك", description: "كُن على بعد نقرة واحدة من عميلك عبر إضافة أزرار قنوات التواصل المختلفة إلى صفحة متجرك.", bgColorHex: "#F5F5F7", marginTop: 168 },
      // { title: "feature 1", description: "feature description 1", bgColorHex: "#F5F5F7", marginTop: 0 },
      // { title: "feature 2", description: "feature description 2", bgColorHex: "#F5F5F7", marginTop: 400 },
      // { title: "feature 3", description: "feature description 3", bgColorHex: "#F5F5F7", marginTop: -232 }, 
      // { title: "feature 4", description: "feature description 4", bgColorHex: "#F5F5F7", marginTop: 168 },
      // { title: "feature 5", description: "feature description 5", bgColorHex: "#F5F5F7", marginTop: -232 },
      // { title: "feature 6", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
      // { title: "feature 1", description: "feature description 1", bgColorHex: "#F5F5F7", marginTop: 0 },
      // { title: "feature 2", description: "feature description 2", bgColorHex: "#F5F5F7", marginTop: 400 },
      // { title: "feature 3", description: "feature description 3", bgColorHex: "#F5F5F7", marginTop: -232 },
      // { title: "feature 4", description: "feature description 4", bgColorHex: "#F5F5F7", marginTop: 168 },
      // { title: "feature 5", description: "feature description 5", bgColorHex: "#F5F5F7", marginTop: -232 },
      // { title: "feature 6", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
    ],
  },

  // remove the 2 below

  // {
  //   key: "SellEverywhereFeatures",
  //   title: "بيع في كل مكان بتكاملات سلسة",
  //   features: [
  //     { title: "feature 1", description: "feature description 1", bgColorHex: "#F5F5F7", marginTop: 0 },
  //     { title: "feature 2", description: "feature description 2", bgColorHex: "#F5F5F7", marginTop: 400 },
  //     { title: "feature 3", description: "feature description 3", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "feature 4", description: "feature description 4", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "feature 5", description: "feature description 5", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "feature 6", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //   ],
  // },
  // {
  //   key: "PerfectShoppingUXFeatures",
  //   title: "أنشئ تجربة تسوق سلسة",
  //   description: "قم بإعداد وتخصيص متجرك بسهولة",
  //   features: [
  //     { title: "feature 1", description: "feature description 1", bgColorHex: "#F5F5F7", marginTop: 0 },
  //     { title: "feature 2", description: "feature description 2", bgColorHex: "#F5F5F7", marginTop: 400 },
  //     { title: "feature 3", description: "feature description 3", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "feature 4", description: "feature description 4", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "feature 5", description: "feature description 5", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "feature 6", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //   ],
  // },

  // Below are the features that are not yet implemented and not shown on the landing page yet

  // {
  //   key: "AnalyticsReportingFeatures",
  //   title: "التحليلات والتقارير",
  //   description: "اتخذ قرارات مبنية على البيانات",
  //   features: [
  //     { title: "feature 1", description: "feature description 1", bgColorHex: "#F5F5F7", marginTop: 0 },
  //     { title: "feature 2", description: "feature description 2", bgColorHex: "#F5F5F7", marginTop: 400 },
  //     { title: "feature 3", description: "feature description 3", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "feature 4", description: "feature description 4", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "feature 5", description: "feature description 5", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "feature 6", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //   ],
  // },
  // {
  //   key: "AdvancedFeatures",
  //   title: "عزز متجرك بخدامتنا الاحترافية",
  //   features: [
  //     { title: "feature 1", description: "feature description 1", bgColorHex: "#F5F5F7", marginTop: 0 },
  //     { title: "feature 2", description: "feature description 2", bgColorHex: "#F5F5F7", marginTop: 400 },
  //     { title: "feature 3", description: "feature description 3", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "feature 4", description: "feature description 4", bgColorHex: "#F5F5F7", marginTop: 168 },
  //     { title: "feature 5", description: "feature description 5", bgColorHex: "#F5F5F7", marginTop: -232 },
  //     { title: "feature 6", description: "feature description 6", bgColorHex: "#F5F5F7", marginTop: 168 },
  //   ],
  // },
]

export default function Home() {
  return (
    <Provider>
      <div dir="rtl" className="flex flex-col items-center">
        {/* Hero */}
        <div className="w-full h-full bg-gradient-to-b from-white via-beige to-white gap-4 md:px-0 md:pb-40">
          {/* H1 (what it does) */}
          <div className="flex items-center justify-center h-full w-full pt-16 md:pt-20 pb-4">
            <h1 className={cn("text-[32px] md:text-[50px] text-black leading-[1.875] md:leading-relaxed font-extrabold max-w-[57rem] text-center", AlmaraiFont.className)}>
              أنشئ متجرك الالكتروني
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
            <p className={cn("text-base md:text-3xl text-black/60 font-semibold max-w-[44rem] text-center md:leading-[2.75rem]", AlmaraiFont.className)}>
              <Balancer>
                مع منصة
                <span className="bg-gradient-to-b from-primary/40 to-primary bg-clip-text text-center text-xl md:text-3xl font-bold text-black">
                  {" "}سلتي
                </span>،
                أنشئ متجرك في
                {" "}<span className="text-black font-black">20 ثانية</span>
                ،
                واربط منتجاتك بحلول ذكيَّة وزود مبيعاتك لحد
                {" "}<span className="text-black font-black">300 %</span>{" "}
                <span className="hidden md:inline">بسهولة</span>
              </Balancer>
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
          {/* <ContainerScreen>
                <div className="flex flex-col items-center justify-center h-full w-full py-28">
                  <h2 className={cn("text-5xl text-black leading-normal font-extrabold max-w-3xl text-center", AlmaraiFont.className)}>
                    انشاء متجر الكتروني مجاني مدي الحياة مع منصة سلتي في 60 ثانية
                  </h2>
                </div>
              </ContainerScreen> 
          */}

          {/* <Lamp> <FadedBackgroundLogo /> </Lamp> */}

          {/* <FadedBackgroundLogo /> */}


          {/* a container section with 2 images floating one on top of the other */}
          {/* <div className="container mt-2"> */}
          <div className="w-full max-w-screen-2xl m-auto mt-6">
            <div className="relative flex items-center justify-center lg:-mt-16">
              {/* <div className="overflow-x-hidden"> */}
              <Image
                src={HeaderImg1}
                alt="Create your shop for free forever in 20 seconds with Slty.shop"
                height={1200}
                width={1200}
                className="relative z-10 ml-[10px] 
                md:ml-0 overflow-hidden max-w-[100%] 
                lg:max-w-[1023px] animate-move-up-down"
              // xl:absolute xl:top-0 xl:margin-right-[-25px]"
              />
              {/* </div> */}
              <Image
                src={HeaderAdd2}
                alt="Double your conversion rate with Slty.shop"
                height={1200}
                width={1200}
                className="absolute z-20 animate-move-down-up
                right-[4%] top-24 max-w-[30%] 
                md:right-[3%] md:top-[22%] 
                lg:right-[3%] lg:top-[23%] lg:max-w-[25dvw] 
                xl:max-w-[350px] xl:right-0 xl:-top-[5%]"
              />
              <Image
                src={HeaderAdd1}
                alt="sell all kinds of products on Slty.shop"
                height={1200}
                width={1200}
                // className="hidden md:block md:absolute left-[5%] bottom-14 z-30 max-w-[28%] md:top-[8%] lg:-top-[9%] lg:max-w-[380px] animate-move-down-up"
                className="hidden md:block md:absolute z-20 animate-move-down-up
              left-[4%] top-24 max-w-[25%] 
              md:left-[3%] md:top-[8%] 
              lg:left-[4%] lg:top-[10%] lg:max-w-[20dvw] 
              xl:max-w-[350px] xl:left-[1%] xl:-top-[2%]"
              />
            </div>

            {/* <div className="relative flex gap-12 md:gap-16 lg:gap-20 items-center justify-center -mt-4 md:-mt-[100px]">
            <Image
              src={HeaderAdd2}
              alt="Double your conversion rate with Slty.shop"
              height={1200}
              width={1200}
              className="right-[2%] top-14 z-20 max-w-[40%] md:top-[25%] lg:top-[5%] lg:max-w-[400px] animate-move-down-up"
            />
            <Image
              src={HeaderAdd1}
              alt="sell all kinds of products on Slty.shop"
              height={1200}
              width={1200}
              className="right-[2%] bottom-14 z-30 max-w-[40%] md:bottom-[25%] lg:bottom-[5%] lg:max-w-[400px] animate-move-down-up"
            />
          </div> */}
          </div>


          {/* <div className="h-full md:h-full flex items-center justify-center relative p-10 md:p-10">
          <div className="w-full relative"></div>
        </div> */}
        </div>

        {/* Dashboard Screenshot - Not Yet */}

        {/* How To Use */}
        <div className={`h-full w-full flex flex-col gap-32 py-20 md:py-32 bg-grayBg ${AlmaraiFont.className}`}>
          <div className="flex flex-col items-center justify-center gap-10 md:gap-20 w-full">
            <h1 className="text-3xl text-white font-bold text-center px-4 md:text-4xl">
              {/* <Balancer> */}
              طريقة إنشاء متجرك الالكتروني مجانا مع سلتي
              {/* </Balancer> */}
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
                  اعمل حساب جديد أو سجل دخول في Slty
                </h3>
                <p className="text-gray-300 text-lg md:text-xl">
                  {/* <Balancer> */}
                  احجز اسم دومين مجاني مناسب لأسم متجرك واستكمل بيانات حسابك في ثواني لتبدأ .
                  {/* </Balancer> */}
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
                  {/* <Balancer> */}
                  خلي متجرك علي ذوقك وأضف منتجاتك ويمكنك إدارة المخزون والمزيد
                  {/* </Balancer> */}
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
                  {/* <Balancer> */}
                  متجرك جاهز لإستقبال الطلبات! أنشر متجرك علي حساباتك عالسوشيال ميديا وابدأ البيع فورا.
                  {/* </Balancer> */}
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Features */}
        <div className="h-full w-full flex flex-col gap-32 px-4 py-20 md:py-40 bg-[#f5f5f7]">
          {/* bg-[#F9F9F9]"> */}
          {FeaturesList.map((feature, index) => (
            <FeatureSection
              key={index}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>

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
    </Provider>
  );
}
