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

export function withAuthMiddleware(
  middleware: CustomMiddleware,
): CustomMiddleware {
  return async (
    request: EnhancedNextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    if (request.isApiAuthRoute || request.isPosthog) {
      return middleware(request, event, response);
    }

    const { nextUrl } = request;
    const isLoggedIn = await auth();
    const userHasEntity = isLoggedIn?.user?.entity; // user onboarded yet?
    const normalizedPathname = nextUrl.pathname.replace(/^\/[a-z]{2}\//, "/");
    const isAuthRoute = authRoutes.includes(normalizedPathname);
    const isRouteRequiresAuth = requiresAuthRoutes.some((route) =>
      normalizedPathname.startsWith(route),
    );

    if (isAuthRoute && isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    if (isLoggedIn && !userHasEntity && nextUrl.pathname.includes("/dashboard")) {
      return NextResponse.redirect(new URL("/onboarding", nextUrl));
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

    console.log("🚀 ~ [AuthMiddleware] ~ done");
    return middleware(request, event, response);
  };
}
