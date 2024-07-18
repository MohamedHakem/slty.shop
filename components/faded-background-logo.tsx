"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

import { Almarai } from "next/font/google";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";


const AlmaraiFont = Almarai({ weight: ["300", "400", "700", "700", "800"], subsets: ["arabic"] })

export const FadedBackgroundLogo = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const windowSize = useWindowSize();
  const isBigScreen = windowSize.width ? windowSize.width > 768 : false;
  console.log("isBigScreen: ", isBigScreen)

  // const rotate = useTransform(scrollYProgress, [0, 0.1], [30, 0]);
  // const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 2], [0, -200]);

  return (
    <div
      className="h-[12rem] md:h-[17rem] flex items-center justify-center relative p-2"
      ref={containerRef}
    >
      <div className="w-full h-full relative">
        <Header translate={isBigScreen ? translate : 0} />
      </div>
    </div>
  );
};

export const Header = ({ translate }: any) => {
  // console.log("Header translateY: ", translate)
  return (
    // <motion.div
    //   // style={{
    //   //   translateY: translate,
    //   // }}
    //   className="div mx-auto text-center leading-[260px]"
    // >
    //   <p className={cn("text-black/10 text-[320px] font-bold tracking-[2px]", AlmaraiFont.className)}>سلتي</p>
    // </motion.div>
    <motion.h1
      // initial={{ opacity: 0.7, y: 50 }}
      // whileInView={{ opacity: 1, y: 50 }}
      // transition={{
      //   delay: 0.1,
      //   duration: 0.4,
      //   ease: "easeInOut",
      // }}
      className="text-4xl md:text-7xl text-center md:pt-16 h-full 
        text-primary/40 tracking-[0px]"
      // className="bg-gradient-to-b from-primary/10 via-primary/50 to-primary/90 py-4 
      // bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      <p className={cn("text-[120px] md:text-[320px] font-black md:tracking-[2px] md:h-[400px]", AlmaraiFont.className)}>سلتي</p>
    </motion.h1>
  );
};