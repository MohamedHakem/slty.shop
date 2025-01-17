import { ClaimShopName } from "@/components/claim-shopname";
import LandingTitle from "@/components/landing/title";
import LandingSubtitle from "@/components/landing/subtitle";
// import HeroArtwork1 from "@/components/landing/hero-artwork-1";
import HeroArtwork2 from "@/components/landing/hero-artwork-2";

export default function Hero2() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-white via-beige to-white gap-4 md:px-0 md:pb-40">
      <div className="flex">
        <div className="flex flex-col justify-between w-full bg-yellow-400">
          <LandingTitle />
          <LandingSubtitle />
          <ClaimShopName />
        </div>
        <HeroArtwork2 />
      </div>
      {/* <ContainerScroll > */}
      {/* <FadedBackgroundLogo /> */}
      {/* phone instead of ContainerScreen - on Mobile */}
      {/* <Lamp> <FadedBackgroundLogo /> </Lamp> */}
      {/* <FadedBackgroundLogo /> */}
      {/* a container section with 2 images floating one on top of the other */}
      {/* <HeroArtwork1 /> */}
    </div>
  )
}