"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/auth/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useCurrentUser } from "@/hooks/use-current-user";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  //
  //
  // from session, if not, then get from db
  // test with dev server again, or just deploy and test, add all env vars and update callback url in google console
  //  
  const user = useCurrentUser()

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    // check if the user email is already verified, before trying to check the verification token
    if (user?.emailVerified) {
      setSuccess("Email already verified!");
      return;
    }

    newVerification(token)
      .then((data) => {
        console.log("🚀 ~ newVerification(token).then() ~ data:", data)
        console.log("🚀 ~ NewVerificationForm(token).then() ~ user:", user)
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
  }, [success, error, token, user]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="جاري التحقق"
      backButtonLabel="العودة الي تسجيل الدخول"
      backButtonHref="/login"
      showSeparator={false}
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && (
          <BeatLoader />
        )}
        {error && (
          <FormError message={error} />
        )}
        {success && (
          <FormSuccess message={success} />
        )}
      </div>
    </CardWrapper>
  )
}