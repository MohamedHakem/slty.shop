import Image from "next/image";
import HeroImg1 from '@/public/assets/homepage/header-1.png';
import HeroAdd2 from '@/public/assets/homepage/header-add-2.png';
import HeroAdd1 from '@/public/assets/homepage/header-add-1.svg'

export default function HeroArtwork1() {
  return (
    <div className="w-full max-w-screen-2xl m-auto mt-6">
      <div className="relative flex items-center justify-center lg:-mt-16">
        <Image
          src={HeroImg1}
          alt="Create your shop for free forever in 20 seconds with Slty.shop"
          height={1200}
          width={1200}
          className="relative z-10 ml-[10px] 
                md:ml-0 overflow-hidden max-w-[100%] 
                lg:max-w-[1023px] animate-move-up-down"
          loading="eager"
        />
        <Image
          src={HeroAdd2}
          alt="Double your conversion rate with Slty.shop"
          height={1200}
          width={1200}
          className="absolute z-20 animate-move-down-up
                right-[4%] top-24 max-w-[30%] 
                md:right-[3%] md:top-[22%] 
                lg:right-[3%] lg:top-[23%] lg:max-w-[25dvw] 
                xl:max-w-[350px] xl:right-0 xl:-top-[5%]"
          loading="eager"
        />
        <Image
          src={HeroAdd1}
          alt="sell all kinds of products on Slty.shop"
          height={1200}
          width={1200}
          className="hidden md:block md:absolute z-20 animate-move-down-up
              left-[4%] top-24 max-w-[25%] 
              md:left-[3%] md:top-[8%] 
              lg:left-[4%] lg:top-[10%] lg:max-w-[20dvw] 
              xl:max-w-[350px] xl:left-[1%] xl:-top-[2%]"
          loading="eager"
        />
      </div>
    </div>
  )
}