import { NextResponse } from "next/server";
import type { NextFetchEvent } from "next/server";
import { CustomMiddleware } from "@/middlewares/chain";
import { EnhancedNextRequest } from "@/types/enhancedNextRequest";
import {
  DEFAULT_LOGIN_REDIRECT,
  authRoutes,
  requiresAuthRoutes,
} from "@/routes";
import { auth } from "@/auth";
import { i18n } from "@/i18n.config";

export function withAuthMiddleware(
  middleware: CustomMiddleware,
): CustomMiddleware {
  return async (
    request: EnhancedNextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    if (request.isApiAuthRoute || request.isPosthog) {
      console.log("🚀 ~ [AuthMiddleware] ~ /api or /posthog, req: ", request.url);
      return middleware(request, event, response);
    }

    const { nextUrl } = request;
    const isLoggedIn = await auth();
    const normalizedPathname = nextUrl.pathname.replace(/^\/[a-z]{2}\//, "/");
    const isAuthRoute = authRoutes.includes(normalizedPathname);
    const isRouteRequiresAuth = requiresAuthRoutes.some((route) =>
      normalizedPathname.startsWith(route),
    );

    if (isAuthRoute && isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    if (isRouteRequiresAuth && !isLoggedIn) {
      let callbackUrl = nextUrl.pathname;
      if (nextUrl.search) {
        callbackUrl += nextUrl.search;
      }

      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
      const url = new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl);

      console.log("🚀 ~ [AuthMiddleware] ~ redirecting to ", url.href);
      return NextResponse.redirect(url);
    }

    console.log("🚀 ~ [AuthMiddleware] ~ done with authMiddleware");
    return middleware(request, event, response);
  };
}
