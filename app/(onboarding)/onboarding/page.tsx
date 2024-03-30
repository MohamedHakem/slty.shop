import MultiStep from "@/components/onboarding/multi-step";
import { SltyLogo } from "@/components/slty-logo";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
  const user = await currentUser();
  if (!user) redirect(`/login`)
  if (user?.entity?.owner_id) redirect(`/dashboard`)

  return (
    <div className="flex flex-col w-full md:w-auto">
      <SltyLogo style={1} dir="col" showText={false} className="pt-4 pb-12" iconSize={80} />
      <MultiStep />
    </div>
  );
}

export default OnboardingPage;