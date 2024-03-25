"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className="flex items-center w-full gap-x-2 py-2">
      <Button
        size="xl"
        className="w-full flex flex-row gap-2 border-gray-300"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <span className="font-light text-lg">Google المواصلة بإستخدام</span>
        <FcGoogle className="h-auto w-8" size={32} />
      </Button>
    </div>
  );
};
