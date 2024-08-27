import FeatureCard, { FeatureCardProps } from "@/components/landing/feature-card";

export default function FeatureSection({
  title,
  description,
  features,
}: {
  title: string;
  description?: string;
  features: FeatureCardProps[];
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full pt-3 pb-4 m-auto max-w-[72rem] gap-4 md:pb-6">
      <h2 className="text-4xl md:text-6xl text-black/90 font-semibold text-center md:leading-[2.75rem]">
        {title}
      </h2>

      {description ?
        <h3 className="text-2xl md:text-3xl text-lightBlack/60 font-semibold text-center md:leading-[2.75rem] md:mt-4">
          {description}
        </h3>
        : <></>
      }

      <div className="mx-auto mt-10 grid grid-cols-1 gap-8 md:max-w-full md:grid-cols-2 md:px-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imgSrc={feature.imgSrc}
            bgColorHex={feature.bgColorHex}
            artwork={feature.artwork}
            bgColor1={feature.bgColor1}
            bgColor2={feature.bgColor2}
            // width={(index % 3 === 2 || (index === features.length - 1 && index % 3 !== 0 && index % 3 !== 1)) ? 1 : 0.5}
            width={(index % 3 === 2 || (index === features.length - 1 && (index % 3 === 2 || (index % 3 === 0 && index === features.length - 1)))) ? 1 : 0.5}
          />
        ))}
      </div>
    </div>
  )
}