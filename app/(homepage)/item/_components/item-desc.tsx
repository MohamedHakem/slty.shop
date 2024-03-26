export const ItemDesc = ({ desc }: { desc: string }) => {
  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 w-full border rounded-xl">
      <h2 className="inline text-xl font-medium">الوصف</h2>
      <p className="">{desc}</p>
    </div>
  )
}