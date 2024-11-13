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
    const isUserOnboarded = isLoggedIn?.user?.entity; // user onboarded yet?
    const normalizedPathname = nextUrl.pathname.replace(/^\/[a-z]{2}\//, "/");
    const isAuthRoute = authRoutes.includes(normalizedPathname); // authentication routes
    const isProtectedRoute = requiresAuthRoutes.some((route) => // authenticated/protected routes
      normalizedPathname.startsWith(route),
    );

    // loggedin but accessing authentication route, why?
    if (isAuthRoute && isLoggedIn) { 
      console.log(`🚀 ~ [AuthMiddleware] ~ Already logged in, redirecting from auth route.`);
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    // logged-in but not onboarded
    if (isLoggedIn && !isUserOnboarded && nextUrl.pathname.includes("/dashboard")) { 
      console.log(`🚀 ~ [AuthMiddleware] ~ Logged-in but not onboarded, redirecting to onboarding...`);
      return NextResponse.redirect(new URL("/onboarding", nextUrl));
    }

    // not logged-in but want to see /dashboard, shame 
    if (isProtectedRoute && !isLoggedIn) { 
      console.log(`🚀 ~ [AuthMiddleware] ~ Not logged in, redirecting to login...`);
      let callbackUrl = nextUrl.pathname;
      if (nextUrl.search) {
        callbackUrl += nextUrl.search;
      }

      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
      const url = new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl);

      return NextResponse.redirect(url);
    }

    // Consider adding the nextUrl.pathname in logs for more context
    console.log("🚀 ~ [AuthMiddleware] ~ clear ~ proceed");
    return middleware(request, event, response);
  };
}
