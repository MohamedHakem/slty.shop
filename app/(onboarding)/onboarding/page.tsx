import MultiStep from "@/components/onboarding/multi-step";
import { OnboardingForm } from "@/components/onboarding/onboarding-form";
import { SltyLogo } from "@/components/slty-logo";

const OnboardingPage = () => {
  return (
    <div className="flex flex-col w-full md:w-auto">
      <SltyLogo style={1} dir="col" showText={false} className="pt-4 pb-12" iconSize={80} />
      {/* <h1>ONBOARDING</h1> */}
      {/* <OnboardingForm /> */}
      <MultiStep />
    </div>
  );
}

export default OnboardingPage;