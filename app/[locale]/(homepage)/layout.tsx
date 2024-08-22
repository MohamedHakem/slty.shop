// import { BottomNav } from "@/components/navigation/bottom-nav";
import { Footer } from "@/components/navigation/footer";
import { Nav } from "@/components/navigation/nav";
import 'next-cloudinary/dist/cld-video-player.css';

export const revalidate = 3600
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen mx-auto flex flex-col relative">
      <Nav />
      <main className="w-full mx-auto flex flex-col relative">
      {children}
      {/* <BottomNav /> */}
      </main>
      <Footer />
    </main>
  );
}

export default HomeLayout;