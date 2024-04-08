"use client"

import { motion } from "framer-motion";
import { CheckIcon } from "@/components/onboarding/check-icon"

export const Step = ({ step, currentStep, isLast }: { step: number; currentStep: number, isLast?: boolean }) => {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
        ? "inactive"
        : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.15,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 rounded-full bg-primary border-3 border-primary"
      />

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#fff", // neutral
            borderColor: "#e5e5e5", // neutral-200
            color: "#a3a3a3", // neutral-400
          },
          active: {
            backgroundColor: "#fff",
            // borderColor: "#3b82f6", // blue-500
            // color: "#3b82f6", // blue-500
            borderColor: "#FF5028", // blue-600
            color: "#FF5028", // blue-600
          },
          complete: {
            backgroundColor: "#FF5028", // blue-500
            // borderColor: "#3b82f6", // blue-500
            // color: "#3b82f6", // blue-500
            borderColor: "#FF5028",
            color: "#FF5028",
          },
        }}
        transition={{ duration: 0.2, type: "tween", ease: "easeInOut", delay: 0.1 }}
        className={`relative flex ${isLast ? "w-14 h-14" : "w-12 h-12"} items-center justify-center rounded-full border-2 font-semibold`}
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon className="h-8 w-8 text-white" />
          ) : (
            <span className={isLast ? "text-2xl" : ""}>{isLast ? '🎉' : step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}