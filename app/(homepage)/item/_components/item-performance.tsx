import Link from "next/link"
import { CiStar } from "react-icons/ci"
import { FaStar } from "react-icons/fa"
import { IoMdTrendingUp } from "react-icons/io"

export const ItemPerformance = () => {
  return (
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
        <p>1+</p>
        <IoMdTrendingUp size={12} className="w-full justify-center h-[26px] text-green-500 border-2 border-green-500 rounded-full pr-[2px]" />
      </div>
    </div>
  </div>
  )
}