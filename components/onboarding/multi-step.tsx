"use client";

import { useEffect, useState } from "react";
import { Step } from "./step";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Building2, Store } from "lucide-react";
import { EntityForm } from "./entity-form";
import { EntityType } from "@prisma/client";
import Link from "next/link";

export default function MultiStep() {
  let [step, setStep] = useState(0);
  let [entityType, setEntityType] = useState<EntityType | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined" && step === 0) {
      const savedStep = localStorage.getItem("currentStep");
      const savedEntityType = localStorage.getItem("entityType");
      if (entityType === undefined && savedEntityType) {
        setEntityType(savedEntityType as EntityType);
      }
      if (savedStep) {
        setStep(parseInt(savedStep));
      } else setStep(1);
    }
  }, [step, entityType]);

  // use localStorage to track the last active step for the user, so we can show them the correct step when they come back, and also to prefill the form with the user's info
  // check user's Entity to see what info is missing, and show the step accordingly, and prefill the form with the user's info

  const handleBack = () => setStep(step < 2 ? step : step - 1);

  const handleContinue = () => {
    // save entityType in localStorage
    if (typeof window !== "undefined" && entityType) {
      localStorage.setItem("entityType", entityType);
      localStorage.setItem("currentStep", (step + 1).toString());
    }
    setStep(step + 1);
  };

  const handleValueChange = (value: EntityType) => setEntityType(value);

  // put if onboarding is complete or not in the localStorage, and check it here, if it's complete, redirect to dashboard, if not, continue with onboarding

  return (
    <div dir="rtl" className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-2xl bg-white md:min-w-[497px]">
        <div className="flex w-full items-center justify-between rounded p-8 pt-4 transition-all duration-200 ease-in-out">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} isLast={true} />
        </div>
        {step === 1 && (
          <div className="px-8 transition-all duration-200 ease-in-out">
            <div className="mb-4 flex w-full flex-col items-center justify-center">
              <h2 className="text-gray-500">قولنا عن اللي بتبيعه</h2>
              <p className="mt-2 text-lg font-semibold text-gray-600">
                هل انت شركة أم متجر؟
              </p>
            </div>
            <RadioGroup
              dir="rtl"
              defaultValue={entityType}
              onValueChange={handleValueChange}
              className="mt-8 grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1"
            >
              <div className="transition-all duration-200 ease-in-out">
                <RadioGroupItem
                  value={EntityType.COMPANY}
                  id={EntityType.COMPANY}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={EntityType.COMPANY}
                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Building2
                    size={32}
                    color={
                      entityType === EntityType.COMPANY ? "#FF5028" : undefined
                    }
                  />
                  <span className="mt-1 text-base">شركة او فرد</span>
                  <span className="mt-3 text-xs text-gray-500">
                    مثال: عقارات، سيارات، أجهزة، ...الخ
                  </span>
                </Label>
              </div>
              <div className="transition-all duration-200 ease-in-out">
                <RadioGroupItem
                  value={EntityType.SHOP}
                  id={EntityType.SHOP}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={EntityType.SHOP}
                  className="flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Store
                    size={32}
                    color={
                      entityType === EntityType.SHOP ? "#FF5028" : undefined
                    }
                  />
                  <span className="text-base">متجر</span>
                  <span className="mt-3 text-xs text-gray-500">
                    مثال: أحذية، ملابس، موضة، ...الخ
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 2 && entityType && (
          <EntityForm
            entityType={entityType}
            handleContinue={handleContinue}
            handleBack={handleBack}
          />
        )}

        {/* <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={2000} /> */}
        {step === 3 && (
          <div className="p-8">
            <div className="flex flex-col items-center justify-center gap-20">
              <div className="flex flex-col items-center justify-center gap-6">
                <h2 className="text-2xl text-gray-500">تهانينا!</h2>
                <p className="text-2xl font-semibold text-gray-600">
                  تم أنشاء حسابك بنجاح!
                </p>
              </div>
              <Link prefetch={false} href={"/dashboard"} className="w-full">
                <Button
                  size={"xxl"}
                  onClick={handleContinue}
                  className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-2 text-xl font-medium tracking-tight text-white transition duration-200"
                >
                  نشر أول
                  {entityType === EntityType.COMPANY ? " إعلان" : " منتج"}
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* remove the below when you refactor all steps into their own components/forms  */}
        {step === 1 && (
          <div className="px-8 pb-8">
            <div className="mt-10 flex flex-col items-center justify-between gap-3">
              <Button
                size={"xxl"}
                onClick={handleContinue}
                className={`${
                  step > 4 ? "pointer-events-none opacity-50" : ""
                } flex w-full items-center justify-center rounded-md bg-primary px-6 py-2 text-xl font-medium tracking-tight text-white transition duration-200`}
              >
                إستمرار
              </Button>
              <Button
                size={"xl"}
                variant={"ghost"}
                onClick={handleBack}
                className={`${
                  step === 1 ? "pointer-events-none opacity-50" : ""
                } w-full rounded px-3 py-2 text-lg text-neutral-400 transition duration-200 hover:text-neutral-700`}
              >
                رجوع
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
