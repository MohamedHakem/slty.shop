"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import { LoginSeparator } from "@/components/auth/login-separator";
import { cn } from "@/lib/utils";

interface CardWrapperProps {
  children: React.ReactNode;
  showHeader?: boolean;
  headerLabel?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showBackButton?: boolean;
  showSocial?: boolean;
  showSeparator?: boolean;
  className?: string;
};

export const CardWrapper = ({
  children,
  showHeader = true,
  headerLabel,
  showBackButton = true,
  backButtonLabel,
  backButtonHref,
  showSocial,
  showSeparator,
  className
}: CardWrapperProps) => {
  return (
    <Card
      className={cn("flex flex-col justify-center max-w-[380px] w-full mx-auto rounded-lg border-0 shadow-none lg:border lg:border-gray-300", className)}>
      {showHeader && headerLabel && <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>}
      <CardContent className="pb-0">
        {showSocial && (<Social />)}
        {showSeparator && (<LoginSeparator />)}
        <div className="py-2">
          {children}
        </div>
      </CardContent>
      {showBackButton && backButtonLabel && backButtonHref && <CardFooter className="">
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>}
    </Card>
  );
};
