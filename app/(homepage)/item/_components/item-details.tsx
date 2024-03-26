export const ItemDetails = ({ details }: { details: { detail1: string, detail2: number } }) => {
  return (
    <div className="flex flex-col gap-2 p-3 md:p-4 border rounded-xl bg-gray-50">
      <h2 className="inline text-xl font-medium">التفاصيل</h2>
      <p className="">{details.detail1}</p>
      <p className="">{details.detail2}</p>
    </div>
  )
}