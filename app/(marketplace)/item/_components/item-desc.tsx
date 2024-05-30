import { slowFetch } from "@/data/slow-fetch"

export const ItemDesc = async ({ desc }: { desc: string }) => {
  const data = await slowFetch(0)

  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 w-full border rounded-xl">
      <h2 className="inline text-xl font-medium">الوصف</h2>
      <p className="">{data.description}</p>
    </div>
  )
}

export const ItemDescSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 max-h-34 p-3 md:p-4 border rounded-xl">
      <div className="animate-pulse h-7 w-1/5 rounded bg-gray-300 shimmer"></div>
      <div className="animate-pulse h-7 w-full bg-gray-300 rounded mb-2 shimmer"></div>
      <div className="animate-pulse h-7 w-full bg-gray-300 rounded mb-2 shimmer"></div>
      <div className="animate-pulse h-7 w-3/5 bg-gray-300 rounded mb-2 shimmer"></div>
    </div>
  );
};