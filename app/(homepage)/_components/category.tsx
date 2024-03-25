import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { RiArrowLeftLine } from "react-icons/ri";

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
    <div className="relative flex flex-col gap-3 justify-center bg-white py-8 w-full max-w-[1100px]">
      <div className="flex flex-row justify-between">
        <Link href={`/category/${name}`}>
          <p className={cn("text-primary", "hover:text-primaryDark")}>عرض الكل</p>
        </Link>
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>
      <Carousel opts={{ align: 'start', loop: true, containScroll: "trimSnaps", direction: "rtl" }}
        className="w-full max-w-6xl">
        <CarouselContent className="-ml-4" dir="rtl">
          {products.map((c, i) => (
            <Link href={`/item/${i + 1}`} key={i}>
              <CarouselItem className="basis-auto pl-4">
                <div className={`flex flex-col items-center justify-center text-center rounded-xl bg-[${cardBg ? cardBg : "#EFEFF2"}]`}
                  style={{ width: `${size || 200}px`, height: `${size || 200}px` }}>
                  <p className="text-sm">{i + 1}</p>
                </div>
              </CarouselItem>
            </Link>
          ))}

          <Link href={`/category/${name}`}>
            <CarouselItem className="basis-auto pl-4">
              <div className={`flex flex-col items-center justify-center text-center rounded-xl bg-[${cardBg ? cardBg : "#EFEFF2"}]`}
                style={{ width: `${size || 200}px`, height: `${size || 200}px` }}>
                <div className="flex flex-col gap-4">
                  <p className="text-3xl font-medium">{name}</p>
                  <p className="text-primary text-md font-medium border-b-2 border-primary">
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

