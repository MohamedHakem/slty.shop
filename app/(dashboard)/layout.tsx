import React from 'react'
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DashboardSidebar } from "./_components/dashboard-sidebar"
import { DashboardMobileSidebar } from './_components/dashboard-mobile-sidebar'
import { UserButton } from '@/components/auth/user-button'

export default async function Dashboardlayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div dir="rtl" className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-[#0000001f] px-4 lg:h-[60px] lg:px-6">
          <DashboardMobileSidebar />
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="ابحث المنتجات..." className="w-full appearance-none bg-background pr-8 shadow-none md:w-2/3 lg:w-1/3" />
              </div>
            </form>
          </div>
          <UserButton />
        </header>
        <main className="flex flex-1 flex-col gap-4 lg:gap-6">{children}</main>
      </div>
    </div>
  )
}
