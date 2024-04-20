import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SltyLogo } from "@/components/slty-logo";
// import { currentUser } from "@/lib/auth";
import { UserButton } from "../auth/user-button";

export const Nav = async () => {
  const dir = "rtl"

  // console.time("🚀 ~ Nav ~ server ~ user")
  // const user = await currentUser()
  // console.timeEnd("🚀 ~ Nav ~ server ~ user")

  // console.log("🚀 ~ Nav ~ user:", user)

  return (
    <div className="border-b flex items-center w-full h-14 py-3 sticky top-0 bg-white z-20 text-center">
      <nav dir={dir} className="flex items-center justify-between px-4 md:px-10 max-w-6xl w-full mx-auto">
        <SltyLogo style={1} iconSize={50} textSize={20} />
        <div className="flex items-center gap-2">
          {/* {user ? <UserButton /> : <Link href="/login" className="text-base px-2 py-1 h-10 items-center bg-[#EFEFF2] rounded-md">دخول</Link>} */}
          <UserButton />
          <Link href="/register"> <Button size="sm" className="text-lg font-normal bg-primary"><span className="-mt-2">بيع</span></Button> </Link>
        </div>
      </nav>
    </div>
  )
}
