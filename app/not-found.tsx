import { Footer } from "@/components/navigation/footer";
import { Nav } from "@/components/navigation/nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="relative mx-auto flex h-full min-h-screen w-full flex-col">
      <Nav />
      <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center">
        <video
          className="aspect-video h-full w-full object-cover"
          loop
          autoPlay
          muted
        >
          <source src="/assets/not-found.mp4" type="video/mp4" />
          <source src="/assets/not-found.webm" type="video/webm" />
        </video>

        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center font-bold text-white">
          <div className="flex h-56 w-3/4 flex-col items-center justify-center gap-6 rounded-3xl bg-slate-400/80 p-4 text-center text-white backdrop-blur-2xl md:h-72 md:w-[520px] md:gap-8">
            <h2 className="text-3xl font-bold md:text-4xl">Not Found!</h2>
            <p className="text-base font-bold md:text-2xl">
              Could not find requested resource
            </p>
            <div>
              <span className="mr-8 text-xl font-bold md:text-2xl">Go to</span>
              <Link prefetch={false} href="/">
                <Button className="text-white" variant={"default"} size={"xl"}>
                  <span className="text-2xl font-bold">Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
