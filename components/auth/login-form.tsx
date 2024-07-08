"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/auth/login";
import { LoadingButton } from "../ui/loading-button";
// import { Label } from "../ui/label";

export const LoginForm = ({ locale }: { locale?: string }) => {
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          // TODO: remove the success state, user should login immedtiately on success (not "notified" for a correct credentials)
          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <CardWrapper
      headerLabel="مرحبا بعودتك"
      backButtonLabel="ليس لديك حساب؟"
      backButtonHref="/register"
      showSocial
      showSeparator
      className="lg:border-0"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5"
          dir={"rtl"}
        >
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="123456"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            disabled={isPending}
                            autoComplete="email"
                            autoFocus
                            type="email"
                            placeholder="البريد الالكتروني"
                            id="floating-input-email"
                            className="peer block h-[54px] w-full p-4 placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:pb-2 focus:pt-7 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          ></Input>
                          <label
                            htmlFor="floating-input-email"
                            className="pointer-events-none absolute start-0 top-0 truncate p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1 peer-focus:pt-[10px] peer-focus:text-xs peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:pt-[10px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                          >
                            البريد الالكتروني
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mt-2">
                      <FormControl>
                        <div className="relative">
                          <Input
                            {...field}
                            disabled={isPending}
                            autoComplete="current-password"
                            type="password"
                            placeholder="كلمة السر"
                            id="floating-input-password"
                            className="peer block h-[54px] w-full p-4 placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:pb-2 focus:pt-7 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
                          ></Input>
                          <label
                            htmlFor="floating-input-password"
                            className="pointer-events-none absolute start-0 top-0 truncate p-4 text-sm transition duration-100 ease-in-out peer-focus:-translate-y-1 peer-focus:pt-[10px] peer-focus:text-xs peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:pt-[10px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                          >
                            كلمة السر
                          </label>
                          <Button
                            size="sm"
                            variant="link"
                            asChild
                            className="absolute left-3 top-[10px] !mt-0 w-fit justify-end px-0 font-normal"
                          >
                            <Link
                              prefetch={false}
                              href={`/${locale}/reset`}
                              className="font-normal"
                            >
                              نسيت كلمة السر؟
                            </Link>
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <LoadingButton
            size={"xxl"}
            disabled={isPending}
            loading={isPending}
            type="submit"
            className="mt-4 w-full text-xl"
          >
            {showTwoFactor ? "تأكيد" : "دخول"}
          </LoadingButton>
        </form>
      </Form>
    </CardWrapper>
  );
};
