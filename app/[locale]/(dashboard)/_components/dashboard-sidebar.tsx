import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SltyLogo } from '@/components/slty-logo'
import { UpgradeBox } from "./upgrade-box"
import { Bell, Package, ShoppingCart, Home } from "lucide-react"
import { EntityType } from "@prisma/client"
import { currentEntity } from '@/lib/auth';
import { notFound } from "next/navigation"

export const DashboardSidebar = async () => {
  const entity = await currentEntity()
  if (!entity) return notFound()

  return (
    <div className="hidden border-l border-[#0000001f] md:block">
      <div className="flex min-h-[calc(100vh)] h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b border-[#0000001f] px-4 lg:h-[60px] lg:px-6">
          <SltyLogo style={1} iconSize={50} textSize={20} />
          <Button variant="outline" size="icon" className="mr-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link href="/dashboard" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground" prefetch={false}>
              <Home className="h-5 w-5" />
              الرئيسية
            </Link>
            {entity.type === EntityType.SHOP && <Link href="/dashboard/orders" className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary" prefetch={false}>
              <ShoppingCart className="h-5 w-5" />
              الأوردرات
              <Badge className="mr-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
            </Link>}
            <Link
              href={`/dashboard/${entity.type === EntityType.COMPANY ? "ads" : "products"}`}
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <Package className="h-5 w-5" />
              {entity.type === EntityType.COMPANY ? "الإعلانات" : "المنتجات"}
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <UpgradeBox />
        </div>
      </div>
    </div>
  )
}