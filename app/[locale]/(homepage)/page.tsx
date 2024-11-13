import FeatureShowcase from "@/components/landing/feature-showcase";
import Hero1 from "@/components/landing/hero-1";
import Hero2 from "@/components/landing/hero-2";
import HowToUse from "@/components/landing/how-to-use";

export const dynamic = "force-static";
// export const revalidate = 3600

export default function Home() {
  return (
    <div dir="rtl" className="flex flex-col items-center">
      <Hero1 />
      {/* <Hero2 /> */}
      {/* <ClaimShopName /> */}
      <HowToUse />
      <FeatureShowcase />
      {/* Traditional Ecomm VS Slty platform (COST, TIME, FEATURES) 
      (check ShipFa.st, instatus.com, others) short similar to ShipFast, not long so the features can be in the view */}
      {/* Features */}
      {/* Wall of Love */}
      {/* Marketplace as a distribution channel */}
      {/* Our Clients! */}
      {/* Templates */}
      {/* Out Partners! */}
      {/* Newsletter or some offer or section */}
      {/* FAQ */}
    </div>
  );
}
