"use client"

import * as React from "react"
import Link from "next/link"

import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronLeft } from "lucide-react"
// import Image from "next/image"

const items: { href: string, label: string }[] = [
  { href: "/", label: "الرئيسية" },
  { href: "#", label: "جمال وعناية" },
  { href: "#", label: "العطور والعود" },
  { href: "", label: "عطور أطفال ومواليد" },
]

export function BreadcrumbResponsive({ className, textColor }: { className?: string, textColor?: string }) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const ITEMS_TO_DISPLAY = isDesktop ? 4 : 3;

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className={textColor}>
        <BreadcrumbItem>
          <BreadcrumbLink href={items[0].href}>{items[0].label}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {items.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(1, -2).map((item, index) => (
                      <DropdownMenuItem key={index} dir="rtl">
                        <Link href={item.href ? item.href : "#"} className="w-full">
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent dir="rtl">
                    <DrawerHeader className="text-right sm:text-right">
                      <DrawerTitle>إنتقل الي</DrawerTitle>
                      <DrawerDescription>
                        اختر صفحة لتنتقل اليها
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4" dir="rtl">
                      <div className="group">
                        <div className="w-full flex flex-col justify-between">
                          <Link href={"/"} className="flex items-center gap-2 h-10 justify-between">
                            {items.slice(0, 1).map(r => r.label)}
                            <ChevronLeft />
                          </Link>
                          {items.slice(1).map((item, i) => (
                            <div key={i}
                              className="relative w-full transition-colors duration-200 flex flex-col items-center"
                              style={{ paddingRight: `${(i + 1) * 21}px` }}
                            >
                              <div
                                className="absolute w-0.5 bg-primary h-[17px]"
                                style={{ right: `${i === 0 ? 0 : (i * 21)}px` }}
                              ></div>
                              <div className="w-full flex relative pt-2">
                                <div className="w-4 h-3 border-r-2 border-b-2 rounded-br-xl absolute -right-[21px] border-primary" style={{ bottom: 20 }}></div>
                                <div className="w-full flex">
                                  <div className="group w-full duration-1000 ease-in-out rounded-lg outline-none transition-shadow group b-0 ">
                                    <input id="expandCollapse" type="checkbox" className="peer sr-only"></input>
                                    <div className="w-full flex items-center relative p-0 text-left cursor-pointer justify-center">
                                      <div className="flex items-center justify-between w-full">
                                        <div className="w-full flex flex-col gap-1">
                                          <div className="flex items-center gap-2 justify-between h-10">
                                            <Link href={item.href} className="text-gray-gray1k font-semibold text-base">{item.label}</Link>
                                            <ChevronLeft />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">إغلاق</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href !== "" ? (
              <>
                <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
                <div className="[&>svg]:size-3.5" aria-hidden={"true"}>
                  <ChevronLeft />
                </div>
              </>
            ) : (
              <>
                <BreadcrumbPage className={`max-w-20 truncate md:max-w-none ${textColor}`}>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbPage>
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
