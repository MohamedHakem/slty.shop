import { BottomNav } from "@/components/navigation/bottom-nav";
import { CategoriesNav } from "@/components/navigation/categories-nav";
import { Footer } from "@/components/navigation/footer";
import { Nav } from "@/components/navigation/nav";

const MarketplaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen mx-auto flex flex-col relative">
      <Nav />
      <div className="max-w-6xl mx-auto flex flex-col relative w-full">
        <CategoriesNav className="hidden md:block" />
        {children}
        <BottomNav />
      </div>
      <Footer />
    </main>
  );
}

export default MarketplaceLayout;