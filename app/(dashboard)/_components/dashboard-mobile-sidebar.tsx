import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { EntityType } from "@prisma/client"
import { Badge, Home, Menu, Package, Package2, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { UpgradeBox } from "./upgrade-box"
import { SltyLogo } from '@/components/slty-logo'
import { currentEntity } from "@/lib/auth"

export const DashboardMobileSidebar = async () => {
  const entity = await currentEntity()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" dir='rtl' className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link href="/" className="flex items-center justify-center gap-2 text-lg font-semibold">
            <SltyLogo style={1} iconSize={50} textSize={20} />
            <span className="sr-only">Slty shop - سلتي</span>
          </Link>
          <Link href="/dashboard" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground" >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          {entity.type === EntityType.SHOP &&
            <Link href="/dashboard/orders" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground hover:text-foreground">
              <ShoppingCart className="h-5 w-5" />
              Orders
              <Badge className="mr-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
            </Link>}
          <Link
            href={`/dashboard/${entity.type === EntityType.COMPANY ? "ads" : "products"}`}
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Package className="h-5 w-5" />
            {entity.type === EntityType.COMPANY ? "ads" : "Products"}
          </Link>
        </nav>
        <div className="mt-auto">
          <UpgradeBox />
        </div>
      </SheetContent>
    </Sheet>
  )
}