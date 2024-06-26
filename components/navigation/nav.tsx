import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SltyLogo } from "@/components/slty-logo";
// import { currentUser } from "@/lib/auth";
import { UserButton } from "../auth/user-button";

export const Nav = async () => {
  const dir = "rtl";

  // console.time("🚀 ~ Nav ~ server ~ user")
  // const user = await currentUser()
  // console.timeEnd("🚀 ~ Nav ~ server ~ user")

  // console.log("🚀 ~ Nav ~ user:", user)

  return (
    <div className="sticky top-0 z-20 flex h-14 w-full items-center border-b bg-white py-3 text-center">
      <nav
        dir={dir}
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 md:px-10"
      >
        <SltyLogo style={1} iconSize={50} textSize={20} withBackBtn={true} />
        <div className="flex items-center gap-2">
          {/* {user ? <UserButton /> : <Link href="/login" className="text-base px-2 py-1 h-10 items-center bg-[#EFEFF2] rounded-md">دخول</Link>} */}
          <UserButton />
          <Link prefetch={false} href="/register">
            <Button size="sm" className="bg-primary text-lg font-normal">
              <span className="-mt-2">بيع</span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
