import Image, { StaticImageData } from "next/image";
import { Almarai } from "next/font/google";
import React from "react";
// import { cn } from "@/lib/utils";
// import Balancer from "react-wrap-balancer";
// import { UnlimitedSubdomains } from "@/components/landing/unlimited-free-subdomains";

const AlmaraiFont = Almarai({ weight: ["400", "800"], subsets: ["arabic"], })

export type FeatureCardProps = {
  title: string;
  description?: string;
  imgSrc?: StaticImageData;
  artwork?: string | React.FC<{}> | React.ReactNode | StaticImageData;
  demoPageUrl?: string;
  bgColorHex?: string;
  bgColor1?: string;
  bgColor2?: string;
  width?: number;
}
// {/* bg-[#f5f5f7] */}

export default function FeatureCard({
  title,
  description,
  demoPageUrl,
  imgSrc,
  width,
  bgColorHex,
  bgColor1,
  bgColor2,
  artwork
}: FeatureCardProps) {

  return (
    <div className={`relative z-10 flex flex-col w-full h-[600px] overflow-hidden rounded-[30px]
      ${bgColorHex === "dark" ? "bg-black" : ""}
      ${bgColor2 && title.includes("الخرائط") ? `bg-gradient-to-r from-[#ee5e41] to-[#d75347]`
        : !bgColor2 && bgColor1 ? `bg-[${bgColor1}]` : "bg-white"}
      }
      ${AlmaraiFont.className} 
      ${width === 1 ? "md:col-span-2" : ""} 
      ${artwork ? "" : "p-[30px] md:p-10"} `}
    >
      <div className={`max-w-[900px] mx-auto 
        ${artwork ? "p-[30px] pb-0 md:p-10 md:pb-0 z-10" : ""} `}
      >
        <div className={`font-extrabold leading-snug
          ${title.length < 40 ? "text-3xl md:text-[38px]" : "text-3xl md:text-[40px]"} 
          ${width === 1 ? "text-center mx-auto" : "text-right"} 
          ${bgColorHex === "dark" || artwork ? "text-white" : "text-black"} `}
        >
          {title}
        </div>

        <p className={`text-lg md:text-xl font-base leading-relaxed text-craft-grey/50 mt-4
          ${width === 1 ? "md:text-center md:mx-auto" : ""}
          ${bgColorHex === "dark" ? `text-gray-400` : artwork ? "text-gray-50" : ""} `}
        >
          <>{description}</>
        </p>
      </div>

      {
        typeof artwork === 'function' ? React.createElement(artwork as React.FC)
          : typeof artwork === 'string' && artwork.includes('video') ?
            <div className="max-w-full relative flex items-center justify-center overflow-hidden">
              <video className="-mt-[10%]"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                controls={false}
              >
                <source src={artwork} type="video/mp4" />
              </video>
            </div>
            : typeof artwork === 'string' ? <Image src={artwork} alt={title} />
              : null
      }

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
    </div >
  )
}