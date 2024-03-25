// import Link from "next/link";
import { BreadcrumbResponsive } from "@/components/navigation/responsive-breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoMdTrendingUp } from "react-icons/io";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// const style: number = 1
export default async function ItemPage({ params }: { params: { slug: string } }) {
  // self-healing url: url work by id or slug, and gets to full url automatically
  // the short-url would be the /id one, and the long-url would be the /id-slug one 
  const item = {
    name: `منتج رقم ${decodeURIComponent(params.slug)}`,
    images: [
      {
        src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: `منتج رقم ${decodeURIComponent(params.slug)}`,
      },
      {
        src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: `منتج رقم ${decodeURIComponent(params.slug)}`,
      },
      {
        src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: `منتج رقم ${decodeURIComponent(params.slug)}`,
      },
    ],
  }
  const itemName = `منتج رقم ${decodeURIComponent(params.slug)}`;
  const styleBlack: boolean = false

  return (
    <>
      {!styleBlack ? (
        <div dir="rtl" className="flex flex-col items-center py-4 px-8">
          <BreadcrumbResponsive />
          <div className="flex w-full justify-between items-center h-[66px] mt-4 z-10">
            <div className="h-full"><h1 className="inline text-2xl font-medium mt-8 mb-4">{item.name}</h1></div>
            <div className="flex gap-2 items-center border border-borderPrimary rounded-md">
              <div className="flex flex-col items-center">
                <p className="text-lg">تقييم عام</p>
                <Link href={"#reviews"} className="flex h-[38px] gap-[6px] hover:bg-secondary px-[14px] rounded-md items-center">
                  <FaStar color={"#f5c518"} size={24} className="w-full justify-center h-[32px]" />
                  <div className="flex flex-col">
                    <p className="h-6"><span className="text-xl font-semibold leading-6">4.2</span></p>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">تقييمك</p>
                <Link href={"#"} className="flex h-[38px] gap-1 p-2 rounded-md items-center hover:bg-secondary px-[10px]">
                  <CiStar size={24} className="w-full justify-center h-[32px] text-[#f5c518] font-semibold" />
                  <p className="text-[#f5c518]">قيم</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">رواج</p>
                <div className="flex h-[38px] gap-1 p-2 items-center hover:bg-secondary px-[10px] rounded-md">
                  {/* views here */}
                  <p>1+</p>
                  <IoMdTrendingUp size={12} className="w-full justify-center h-[26px] text-green-500 border-2 border-green-500 rounded-full pr-[2px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full my-4">
            {/* <div className="flex flex-col gap-2 w-20 items-center justify-center text-center rounded-2xl bg-[#EFEFF2] aspect-square relative overflow-hidden">
              <Image
                src={"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={itemName}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 25vw"
                className="object-cover object-center hover:scale-110 duration-200 ease-in-out transition-all"
                priority={true}
              />
            </div> */}

            {/* below is working, but messing up the rest of the page under, make the full page first, then figure out how to add a ::before or ::after to do this */}
            {/* <div className="before:absolute before:w-full before:h-full before:z-10">
              <div className="flex flex-col gap-2 items-center justify-center text-center rounded-2xl
              bg-[#1f1f1f] aspect-square relative overflow-hidden m-auto w-[50%] blur-[72px] cursor-none">
                <Image
                  src={"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt={itemName}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover object-center hover:scale-110 duration-200 ease-in-out transition-all select-none"
                  priority={true}
                  quality={10}
                />
              </div>
            </div> */}

            <div className="grid grid-cols-11 grid-flow-row w-full">
              <div className="col-span-5 overflow-hidden h-[500px]">
              {/* <div className="flex flex-col gap-2 w-[400px] h-auto items-center justify-center text-center rounded-2xl bg-[#EFEFF2] aspect-square relative"> */}
              <div className="flex flex-col gap-2 w-[400px] h-[500px] items-center justify-center text-center rounded-2xl bg-[#EFEFF2] aspect-square relative">
                <div className="relative justify-center bg-white w-full">
                  <Carousel
                    opts={{ 
                      align: 'start', 
                      loop: true, 
                      containScroll: "trimSnaps", 
                      direction: "rtl",
                    }}
                    className="w-full max-w-[400px] flex items-center h-[500px]"
                  >
                    <CarouselContent dir={"rtl"} className="-ml-4 after:w-0">
                      {item.images.map((c, i) => (
                        <div key={i}>
                          <CarouselItem className="basis-auto pl-4">
                            <div className="flex flex-col items-center justify-center text-center rounded-xl w-[400px] h-[400px] bg-[#EFEFF2]">
                              <p className="text-sm">{i + 1}</p>
                            </div>
                          </CarouselItem>
                        </div>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                {/* <Image
                  src={"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt={itemName}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 25vw"
                  className="object-cover object-center hover:scale-110 duration-200 ease-in-out transition-all"
                  priority={true}
                /> */}
              </div>
              </div>

              <div className="grid col-span-6 p-2 border bg-green-300">
                <div className="p-2 z-10"><p className="text-lg">منتج رقم 1</p></div>
              </div>
            </div>


          </div>
        </div>
      ) : (
        <div dir="rtl" className="flex flex-col items-center py-4 px-8 bg-[#1f1f1f] overflow-hidden">
          <BreadcrumbResponsive className="w-full text-white" />
          <div className="flex w-full justify-between items-center h-[66px] mt-8 text-white relative">
            <div className="h-full"><h1 className="inline text-2xl font-medium mt-8 mb-4">{itemName}</h1></div>

            <div className="flex gap-2 items-center rounded-md">
              <div className="flex flex-col items-center">
                <p className="text-lg">تقييم عام</p>
                <Link href={"#reviews"} className="flex h-[38px] gap-[6px] hover:bg-secondary px-[14px] rounded-md items-center">
                  <FaStar color={"#f5c518"} size={24} className="w-full justify-center h-[32px]" />
                  <div className="flex flex-col">
                    <p className="h-6"><span className="text-xl font-semibold leading-6">4.2</span></p>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">تقييمك</p>
                <Link href={"#"} className="flex h-[38px] gap-1 p-2 rounded-md items-center hover:bg-secondary px-[10px]">
                  <CiStar size={24} className="w-full justify-center h-[32px] text-[#f5c518] font-semibold" />
                  <p className="text-[#f5c518]">قيم</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">رواج</p>
                <div className="flex h-[38px] gap-1 p-2 items-center hover:bg-secondary px-[10px] rounded-md">
                  <p>1+</p>
                  <IoMdTrendingUp size={12} className="w-full justify-center h-[26px] text-green-500 border-2 border-green-500 rounded-full pr-[2px]" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-full my-4">
            <div className="flex flex-col gap-2 w-20 items-center justify-center text-center rounded-2xl bg-[#EFEFF2] aspect-square relative overflow-hidden">
              <Image
                src={"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={itemName}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 25vw"
                className="object-cover object-center hover:scale-110 duration-200 ease-in-out transition-all"
                priority={true}
              />
            </div>
            <div className="p-2"><p className="text-lg">منتج رقم 1</p></div>
          </div> */}

          <div className="w-full">
            <div className="flex flex-col gap-2 items-center justify-center text-center rounded-2xl
              bg-[#1f1f1f] aspect-square relative overflow-hidden m-auto w-[50%] blur-[72px]">
              <Image
                src={"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={itemName}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover object-center hover:scale-110 duration-200 ease-in-out transition-all"
                priority={true}
                quality={10}
              />
            </div>
            {/* <div> */}
            <div className="absolute top-[50%] right-[28%] w-[500px] h-auto m-auto border border-borderPrimary bg-[#c9c9c9]">
              hello
            </div>
            {/* </div> */}
          </div>
        </div>
      )}</>
  )
}
