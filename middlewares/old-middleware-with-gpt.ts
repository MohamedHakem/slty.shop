////////////////////////
/// better code below
////////////////////////

// import NextAuth from "next-auth";
// import authConfig from "@/auth.config";
// import {
//   DEFAULT_LOGIN_REDIRECT,
//   apiAuthPrefix,
//   authRoutes,
//   publicRoutes,
// } from "@/routes";

// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//   const { nextUrl } = req;
//   const isLoggedIn = Boolean(req.auth);
//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.some((route) =>
//     nextUrl.pathname.startsWith(route),
//   );
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

//   if (!isLoggedIn && nextUrl.pathname === "/dashboard") {
//     console.log(
//       "(middleware) User not logged in, redirecting to login from /onboarding or /dashboard...",
//     );
//     return Response.redirect(new URL(`/login`, nextUrl));
//   }

//   if (isApiAuthRoute) {
//     return;
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//     }
//     return;
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//     const callbackUrl = nextUrl.search
//       ? `${nextUrl.pathname}${nextUrl.search}`
//       : nextUrl.pathname;
//     const encodedCallbackUrl = encodeURIComponent(callbackUrl);

//     return Response.redirect(
//       new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl),
//     );
//   }

//   return;
// });

// // Optional: Exclude some paths from Middleware
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

//////////////////////////////////////////
// Added internationalization to Authentication below
//////////////////////////////////////////

import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import { NextResponse, NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);

let locales = ["en", "ar"];
let defaultLocale = "en";

export default auth((req: NextRequest & { auth: any }) => {
  const { nextUrl } = req;
  const { pathname } = nextUrl;
  const isLoggedIn = Boolean(req.auth);
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isAuthRoute = authRoutes.includes(pathname);

  // Internationalization logic
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
  if (!pathnameHasLocale) {
    const locale = match(
      new Negotiator({
        headers: {
          "accept-language": req.headers.get("accept-language") || "",
        },
      }).languages(),
      locales,
      defaultLocale,
    );

    req.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse[locale === defaultLocale ? "rewrite" : "redirect"](
      req.nextUrl,
    );
  }

  // Authentication logic
  if (!isLoggedIn && pathname === "/dashboard") {
    console.log(
      "(middleware) User not logged in, redirecting to login from /onboarding or /dashboard...",
    );
    return Response.redirect(new URL(`/login`, nextUrl));
  }

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    const callbackUrl = nextUrl.search
      ? `${pathname}${nextUrl.search}`
      : pathname;
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl),
    );
  }

  return;
});

// Configuration to exclude some paths from Middleware
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|_next/static|_next/image|favicon.ico).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
