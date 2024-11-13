import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { apiAuthPrefix } from "@/routes";
import { EnhancedNextRequest } from "@/types/enhancedNextRequest";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function minDelay<T>(promise: Promise<T>, ms: number) {
  let delay = new Promise((resolve) => setTimeout(resolve, ms));
  let [p] = await Promise.all([promise, delay]);

  return p;
}

export function enhanceRequest(request: EnhancedNextRequest) {
  const pathname = request.nextUrl.pathname;
  request.isPosthog = pathname.startsWith("/ingest");
  request.isApiAuthRoute = pathname
    .replace(/^\/[a-z]{2}\//, "/")
    .startsWith(apiAuthPrefix);
}

// export function enhanceRequest(request: EnhancedNextRequest) {
//   const pathname = request.nextUrl.pathname;
//   console.log("🚀 ~ enhanceRequest ~ pathname ~ before enhancing:", pathname);

//   // Remove lang prefix (if exists) before checking for external URL
//   const pathWithoutLang = pathname.replace(/^\/[a-z]{2}\//, "");
//   // console.log("🚀 ~ enhanceRequest ~ pathWithoutLang:", pathWithoutLang);
//   // console.log(
//   //   "🚀 ~ enhanceRequest ~ pathname after creating pathWithoutLang:",
//   //   pathname,
//   // );

//   // Check if the pathname (after removing the lang prefix) is an external URL (i.e., starts with http:// or https://)
//   // Handle relative URLs
//   const isExternal = isExternalUrl(pathWithoutLang);

//   // console.log("🚀 ~ enhanceRequest ~ isExternal:", isExternal);

//   // enhance it only if it's internal
//   if (!isExternal) {
//     console.log("🚀 ~ enhanceRequest ~ isExternal inside:", isExternal);
//     request.isPosthog = pathWithoutLang.startsWith("/ingest");
//     request.isApiAuthRoute = pathWithoutLang.startsWith(apiAuthPrefix);
//   } else {
//     request.nextUrl.pathname = pathWithoutLang;
//     console.log(
//       "🚀 ~ Enhanced request.nextUrl.pathname:",
//       request.nextUrl.pathname,
//     );
//   }
// }

export function isExternalUrl(url: string): boolean {
  // If the URL is absolute (starts with "http://" or "https://"), it's external
  if (
    url.startsWith("http") ||
    url.startsWith("/en/http") ||
    url.startsWith("/ar/http")
  ) {
    console.log("🚀 ~ isExternalUrl ~ url is external");
    return true;
  }

  // Treat as internal if it's a relative path
  console.log("🚀 ~ isExternalUrl ~ url is internal");
  return false;
}

// interface TrustedDomains {
//   trustedDomains: string[];
// }

// export function isExternalUrl(url: string): boolean {
//   const trustedDomains: TrustedDomains = {
//     trustedDomains: ["localhost", "slty.shop"],
//   };

//   // If the URL is relative, treat it as internal
//   if (!url.startsWith("/en/http") && !url.startsWith("/ar/http")) {
//     console.log("🚀 ~ isExternalUrl ~ internal");
//     return false; // Treat as internal if it's a relative path
//   }

//   console.log("🚀 ~ isExternalUrl ~ external");
//   try {
//     const parsedUrl = new URL(url);
//     // const hostname = parsedUrl.hostname;

//     return true;

//     // Check if the hostname matches any trusted domain
//     // return !trustedDomains.trustedDomains.some((domain) => hostname === domain);
//   } catch (error) {
//     console.error("🚨 Invalid URL provided to isExternalUrl:", url, error);
//     return true; // Treat as external if there's a parsing error
//   }
// }
