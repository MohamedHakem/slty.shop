import { BottomNav } from "@/components/navigation/bottom-nav";
import { Footer } from "@/components/navigation/footer";
import { Nav } from "@/components/navigation/nav";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full max-w-6xl min-h-screen mx-auto border-0 md:border-x border-[#0000001f] flex flex-col relative">
      <Nav />
      {children}
      <BottomNav />
      <Footer />
    </main>
  );
}

export default HomeLayout;