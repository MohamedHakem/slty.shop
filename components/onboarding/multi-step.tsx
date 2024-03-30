"use client"

import { useEffect, useState } from "react";
import { Step } from "./step";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "../ui/button";
import { Building2, Store } from "lucide-react";
import { EntityForm } from "./entity-form";
import { EntityType } from "@prisma/client";
import Link from "next/link";

// Usage
export default function MultiStep() {
  let [step, setStep] = useState(0);
  // let [entityType, setEntityType] = useState<EntityType | "">("")
  let [entityType, setEntityType] = useState<EntityType | undefined>(undefined)
  console.log("🚀 ~ before ~ entityType:", entityType)
  // pass the entityType to the next step's form, so we can use it to show different fields based on the user's choice, or just decide which form to show

  // check if it's already saved, if so, use it, if not, continue to step 1 as usual, but then save entityType in localStorage, in case user left between step 1 & 2

  // setStep(2) // let them go back to the step they left off at

  // useEffect(() => {
  //   // if (entityType === "" && typeof window !== "undefined") {
  //   if (typeof window !== "undefined") {
  //     console.log("useEffect ~ before ~ entityType: ", entityType);
  //     const savedEntityType: EntityType | null = localStorage.getItem("entityType") as EntityType | null;
  //     console.log("useEffect ~ after ~ savedEntityType: ", savedEntityType);
  //     if (savedEntityType !== null) setEntityType(savedEntityType);
  //   }
  // }, [entityType]);

  // use useEffect or something to go to the step saved in localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && step === 0) {
      const savedStep = localStorage.getItem("currentStep")
      const savedEntityType = localStorage.getItem("entityType")
      console.log("🚀 ~ useEffect ~ savedStep:", savedStep)
      console.log("🚀 ~ useEffect ~ savedEntityType:", savedEntityType)
      if (entityType === undefined && savedEntityType) {
        setEntityType(savedEntityType as EntityType)
      }
      if (savedStep) {
        setStep(parseInt(savedStep))
      } else (
        setStep(1)
      )
    }
  }, [entityType, step])

  // if user is coming from an interrupted session, and they're already in step 2, then we need to show the form with the user's info prefilled, and the entityType saved in localStorage should be used to show the correct form

  // use localStorage to track the last active step for the user, so we can show them the correct step when they come back, and also to prefill the form with the user's info
  // do it below, copilot

  // check user's Entity to see what info is missing, and show the step accordingly, and prefill the form with the user's info

  const handleBack = () => setStep(step < 2 ? step : step - 1)

  const handleContinue = () => {
    console.log("🚀 ~ MultiStep ~ handleContinue ~ chosen entityType is: ", entityType)

    // save entityType in localStorage
    if (typeof window !== "undefined" && entityType) {
      localStorage.setItem("entityType", entityType)
      localStorage.setItem("currentStep", (step + 1).toString())
    }

    // setStep(step > 4 ? step : step + 1)
    setStep(step + 1)
  }

  const handleValueChange = (value: EntityType) => {
    console.log("~ MultiStep ~ handleValueChange ~ value: ", value)
    setEntityType(value)
  }

  console.log("🚀 ~ body render ~ entityType:", entityType)
  console.log("🚀 ~ body render ~ step: ", step)


  // put if onboarding is complete or not in the localStorage, and check it here, if it's complete, redirect to dashboard, if not, continue with onboarding
  // if (typeof window !== "undefined") {
  //   const onboardingComplete = localStorage.getItem("onboardingComplete")
  //   if (onboardingComplete) {
  //     // redirect to dashboard
  //   }
  // }


  return (
    // <div className="flex min-h-full flex-1 flex-col items-center justify-center p-4 backdrop-blur-xl sm:aspect-[4/3] md:aspect-[2/1]">
    <div dir="rtl" className="flex flex-col flex-1">
      <div className="mx-auto w-full md:min-w-[497px] max-w-2xl bg-white">
        <div className="flex w-full justify-between items-center rounded p-8 pt-4 transition-all duration-200 ease-in-out">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} isLast={true} />
          {/* <Step step={4} currentStep={step} /> */}
        </div>
        {/* a beautifully designed 2 choices with a main question asking the user what type of things they sell, whether they're a company or a shop: and then giving those 2 options with examples */}
        {/* Dynamic content based on `step` */}
        {/* a beautifully designed 2 choices with a main question asking the user what type of things they sell, 
            whether they're a company or a shop: and then giving those 2 options with examples, it's one question but has 2 parts, maybe one main and one smaller size below
            but the point is, I want to know whether the user is a company or a shop, so I can promote different offers in their dashboard, a company usually is an agency selling real estate or cars 
            etc, a shop is more like fashion or shoes or cloths, so I need to know this, so it's a single question, and the 2 options should have examples in smaller size with icons 
            and border indicating the option they clicked or choose, all this should be done in step 1 */}

        {step === 1 && (
          <div className="px-8 transition-all duration-200 ease-in-out">
            <div className="flex flex-col w-full items-center justify-center mb-4">
              <h2 className="text-gray-500">قولنا عن اللي بتبيعه</h2>
              <p className="mt-2 text-lg font-semibold text-gray-600">هل انت شركة أم متجر؟</p>
            </div>
            <RadioGroup dir="rtl" defaultValue={entityType} onValueChange={handleValueChange} className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 mt-8">
              {/* {console.log("entityType: ", entityType)} */}
              <div className="transition-all duration-200 ease-in-out">
                <RadioGroupItem value={EntityType.COMPANY} id={EntityType.COMPANY} className="peer sr-only" />
                <Label
                  htmlFor={EntityType.COMPANY}
                  className="flex flex-col items-center justify-between cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Building2 size={32} color={entityType === EntityType.COMPANY ? "#FF5028" : undefined} />
                  <span className="text-base mt-1">
                    شركة
                    او فرد
                  </span>
                  <span className="mt-3 text-xs text-gray-500">مثال: عقارات، سيارات، أجهزة، ...الخ</span>
                </Label>
              </div>
              <div className="transition-all duration-200 ease-in-out">
                <RadioGroupItem value={EntityType.SHOP} id={EntityType.SHOP} className="peer sr-only" />
                <Label
                  htmlFor={EntityType.SHOP}
                  className="flex flex-col items-center justify-between cursor-pointer rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Store size={32} color={entityType === EntityType.SHOP ? "#FF5028" : undefined} />
                  <span className="text-base">متجر</span>
                  <span className="mt-3 text-xs text-gray-500">مثال: أحذية، ملابس، موضة، ...الخ</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {step === 2 && entityType && (
          <EntityForm entityType={entityType} handleContinue={handleContinue} handleBack={handleBack} />
        )}

        {/* in step === 3, show a congratulations message celebrating the user, and a button to add their first Ad!  */}
        {step === 3 && (
          <div className="p-8">
            <div className="flex flex-col gap-20 items-center justify-center">
              <div className="flex flex-col gap-6 items-center justify-center">
                <h2 className="text-2xl text-gray-500">تهانينا!</h2>
                <p className="text-2xl font-semibold text-gray-600">تم أنشاء حسابك بنجاح!</p>
              </div>
              <Link href={"/dashboard"} className="w-full">
                <Button
                  size={"xxl"}
                  onClick={handleContinue}
                  className="w-full duration-200 flex items-center justify-center rounded-md bg-primary py-2 px-6 font-medium tracking-tight text-white text-xl transition"
                >
                  نشر أول
                  {entityType === EntityType.COMPANY ? " إعلان" : " منتج"}
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* {step > 1 && (
          <div className="space-y-2 px-8">
            <div className="h-4 w-5/6 rounded bg-neutral-100" />
            <div className="h-4 rounded bg-neutral-100" />
            <div className="h-4 w-4/6 rounded bg-neutral-100" />
          </div>
        )} */}

        {/* remove the below when you refactor all steps into their own components/forms  */}
        {step === 1 && (
          <div className="px-8 pb-8">
            <div className="mt-10 flex flex-col gap-3 justify-between items-center">
              <Button
                size={"xxl"}
                onClick={handleContinue}
                className={`${step > 4 ? "pointer-events-none opacity-50" : ""
                  } w-full duration-200 flex items-center justify-center rounded-md bg-primary py-2 px-6 font-medium tracking-tight text-white text-xl transition`}
              >
                إستمرار
              </Button>
              <Button
                size={"xl"}
                variant={"ghost"}
                onClick={handleBack}
                className={`${step === 1 ? "pointer-events-none opacity-50" : ""
                  } w-full duration-200 rounded px-3 py-2 text-lg text-neutral-400 transition hover:text-neutral-700`}
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
