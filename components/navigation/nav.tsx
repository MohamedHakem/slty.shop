import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SltyLogo } from "@/components/slty-logo";

export const Nav = () => {
  const dir = "rtl"

  return (
    <div className="border-b flex items-center w-full h-[56px] py-3 sticky top-0 bg-white z-20 text-center">
      <nav dir={dir} className="flex items-center justify-between px-4 md:px-10 max-w-screen-xl w-full mx-auto">
        <SltyLogo style={1} iconSize={50} textSize={20} />
        <div className="flex items-center gap-2">
          <Link href="/login" className="text-lg hover:border hover:rounded-md px-2 py-1 h-10 items-center">دخول</Link>
          <Link href="/register">
            <Button size="wide" className="text-xl font-normal bg-black">
              بيع
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
