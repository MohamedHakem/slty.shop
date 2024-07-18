"use client"

import { ChangeEvent, useRef, useState } from "react"
import { FcCheckmark } from "react-icons/fc"

export const ClaimShopName = () => {
  const inputRef = useRef(null);
  const [shopName, setShopName] = useState("")
  console.log("🚀 ~ ClaimShopName ~ shopName:", shopName)
  // const [shopNameError, setShopNameError] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  const handleShopName = (e: ChangeEvent<HTMLInputElement>) => {
    setShopName(e.target.value)
    console.log("🚀 ~ ClaimShopName ~ handleShopName:", e.target.value)
    console.log("🚀 ~ ClaimShopName ~ event.target width:", e.target)
    // setShopNameError(false)
    // setLoading(true)
    // setError(false)
  }


  // const getInputWidth = () => {
  //   if (inputRef.current) {
  //     const inputText = inputRef.current.value || 'myshop'; // Fallback to placeholder if input is empty
  //     const textWidth = getTextWidth(inputText); // Calculate width of input text
  //     return `${textWidth}px`; // Return width as a string
  //   }
  //   return 'auto'; // Default width if inputRef is not ready
  // };

  // const getTextWidth = (text: any) => {
  //   const canvas = document.createElement('canvas'); // Create a canvas element
  //   const context = canvas.getContext('2d'); // Get 2D rendering context
  //   if (context) {
  //     context.font = getComputedStyle(inputRef.current).font; // Get font styles from input
  //     const metrics = context.measureText(text); // Measure text width
  //     return metrics.width + 8; // Add some padding for better visual appearance
  //   }
  //   return 0; // Default width if context is not ready
  // };



  return (
    <div className="text-center p-2 items-center w-full">
      <div className="flex flex-col max-w-lg w-full mx-auto items-center h-full gap-2">
        {/* <div className="flex gap-4 h-6 mt-2 text-center relative">
          <div className="flex gap-3 text-center justify-center items-center">
            <span className="flex rounded-full w-[20px] h-[20px] bg-green-500 items-center justify-center">
              <FcCheckmark color="#ffffff" size={12} strokeWidth={5} />
            </span> 
             <p dir={"rtl"} className="">احجز اسم متجرك قبل فوات الأوان!</p> 
              <div className="flex gap-2">
              <span className="flex rounded-full w-[20px] h-[20px] bg-green-500 items-center justify-center">
                <FcCheckmark color="#ffffff" size={12} strokeWidth={5} />
              </span>
              <p>الدومين مجاني</p>
            </div>
          </div>
        </div> */}
        <div dir={"ltr"} className="max-w-lg w-full p-3 mx-auto flex items-center gap-x-2 h-16 justify-between bg-white rounded-[64px] border border-primaryBorder focus-within:border-gray-gray5 focus-within:shadow-focus-border transition-all">
          <div className="flex items-center gap-x-2">
            <div className="bg-primary p-[10px] rounded-full">
              <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="-169.66 -51.35 784.52 661.48">
                <path d="M 613.648 418.616 L 575.358 99.416 C 565.058 13.476 492.008 -51.354 405.438 -51.354 L 39.728 -51.354 C -46.842 -51.354 -119.892 13.476 -130.192 99.416 L -168.442 418.616 C -174.262 467.166 -159.002 515.996 -126.532 552.566 C -94.102 589.166 -47.432 610.126 1.478 610.126 L 443.728 610.126 C 492.598 610.126 539.268 589.166 571.738 552.566 C 604.168 516.006 619.468 467.176 613.648 418.616 Z M 508.758 497.096 C 491.378 516.676 467.398 527.446 441.258 527.446 L 3.958 527.446 C -22.222 527.446 -46.212 516.676 -63.542 497.096 C -80.922 477.516 -88.742 452.436 -85.642 426.446 L -47.822 110.826 C -42.392 65.536 -3.872 31.326 41.778 31.326 L 403.398 31.326 C 449.038 31.326 487.568 65.526 492.998 110.826 L 530.858 426.446 C 533.958 452.436 526.088 477.516 508.758 497.096 Z"
                  fill="#FFF" transform="matrix(1, 0, 0, 1, 0, -5.684341886080802e-14)" />
                <path d="M 443.508 137.257 C 437.488 128.027 428.238 121.697 417.458 119.427 C 406.658 117.157 395.658 119.227 386.428 125.237 C 276.318 197.047 169.158 197.037 58.838 125.227 C 49.608 119.217 38.578 117.147 27.808 119.437 C 17.028 121.717 7.788 128.057 1.778 137.287 C -4.232 146.517 -6.292 157.537 -4.012 168.317 C -1.732 179.097 4.608 188.337 13.838 194.347 C 82.778 239.227 153.058 261.977 222.728 261.977 C 292.408 261.977 362.638 239.217 431.478 194.327 C 440.708 188.307 447.038 179.057 449.308 168.277 C 451.588 157.507 449.528 146.487 443.508 137.257 Z"
                  fill="#FFF" transform="matrix(1, 0, 0, 1, 0, -5.684341886080802e-14)" />
              </svg>
            </div>
            <div className="flex items-center">
              {/* <div className="relative"> */}
              <input
                placeholder="myShop"
                value={shopName}
                onChange={(e) => handleShopName(e)}
                // style={{ width: getInputWidth(), minWidth: '6ch' }}
                // ref={inputRef}
                className="flex-1 font-normal lg:text-2xl w-[92px] outline-none text-lg placeholder:text-gray-gray3 placeholder:font-normal text-primary"
              />
              {/* </div> */}
              <span className="lg:text-2xl text-lg">.slty.shop</span>
            </div>
          </div>
          <div className="bg-primary rounded-full">
            <button className="border font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-base h-10  w-10 bg-gray-gray9 text-white border-gray-gray9 hover:bg-gray-gray8  " type="submit" aria-label="Submit">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-4 h-6 mt-1 text-center relative">
          <div className="flex gap-2 text-center text-lg font-medium justify-center items-center">
            <p className="hidden md:block">
              احجز اسم متجرك قبل فوات الأوان
              {" "}<span className="text-2xl">🚀</span>{" "}
            </p>
            <p className="block md:hidden">
              دومين مجاني
              {" "}<span className="text-2xl">🚀</span>{" "}
              احجزه قبل فوات الأوان!</p>
          </div>
        </div>
      </div>
    </div>)
}
