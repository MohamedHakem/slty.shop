import { slowFetch } from "@/data/slow-fetch"

export const ItemHeader = async ({ item }: { item: { name: string, price: number } }) => {
  const data = await slowFetch(0)
  // console.log("🚀 ~ ItemHeader ~ data.name:", data.name)

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 border rounded-xl">
      <h1 className="inline text-xl font-medium">{data.name}</h1>
      <p className="text-[#0F1111] text-xl font-medium">{data.price.amount} {" "} ج.م</p>
    </div>
  )
}


export const ItemHeaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 max-h-[99px] p-3 md:p-4 border rounded-xl">
      <div className="animate-pulse h-7 w-full bg-gray-300 rounded mb-4 shimmer"></div>
      <div className="animate-pulse h-7 w-1/3 bg-gray-300 rounded mb-2 shimmer"></div>
    </div>
  );
};
