import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export const ItemDock = () => {
  return (
    <div className="tests fixed md:hidden bottom-[72px] w-[90%] h-auto p-3 text-center text-lg text-white
      flex justify-between gap-3 border border-primaryBorder rounded-xl bg-white z-50 shadow-2xl"
    >
      <Button className="w-1/2 rounded-lg flex gap-2">
        <FaPhoneAlt size={20} />
        <p className="text-lg">مكالمة</p>
      </Button>
      <Button className="w-1/2 rounded-lg bg-[#075E54] flex gap-2">
        <FaWhatsapp color={"#fff"} size={24} />
        <p className="text-md">رسالة واتس</p>
      </Button>
    </div>
  )
} 
