import { Footer } from '@/components/navigation/footer'
import { Nav } from '@/components/navigation/nav'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function NotFound() {
  return (
    <main className="w-full h-full min-h-screen mx-auto flex flex-col relative">
      <Nav />
      <div className="w-full h-full mx-auto flex flex-col relative justify-center items-center">
        <video className="w-full h-full object-cover aspect-video" loop autoPlay muted>
          <source src="/assets/not-found.mp4" type="video/mp4" />
          <source src="/assets/not-found.webm" type="video/webm" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white font-bold">
          <div className="w-[520px] h-72 justify-center items-center text-center flex flex-col rounded-3xl text-white gap-8 bg-slate-400/80 backdrop-blur-2xl p-4">
            <h2 className="text-4xl font-bold">Not Found!</h2>
            <p className="text-2xl font-bold">Could not find requested resource</p>
            <div>
              <span className="mr-8 text-2xl font-bold">Go to</span>
              <Link href="/">
                <Button className="text-white" variant={"default"} size={"xl"}>
                  <span className="font-bold text-2xl">Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}