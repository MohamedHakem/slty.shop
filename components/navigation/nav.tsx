import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SltyLogo } from "@/components/slty-logo";
import { UserButton } from "@/components/auth/user-button";
import { Almarai } from "next/font/google";
import { cn } from "@/lib/utils";

const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })

export const Nav = async () => {
  const dir = "rtl"

  return (
    <header className="sticky top-0 z-50 flex h-[80px] w-full items-center border-b border-black/5 bg-white/90 backdrop-blur-sm py-3 text-center">
      <nav
        dir={dir}
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-10"
      >
        <SltyLogo style={1} iconSize={50} textSize={24} withBackBtn={true} />
        <div className={cn("flex items-center gap-3", AlmaraiFont.className)}>
          <UserButton />
          <Link 
          prefetch={false} 
          href="/register" 
          style={{
            perspective: "600px",
          }}
          >
            <Button
              size="sm"
              className="bg-primary text-lg font-normal"
            >
              <span className="text-base font-bold">أنشئ متجرك مجاناً</span>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
