import { BottomNav } from "@/components/navigation/bottom-nav";
import { CategoriesNav } from "@/components/navigation/categories-nav";
import { Footer } from "@/components/navigation/footer";
import { Nav } from "@/components/navigation/nav";

const MarketplaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full max-w-6xl min-h-screen mx-auto border-0 md:border-x border-primaryBorder flex flex-col relative">
      <div className="h-16"><Nav /></div>
      <CategoriesNav />
      {children}
      <BottomNav />
      <Footer />
    </main>
  );
}

export default MarketplaceLayout;