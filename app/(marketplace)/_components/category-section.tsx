"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import AutoScroll from "embla-carousel-auto-scroll"

export const CategorySection = ({ name, size, cardBg }:
  {
    name: string,
    size?: number | undefined
    cardBg?: string | undefined
  }) => {

  const products = [
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
    { name: "أجهزة كهربائية", image: "", price: "", rate: 0 },
  ]

  // TODO: fetch products from the server
  // TODO: add a loading state + some animation with framer motion to lay products cards out smoothly
  // TODO: add an active state to the current category, and new icon for new products
  // TODO: add a skeleton loader
  // TODO: add a placeholder image
  // TODO: add a hover effect

  return (
    <div className="relative flex flex-col gap-3 justify-center bg-white py-4  w-full max-w-[1100px] pr-3 md:pr-0">
      <div className="flex flex-row justify-between pl-2 md:pl-0">
        <Link href={`/category/${name}`} className="flex text-primary items-center">
          <ChevronLeft size={20} />
          <p className="hover:text-primaryDark">عرض الكل</p>
        </Link>
        <h2 className="text-2xl font-bold">
          <Link href={`/category/${name}`}>{name}</Link>
        </h2>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          containScroll: "trimSnaps",
          direction: "rtl"
        }}
        plugins={[
          AutoScroll({
            speed: 1,
            stopOnMouseEnter: true,
            startDelay: (Math.floor(Math.random() * 10) + 1) * 1000
          }),
        ]}
        className="w-full max-w-6xl"
      >
        <CarouselContent className="-ml-4 gap-3" dir="rtl" withBefore>
          {products.map((c, i) => (
            <Link key={i} href={`/item/${i + 1}`}>
              <CarouselItem className="basis-auto">
                <div className={`flex flex-col items-center justify-center text-center 
                rounded-xl bg-[${cardBg ? cardBg : "#EFEFF2"}]`}
                  style={{ width: `${size || 200}px`, height: `${size || 200}px` }}>
                  <p className="text-sm">{i + 1}</p>
                </div>
              </CarouselItem>
            </Link>
          ))}

          <Link href={`/category/${name}`}>
            <CarouselItem className="basis-auto pl-3">
              <div className={`flex flex-col items-center justify-center text-center 
              rounded-xl bg-[${cardBg ? cardBg : "#EFEFF2"}]`}
                style={{ width: `${size || 200}px`, height: `${size || 200}px` }}>
                <div className="flex flex-col gap-4">
                  <p className="text-3xl font-medium">{name}</p>
                  <p className="text-[#ff2f00] text-md font-medium border-b-2 border-primary">
                    عرض الكل
                    {/* <RiArrowLeftLine size={24} color="#ff5029" className="absolute -left-4 -bottom-[13px]" /> */}
                  </p>
                </div>
              </div>
            </CarouselItem>
          </Link>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

