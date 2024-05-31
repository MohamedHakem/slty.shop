"use client"

import { useEffect, useState } from "react";
import { Step } from "./step";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "../ui/button";
import { Building2 } from "lucide-react";
import { EntityType } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const AddNewItemMultiStep = () => {
  let [step, setStep] = useState(0);
  const [category, setCategory] = useState("")
  
  console.log("[AddNewItemMultiStep] category: ", category)
  
  const categories = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
    {
      value: "next2.js",
      label: "Next2.js",
    },
    {
      value: "sveltekit2",
      label: "SvelteKit2",
    },
    {
      value: "nuxt2.js",
      label: "Nuxt2.js",
    },
    {
      value: "remix2",
      label: "Remix2",
    },
    {
      value: "astro2",
      label: "Astro2",
    },
    {
      value: "next3.js",
      label: "Next3.js",
    },
    {
      value: "sveltekit3",
      label: "SvelteKit3",
    },
    {
      value: "nuxt3.js",
      label: "Nuxt3.js",
    },
    {
      value: "remix3",
      label: "Remix3",
    },
    {
      value: "astro3",
      label: "Astro3",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined" && step === 0) {
      const savedStep = localStorage.getItem("currentStep")
      const savedEntityType = localStorage.getItem("entityType")
      if (category === "" && savedEntityType) {
        setCategory(savedEntityType as EntityType)
      }
      if (savedStep) {
        setStep(parseInt(savedStep))
      } else (
        setStep(1)
      )
    }
  }, [step, setCategory, category])

  const handleBack = () => setStep(step < 2 ? step : step - 1)

  const handleContinue = () => {
    if (typeof window !== "undefined" && category) {
      localStorage.setItem("category", category)
      localStorage.setItem("currentStep", (step + 1).toString())
    }
    setStep(step + 1)
  }

  const handleValueChange = (value: EntityType) => setCategory(value)

  return (
    <div dir="rtl" className="flex flex-col flex-1">
      {/* <div className="mx-auto w-full md:min-w-[497px] max-w-2xl bg-white"> */}
      <div className="mx-auto w-full md:min-w-[400px] max-w-2xl bg-white">
        <div className="flex w-full justify-between items-center rounded-xl p-4 transition-all duration-200 ease-in-out">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} isLast={true} />
        </div>

        {step === 1 && (
          <div className="p-4 pt-0 transition-all duration-200 ease-in-out">
            <div className="flex flex-col w-full items-center justify-center mb-2">
              <h1 className="mt-2 text-lg font-semibold text-gray-600">اختر فئة</h1>
            </div>
            <div className="relative"> 
              <div dir="rtl" className="grid grid-cols-3 sm:grid-cols-4 max-h-[380px] gap-4 mt-4 p-4 overflow-auto h-[380px] md:h-auto border border-primaryBorder rounded-2xl">
                {categories.map((c, i) => (
                  <div key={i}>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex flex-col items-center justify-between cursor-pointer rounded-xl border-2 border-muted bg-popover p-4 active:scale-90 transition-all duration-100  ease-in-out hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                          <Building2 size={32} color={category === EntityType.COMPANY ? "#FF5028" : undefined} />
                          <span className="text-base mt-1">{c.label}</span>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent hideWhenDetached={true} avoidCollisions={true} sticky={"partial"} className="w-full p-4">
                        {/* <RadioGroup dir="rtl" defaultValue={category} onValueChange={handleValueChange} className="grid grid-cols-3 gap-4 mt-8"> */}
                        <RadioGroup dir="rtl" defaultValue={category} onValueChange={handleValueChange} className="grid grid-flow-row-dense grid-cols-3">
                          {categories.slice(0, 4).map((subc, index) => (
                            <div key={index} className="transition-all duration-200 ease-in-out">
                              <RadioGroupItem value={subc.value} id={subc.value} className="peer sr-only" />
                              <Label htmlFor={subc.value} className="flex flex-col items-center justify-between cursor-pointer rounded-xl border-2 border-muted bg-popover p-4 active:scale-90 transition-all duration-100 ease-in-out hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary" >
                                <span className="text-base mt-1">{subc.label}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
              <div className="after:bg-gradient-to-t from-[#ddd] to-transparent after:w-full after:h-10 after:absolute after:left-0 after:bottom-0 after:rounded-b-2xl"></div>
            </div>
          </div>
        )} 



        {step === 1 && (
          <div className="px-8 pb-1">
            <div className="mt-4 flex flex-col gap-3 justify-between items-center">
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
