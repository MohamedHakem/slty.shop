import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { CustomMiddleware } from "@/middlewares/chain";
import {
  DEFAULT_LOGIN_REDIRECT,
  authRoutes,
  publicRoutes,
  apiAuthPrefix,
} from "@/routes";
import { auth } from "@/auth";

export function withAuthMiddleware(
  middleware: CustomMiddleware,
): CustomMiddleware {
  return async (
    req: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    const { nextUrl } = req;
    // const isLoggedIn = !!req.cookies.get("access_token");
    const isLoggedIn = await auth();
    console.log("🚀 withAuthMiddleware ~ isLoggedIn: ", isLoggedIn);

    // Regex to match language prefixes like /en/, /ar/, etc.
    const langPrefixRegex = /^\/[a-z]{2}\//;
    const normalizedPathname = nextUrl.pathname.replace(langPrefixRegex, "/");

    const isPublicRoute = publicRoutes.some((r) => {
      return r.endsWith("/*")
        ? normalizedPathname.startsWith(r.slice(0, -1))
        : r === normalizedPathname;
    });

    const isAuthRoute = authRoutes.includes(normalizedPathname);
    const isApiAuthRoute = normalizedPathname.startsWith(apiAuthPrefix);
    const isPosthog = nextUrl.pathname.startsWith("/ingest");

    console.log("🚀 ~ isLoggedIn:", isLoggedIn);
    console.log("🚀 ~ isPublicRoute:", isPublicRoute);
    console.log("🚀 ~ isAuthRoute:", isAuthRoute);
    console.log("🚀 ~ isApiAuthRoute:", isApiAuthRoute);

    if (isApiAuthRoute || isPosthog) return;

    if (isAuthRoute) {
      if (isLoggedIn) {
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      }
      console.log("inside an Auth Route");
      return;
    }

    if (!isLoggedIn && !isPublicRoute) {
      let callbackUrl = nextUrl.pathname;
      if (nextUrl.search) {
        callbackUrl += nextUrl.search;
      }

      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
      const url = new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl);
      console.log("url: ", url.toString());
      return NextResponse.redirect(url);
    }

    return middleware(req, event, response);
  };
}
