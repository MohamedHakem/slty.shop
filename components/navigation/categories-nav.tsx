import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link"

export const CategoriesNav = () => {
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
  ]

  // TODO: fetch categories from the server
  // TODO: add a loading state + some animation with framer motion to lay categories cards out smoothly
  // TODO: add an active state to the current category, and new icon for new categories
  // TODO: add a skeleton loader
  // TODO: add a placeholder image
  // TODO: add a hover effect

  return (
    <div className="w-full m-auto">
      <div className="relative flex justify-center bg-white py-5 w-full max-w-[1100px] m-auto">
        <Carousel opts={{ align: 'start', loop: true, containScroll: "trimSnaps", direction: "rtl" }}
          className="w-full max-w-6xl">
          <CarouselContent dir={"rtl"} className="-ml-4">
            {categories.map((c, i) => (
              <Link href={`/category/${i + 1}`} key={i}>
                <CarouselItem className="basis-auto pl-4">
                  <div className="flex flex-col items-center justify-center text-center rounded-xl w-28 h-28 bg-[#EFEFF2]">
                    <p className="text-sm">{i + 1}</p>
                  </div>
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

