"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { EntityFormSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { LoadingButton } from "../ui/loading-button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { redirect } from "next/navigation";
import { createEntity } from "@/actions/entity";
import { EntityType } from "@prisma/client";

export const EntityForm = ({ entityType, handleContinue, handleBack }: { entityType: EntityType, handleContinue: () => void, handleBack: () => void }) => {
  console.log("🚀 ~ LoginForm ~ entityType:", entityType)

  const callbackUrl = "/dashboard";
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof EntityFormSchema>>({
    resolver: zodResolver(EntityFormSchema),
    defaultValues: { name: "", phone: "", desc: "", image: "" }
  });

  if (!user) return redirect("/login");
  console.log("🚀 ~ EntityForm ~ user:", user)

  const onSubmit = (values: z.infer<typeof EntityFormSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      // make a server action similar to login, but for adding the entity values to entity table in the db

      if (!user.id) return redirect("/login");
      createEntity(values, user.id, entityType, callbackUrl).then((data) => {
        if (data?.error) {
          // form.reset();
          setError(data.error);
        }
        if (data?.success) {
          form.reset();
          setSuccess(data.success);
          handleContinue()
          // go to next step in the parent or redirect to /congrats page/component, and within it redirect to /dashboard
        }
      }).catch(() => setError("حدث خطأ، حاول مرة أخري"));

      // login(values, callbackUrl)
      //   .then((data) => {
      //     if (data?.error) {
      //       form.reset();
      //       setError(data.error);
      //     }
      //     if (data?.success) {
      //       form.reset();
      //       setSuccess(data.success);
      //     }
      //   })
      //   .catch(() => setError("Something went wrong"));

      // go to next step in the parent component (multi-step wiz), put this inside the .then above
      // handleContinue()
    });
  };


  return (
    <CardWrapper
      showHeader={false}
      showBackButton={false}
      className="lg:border-0 max-w-full px-2 mt-6"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3"
          dir={"rtl"}
        >
          <div className="space-y-3">
            <>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          disabled={isPending}
                          autoComplete="name"
                          autoFocus
                          type="name"
                          placeholder={entityType === EntityType.COMPANY ? "اسم الشركة" : "اسم المتجر"}
                          id="floating-input-name"
                          className="peer h-[54px] p-4 block w-full placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none
                            focus:pt-7 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                        </Input>
                        <label
                          htmlFor="floating-input-name"
                          className="absolute top-0 start-0 p-4 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                            peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:pt-[10px]
                            peer-focus:text-xs peer-focus:-translate-y-1 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
                            peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:text-gray-400
                            peer-[:not(:placeholder-shown)]:pt-[10px]"
                        >
                          {entityType === EntityType.COMPANY ? "اسم الشركة" : "اسم المتجر"}
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desc"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          disabled={isPending}
                          // autoComplete=""
                          type="text"
                          // placeholder={entityType === "company" ? "وصف الشركة" : "وصف المتجر"}
                          placeholder="وصف"
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
                          وصف
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          disabled={isPending}
                          // autoComplete=""
                          type="tel"
                          placeholder="رقم الهاتف"
                          id="floating-input-phone"
                          className="peer h-[54px] p-4 block w-full placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none
                            focus:pt-7 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
                        </Input>
                        <label
                          htmlFor="floating-input-phone"
                          className="absolute top-0 start-0 p-4 text-sm truncate pointer-events-none transition ease-in-out duration-100 
                            peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:pt-[10px]
                            peer-focus:text-xs peer-focus:-translate-y-1 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs 
                            peer-[:not(:placeholder-shown)]:-translate-y-1 peer-[:not(:placeholder-shown)]:text-gray-400
                            peer-[:not(:placeholder-shown)]:pt-[10px]"
                        >
                          رقم الهاتف
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                    {/* <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal !mt-0 w-full justify-end"
                    >
                      <Link href="/reset" className="font-normal">
                        نسيت كلمة السر؟
                      </Link>
                    </Button> */}
                  </FormItem>
                )}
              />
            </>
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <div className="!mt-8 flex flex-col gap-3">
            <LoadingButton
              size={"xxl"}
              disabled={isPending}
              loading={isPending}
              type="submit"
              className="w-full text-xl"
            >
              تأكيد
            </LoadingButton>
            <Button
              size={"xl"}
              variant={"ghost"}
              onClick={handleBack}
              className="w-full duration-200 rounded px-3 py-2 text-lg text-neutral-400 transition hover:text-neutral-700">
              رجوع
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
