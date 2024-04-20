import { slowFetch } from "@/data/slow-fetch"
import { Suspense } from "react"

export const ItemDetails = async ({ details }: { details: { detail1: string, detail2: number } }) => {
  // const product = await fetch(
  //   `https://app-router-api.vercel.app/api/products?id=1`,
  // ).then((res) => res.json());
  // console.log("🚀 ~ ItemCarousel ~ product:", product)

  const data = await slowFetch(0)
  console.log("🚀 ~ ItemDetails ~ data.discount: ", data.discount)

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 border rounded-xl bg-gray-50">
      <h2 className="inline text-xl font-medium">التفاصيل</h2>
      <Suspense>
        <p className="">{data.discount.percent}</p>
        <p className="">{data.discount.expires}</p>
      </Suspense>
    </div>
  )
}

export const ItemDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 max-h-32 p-3 md:p-4 border rounded-xl">
      <div className="animate-pulse h-7 w-1/5 bg-gray-300 rounded mb-4 shimmer"></div>
      <div className="animate-pulse h-7 w-3/5 bg-gray-300 rounded mb-2 shimmer"></div>
      <div className="animate-pulse h-7 w-3/5 bg-gray-300 rounded mb-2 shimmer"></div>
    </div>
  );
};