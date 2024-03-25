import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["600"],
// });

interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      {/* <p className="text-5xl font-medium text-darkBlue"> */}
      <p className="text-5xl font-medium">
        {label}
      </p>
    </div>
  );
};
