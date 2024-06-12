import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { CustomMiddleware } from "@/middlewares/chain";
import { getLocale } from "@/lib/getLocale";
import { getMessageForRateLimited } from "@/lib/getMessageForRateLimited";
import { Ratelimit } from "@upstash/ratelimit";

export function withRateLimitMiddleware(ratelimit: Ratelimit) { // HOF / Closure
  return function (middleware: CustomMiddleware): CustomMiddleware {
    return async (
      request: NextRequest,
      event: NextFetchEvent,
      response: NextResponse,
    ) => {
      const ip = request.ip ?? "127.0.0.1";
      const { success } = await ratelimit.limit(ip);
      const isPosthog = request.nextUrl.pathname.startsWith("/ingest");
      console.log(
        "🚀 withRateLimitMiddleware ~ isPosthog: ",
        isPosthog,
        ", pathname: ",
        request.nextUrl.pathname,
      );
      if (!success && !isPosthog) {
        const message = await getMessageForRateLimited(getLocale(request));
        return new Response(message, { status: 429 }); // or redirect to a /rate-limited page
      }
      return middleware(request, event, response);
    };
  };
}
