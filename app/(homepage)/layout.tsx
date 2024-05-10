import { BottomNav } from "@/components/navigation/bottom-nav";
import { Footer } from "@/components/navigation/footer";
import { Nav } from "@/components/navigation/nav";

export const revalidate = 3600
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen mx-auto flex flex-col relative">
      <Nav />
      <div className="w-full max-w-6xl mx-auto flex flex-col relative">
      {children}
      {/* <BottomNav /> */}
      </div>
      <Footer />
    </main>
  );
}

export default HomeLayout;