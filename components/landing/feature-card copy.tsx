import Image from "next/image";
// import { cn } from "@/lib/utils";
import { Almarai } from "next/font/google";
import Balancer from "react-wrap-balancer";

const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })

export type FeatureCardProps = {
  title: string;
  description: string;
  img?: string;
  url?: string;
  bgColorHex: string;
  marginTop: number;
  width?: number;
}
// {/* bg-[#f5f5f7] */}

export default function FeatureCard({ title, description, img, url, bgColorHex, marginTop, width }: FeatureCardProps) {
  return (
    <div className={`relative z-10 flex w-full h-[600px] flex-col overflow-hidden rounded-[30px] p-[30px] md:p-10 bg-white
      ${width === 1 ? "col-span-2" : ""}
      ${AlmaraiFont.className}`}
      >
      {/* ${marginTop >= 0 ? `mt-[${marginTop}px]` : `-mt-[${Math.abs(marginTop)}px]`}  */}

      {/* wrap in a Link to navigate to the feature page */}
      <div className={`max-w-[900px] md:mx-auto mb-2 leading-relaxed font-extrabold text-blacker
          ${title.length < 40 ? "text-3xl md:text-5xl md:text-[38px]" : "text-3xl md:text-4xl md:text-[40px]"} 
          ${width === 1 ? "text-center" : "text-right"} `}
      >
        {/* <Balancer> */}
        {title}
        {/* </Balancer> */}
      </div>
      <p className={`max-w-[700px] md:mx-auto text-xl md:text-2xl font-semibold leading-relaxed text-craft-grey/50 md:mt-6 mb-2 
        ${width === 1 ? "text-center" : ""}`}>
        {width === 1 ? <Balancer>{description}</Balancer> : <>{description}</>}
      </p>

      {img ?
        <Image
          src={img}
          alt={title}
          height={1200}
          width={1200}
          className="relative z-10 ml-[10px] 
            md:ml-0 overflow-hidden max-w-[100%] 
            lg:max-w-[1023px] animate-move-up-down"
        /> : <></>
      }
    </div>
  )
}