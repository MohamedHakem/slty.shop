import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { CustomMiddleware } from "@/middlewares/chain";
import { getLocale } from "@/lib/getLocale";
import { getMessageForRateLimited } from "@/lib/getMessageForRateLimited";
import { Ratelimit } from "@upstash/ratelimit";
import { EnhancedNextRequest } from '@/types/enhancedNextRequest';
import { enhanceRequest } from '@/lib/utils'

export function withRateLimitMiddleware(ratelimit: Ratelimit) {
  // HOF/Closure
  return function (middleware: CustomMiddleware): CustomMiddleware {
    return async (
      request: EnhancedNextRequest,
      event: NextFetchEvent,
      response: NextResponse,
    ) => {
      // add extra properties to the request object once and pass to all middlewares
      enhanceRequest(request)

      if (process.env.NODE_ENV !== "production") {
        console.log("🚀 ~ [RateLimitMiddleware] Skipping rate limiting in dev mode.");
        return middleware(request, event, response);
      }

      const { success } = await ratelimit.limit(request.ip ?? "127.0.0.1");
      if (!success && !request.isPosthog && !request.isApiAuthRoute) {
        const message = await getMessageForRateLimited(getLocale(request));
        // or redirect to a /rate-limited or /404 page with the bear page
        return new Response(message, { status: 429 });
      }

      return middleware(request, event, response);
    };
  };
}
