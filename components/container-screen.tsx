"use client";

import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";


export const ContainerScreen = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  // const [isMobile, setIsMobile] = React.useState(false);

  return (
    <div
      className="h-full md:h-full flex items-center justify-center relative p-10 md:p-10"
      ref={containerRef}
    >
      <div className="w-full relative">
        <Card>{children}</Card>
      </div>
    </div>
  );
};


export const Card = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-4xl mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
