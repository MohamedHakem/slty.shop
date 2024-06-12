"use client"

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FaImage } from "react-icons/fa";

type ItemCarouselType = { src: string; alt: string }[]

export const ItemCarousel = ({ images }: { images: ItemCarouselType }) => {
  // const data = await slowFetch()

  return (
    <div className="flex flex-col items-center h-auto relative">
      <Carousel className="w-full flex items-center h-auto min-w-[300px]" opts={{ align: 'center', containScroll: "trimSnaps", direction: "rtl" }}>
        <CarouselContent dir={"rtl"} className="after:w-0 gap-3" withAfter={false}>
          {images.map((c, i) => (
            <CarouselItem key={i} className="basis-full pl-0">
              <div className={`flex flex-col gap-2 min-w-[300px] items-center justify-center text-center md:rounded-2xl bg-[#EFEFF2] aspect-square relative overflow-hidden`}>
                <Image src={c.src} alt={c.alt} fill priority={i < 1 ? true : false}
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 70vw, 50vw"
                  className="object-contain object-center hover:scale-110 duration-200 ease-in-out transition-all"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="shadow-xl top-1/2 right-1 md:right-2 w-10 md:w-12 h-10 md:h-12 disabled:hidden" />
        <CarouselNext className="shadow-xl top-1/2 left-1 md:left-2 w-10 md:w-12 h-10 md:h-12 disabled:hidden" />
      </Carousel>
      <div className="absolute left-3 bottom-3 flex gap-1 items-center border border-primaryBorder
        p-2 h-8 rounded-lg text-md text-gray-500 font-normal shadow-md bg-white">
        {images.length}
        <FaImage className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  )
}
