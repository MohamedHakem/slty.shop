"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { toast } from "sonner"
import { FaCheckCircle } from "react-icons/fa";

export const SellerBox = ({ seller }: { seller: { name: string, username: string, phone: string } }) => {
  const [showPhone, setShowPhone] = useState(false);

  const handleShowPhone = async () => {
    const promise = () => new Promise((resolve) => setTimeout(() => {
      setShowPhone(true)
      resolve({ name: 'Sonner' })
    }, 1000));

    toast.promise(promise, {
      loading: '...جاري',
      success: `تم إظهار رقم الهاتف`,
      error: 'حدث خطأ، حاول مرة اخري',
      duration: 3000,
      position: "top-center",
      style: {
        direction: "rtl",
        gap: "16px",
        bottom: "140px md:bottom-0",
        top: "30px",
        fontSize: "15px"
      },
    });
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(seller.phone);
    // toast(" تم نسخ رقم الهاتف إلى الحافظة", {
    //   icon: <FaCheckCircle size={24} />,
    //   duration: 25000,
    //   style: {
    //     backgroundColor: "#4caf50",
    //     color: "#ffffff",
    //     direction: "rtl",
    //     fontSize: "1rem",
    //     width: "80%",
    //     right: "0%",
    //     gap: "16px",
    //   },
    // });

    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 1000));

    toast.promise(promise, {
      loading: 'جاري...',
      success: `تم نسخ رقم الهاتف إلى الحافظة بنجاح!`,
      error: 'حدث خطأ، حاول مرة اخري',
      duration: 3000,
      position: "top-center",
      style: {
        gap: "16px",
        direction: "rtl",
        bottom: "140px md:bottom-0",
        top: "36px",
        fontSize: "15px"
      }
    });
  }

  return (
    <div className="flex flex-col p-4 border rounded-xl">
      <Link href={`/shop/${seller.username}`} className="flex items-center gap-4">
        <div className="border rounded-xl h-20 w-20 bg-primaryBorder"></div>
        <div className="flex flex-col">
          <div className="text-lg">{seller.name}</div>
          <div className="flex gap-1 text-sm items-center text-primary">
            الصفحة الشخصية
            <RiArrowLeftSLine />
          </div>
        </div>
      </Link>
      <div className="pt-4">
        <Button
          className="bg-primary text-white rounded-md w-full flex gap-3 text-md justify-center items-center"
          size={"lg"}
          type="submit"
          onClick={showPhone ? () => copyToClipboard() : () => handleShowPhone()}
        >
          {showPhone ? <div className=""><IoCopyOutline size={28} /></div> : <FaPhone />}
          {showPhone ? seller.phone : "إظهار رقم الهاتف"}
        </Button>
      </div>
    </div >
  )
}