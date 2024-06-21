import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { apiAuthPrefix } from "@/routes";
import { EnhancedNextRequest } from '@/types/enhancedNextRequest';

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
