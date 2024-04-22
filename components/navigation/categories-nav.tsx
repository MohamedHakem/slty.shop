"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Link from "next/link"
import AutoScroll from "embla-carousel-auto-scroll"
import { cn } from "@/lib/utils"

export const CategoriesNav = ({ className }: { className?: string }) => {
  const categories = [
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
    // { name: "أجهزة كهربائية", image: "" },
  ]

  // TODO: fetch categories from the server
  // TODO: add a loading state + some animation with framer motion to lay categories cards out smoothly
  // TODO: add an active state to the current category, and new icon for new categories
  // TODO: add a skeleton loader
  // TODO: add a placeholder image
  // TODO: add a hover effect

  return (
    <div className={cn("w-full m-auto", className)}>
      <div className="relative flex justify-center bg-white py-2 md:mb-0 md:py-2 w-full max-w-[1100px] m-auto">
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
            }),
          ]}
          className="w-full max-w-6xl"
          dir={"rtl"}
        >
          <CarouselContent className="md:-ml-4 gap-3" dir="rtl" withBefore>
            {categories.slice(0, -1).map((c, i) => (
              <Link prefetch={false} href={`/category/${i + 1}`} key={i}>
                <CarouselItem className="basis-auto">
                  <div className="flex flex-col items-center justify-center text-center 
                  rounded-xl w-[72px] h-[72px] md:w-28 md:h-28 bg-[#EFEFF2]">
                    <p className="text-sm">{i + 1}</p>
                  </div>
                </CarouselItem>
              </Link>
            ))}

            <Link prefetch={false} href={`/category/${categories.at(-1)?.name ?? "last"}`}>
              <CarouselItem className="basis-auto pl-3">
                <div className="flex flex-col items-center justify-center text-center 
                  rounded-xl w-[72px] h-[72px] md:w-28 md:h-28 bg-[#EFEFF2] mx-">
                  <p className="text-sm">
                    {categories.at(-1)?.name || "last"}
                  </p>
                </div>
              </CarouselItem>
            </Link>
          </CarouselContent>
          <CarouselPrevious className="shadow-md top-1/2 right-1 md:-right-4 w-10 h-10 disabled:hidden" />
          <CarouselNext className="shadow-md top-1/2 left-1 md:-left-4 w-10 h-10 disabled:hidden" />
        </Carousel>
      </div>
    </div>
  )
}

