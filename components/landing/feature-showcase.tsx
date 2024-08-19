import { FeaturesList } from "@/data/featuresList";
import FeatureSection from "@/components/landing/feature-section";

export default function FeatureShowcase() {
  return ( 
  <div className="h-full w-full flex flex-col gap-32 px-4 py-20 md:py-40 bg-[#f5f5f7]">
    {FeaturesList.map((feature, index) => (
      <FeatureSection
        key={index}
        title={feature.title}
        description={feature.description}
        features={feature.features}
      />
    ))}
  </div>
  )
}