"use server"

import { BreadcrumbResponsive } from "@/components/navigation/responsive-breadcrumb";
import { ItemCarousel } from "../_components/item-carousel"
import { SellerBox } from "../_components/seller-box";
import { ItemHeader } from "../_components/item-header";
import { ItemDock } from "../_components/item-dock";

export default async function ItemPage({ params }: { params: { slug: string } }) {
  // self-healing url: url work by id or slug, and gets to full url automatically
  // the short-url would be the /id one, and the long-url would be the /id-slug one 
  // include the seller (entity, profile/shop/company) with the product, and extract it here 
  const item = {
    name: `منتج رقم ${decodeURIComponent(params.slug)}`,
    price: 12,
    images: [
      {
        src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: `منتج رقم ${decodeURIComponent(params.slug)}`,
      },
      {
        // src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: `منتج رقم ${decodeURIComponent(params.slug)}`,
      },
      {
        src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: `منتج رقم ${decodeURIComponent(params.slug)}`,
      },
    ],
    seller: {
      name: "اسم الشركة او المتجر",
      username: "company-or-shop-username",
      phone: "01234567890"
    }
  }

  return (
    <div dir="rtl" className="flex flex-col items-center pt-4 pb-12 md:px-8">
      <BreadcrumbResponsive />
      <div className="flex flex-col md:flex-row w-full my-4 md:my-8 gap-4 md:gap-0">
        <ItemCarousel images={item.images} />
        <div className="flex flex-col flex-auto md:w-2/5 px-4 md:pl-0 md:pr-4 gap-6 min-w-[300px] md:flex-col-reverse md:justify-end">
          <ItemHeader item={{ name: item.name, price: item.price }} />
          <SellerBox seller={item.seller} />
        </div>
      </div>
      <div className="h-80"></div>
      <ItemDock />
    </div>
  )
}
