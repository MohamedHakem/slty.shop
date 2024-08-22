import FeatureShowcase from "@/components/landing/feature-showcase";
import Hero1 from "@/components/landing/hero-1";
import HowToUse from "@/components/landing/how-to-use";

export const dynamic = "force-static";
// export const revalidate = 3600

export default function Home() {
  return (
    <div dir="rtl" className="flex flex-col items-center">
      <Hero1 />
      <HowToUse />
      <FeatureShowcase />
      {/* Traditional Ecomm VS Slty platform (COST, TIME, FEATURES) 
      (check shipfa.st, instatus.com, others) short similar to shipfast, not long so the features can be in the view */}
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
