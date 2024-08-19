import Image, { StaticImageData } from "next/image";
// import { cn } from "@/lib/utils";
import { Almarai } from "next/font/google";
import Balancer from "react-wrap-balancer";
import UnlimitedSubdomains from "@/components/landing/unlimited-free-subdomains";

const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })

export type FeatureCardProps = {
  title: string;
  description?: string;
  imgSrc?: StaticImageData;
  url?: string;
  bgColorHex?: string;
  marginTop?: number;
  width?: number;
}
// {/* bg-[#f5f5f7] */}

export default function FeatureCard({ title, description, imgSrc, url, bgColorHex, marginTop, width }: FeatureCardProps) {
  return (
    <div className={`relative z-10 flex flex-col w-full h-[600px] overflow-hidden rounded-[30px] p-[30px] md:p-10
      ${bgColorHex === "dark" ? `bg-black` : "bg-white"}
      ${AlmaraiFont.className} ${width === 1 ? "md:col-span-2" : ""} 
      `}>
      {/* ${marginTop >= 0 ? `mt-[${marginTop}px]` : `-mt-[${Math.abs(marginTop)}px]`}  */}

      {/* wrap in a Link to navigate to the feature page */}
      <div className={`max-w-[900px] mb-2 font-extrabold leading-snug
          ${title.length < 40 ? "text-3xl md:text-[38px]" : "text-3xl md:text-[40px]"} 
          ${width === 1 ? "text-center mx-auto" : "text-right"} 
          ${bgColorHex === "dark" ? "text-white" : "text-black"}`}
      >
        {title}
      </div>

      <p className={`max-w-[900px] text-lg md:text-2xl font-semibold leading-relaxed text-craft-grey/50 md:mt-4 mb-2 
        ${width === 1 ? "md:text-center md:mx-auto" : ""}
          ${bgColorHex === "dark" ? `text-gray-400` : ""}`}>
        {width === 1 ?
          // <Balancer>
          <>{description}</>
          // </Balancer>  
          :
          <>{description}</>
        }
      </p>

      <>
      {title === "دومين مجاني" ?
        <UnlimitedSubdomains />
        // <></>
        :
        <></>
      }
</>

      {/* {imgSrc ?
        <Image
          src={imgSrc}
          alt={title}
          height={1200}
          width={1200}
          className="relative z-10 ml-[10px] object-center
            md:ml-0 overflow-hidden max-w-[100%] 
            lg:max-w-[1023px]"
        /> 
        : <></>
      } */}
    </div>
  )
}