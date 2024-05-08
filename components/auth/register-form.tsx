"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper"
// import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/auth/register";
import { LoadingButton } from "../ui/loading-button";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "", password: "" }
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="حساب جديد"
      backButtonLabel="لديك حساب بالفعل؟"
      backButtonHref="/login"
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
                        className="peer h-[54px] p-4 block w-full placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none
                            focus:pt-7 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                      </Input>
                      <label
                        htmlFor="floating-input-email"
                        className="absolute top-0 start-0 p-4 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                            peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:pt-[10px]
                            peer-focus:text-xs peer-focus:-translate-y-1 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
                            peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:text-gray-400
                            peer-[:not(:placeholder-shown)]:pt-[10px]"
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
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isPending}
                        autoComplete="current-password"
                        type="password"
                        placeholder="كلمة السر"
                        id="floating-input-password"
                        className="peer h-[54px] p-4 block w-full placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none
                            focus:pt-7 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                      </Input>
                      <label
                        htmlFor="floating-input-password"
                        className="absolute top-0 start-0 p-4 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                            peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:pt-[10px]
                            peer-focus:text-xs peer-focus:-translate-y-1 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
                            peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:text-gray-400
                            peer-[:not(:placeholder-shown)]:pt-[10px]"
                      >
                        كلمة السر
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <LoadingButton
            size={"xxl"}
            disabled={isPending}
            loading={isPending}
            type="submit"
            className="w-full text-lg"
          >
            انشئ حسابك
          </LoadingButton>
        </form>
      </Form>
    </CardWrapper>
  );
};
