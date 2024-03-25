"use client"

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { FaImage } from "react-icons/fa";

type ICarouselType = {
  src: string
  alt: string
}[]

export const ItemCarousel = ({ images }: { images: ICarouselType }) => {
  return (
    // <div className="w-full flex flex-col items-center h-[400px] max-w-[440px] relative">
    // <div className="w-full flex flex-col items-center h-[600px] max-w-[630px] relative">
    <div className="w-full flex flex-col items-center h-auto relative min-w-[400px]">
      <Carousel
        // className="w-full flex items-center h-[400px] max-w-[440px]"
        // className="w-full flex items-center h-[600px] max-w-[630px]"
        className="w-full flex items-center h-auto min-w-[400px]"
        opts={{
          align: 'center',
          containScroll: "trimSnaps",
          direction: "rtl",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent dir={"rtl"} className="after:w-0">
          {images.map((c, i) => (
            // <CarouselItem key={i} className="basis-auto pl-4">
            <CarouselItem key={i} className="basis-full pl-4">
              <div className={`flex flex-col gap-2 min-w-[400px] items-center justify-center 
              text-center rounded-2xl bg-[#EFEFF2] aspect-square relative overflow-hidden`}
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 70vw, 50vw"
                  className="object-contain object-center hover:scale-110 duration-200 ease-in-out transition-all"
                  priority={i < 1 ? true : false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute left-3 -bottom-12 flex gap-1 items-center border border-gray-300 p-2 h-8 rounded-md text-md text-gray-500 font-normal">
        {images.length}
        <FaImage className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  )
}
