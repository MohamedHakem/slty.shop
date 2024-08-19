// import { motion } from "framer-motion"

export default function UnlimitedSubdomains() {
  const domains = [
    'customer.com',
    'customer.slty.shop',
    'janedoe.com',
    'jane.slty.shop',
    'johndoe.com',
    'john.slty.shop'
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-transparent">
      <div className="w-full space-y-2">
        {domains.map((domain, index) => (
          // <motion.div
          // <div
          //   key={domain}
          //   className={`bg-white rounded-lg shadow-md p-3 flex items-center w-[${(index + 1) * 236}px]`}
          //   // initial={{ opacity: 0, x: -50 }}
          //   // animate={{ opacity: 1, x: 0 }}
          //   // transition={{ delay: index * 0.1 }}
          // >
          //   <span className="text-gray-600">
          //     {domain}
          //     {" "}
          //     <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          //     </svg>
          //   </span>
          //   <div className="flex space-x-1">
          //     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          //     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          //     <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          //   </div>
          //   </div>
          <div
            key={domain}
            aria-hidden="true"
            // className="relative rounded-t-lg p-4 sm:p-2 z-10 opacity-100"
            className="relative mx-auto flex items-center bg-black shadow-md shadow-white/8 -mb-[15px] rounded-t-lg p-4 sm:p-2 z-10 opacity-100"
            style={{
              width: `calc(100% - ${48 * (6 - index)}px)`,
            }}
          >
            <div className="flex items-stretch space-x-2">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="flex items-center justify-center space-x-1 w-[304px] h-[38px] rounded-lg">
              <svg className="text-gray-900" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z" fill="currentColor"></path>
              </svg>
              <span className="text-gray-900 text-xs sm:text-xs md:text-sm lg:text-base font-normal">
                johndoe.com
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
