import { NextResponse } from "next/server";
import type { NextFetchEvent } from "next/server";
import { i18n } from "@/i18n.config";
import { CustomMiddleware } from "@/middlewares/chain";
import { getLocale } from "@/lib/getLocale";
import { EnhancedNextRequest } from "@/types/enhancedNextRequest";
// import { isExternalUrl } from "@/lib/utils";

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    request: EnhancedNextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    const pathname = request.nextUrl.pathname;
    // const nextUrlHref = request.nextUrl.href;
    // const requestOrigin = request.nextUrl.origin;
    // const requestHeadersOrigin = request.headers.get("host");
    // const isExternal = isExternalUrl(pathname);

    // console.log("🚀 ~ [I18nMiddleware] ~ pathname ~ 1st:", pathname);

    // console.log("🚀 ~ [I18nMiddleware] ~ isExternal:", isExternal);

    // If the pathname is an external URL, skip locale redirection
    // if (isExternal) {
    //   console.log("🚀 ~ [I18nMiddleware] ~ external url ~ Skip ~ proceed");
    //   request.nextUrl.pathname = pathname.replace(/^\/[a-z]{2}\//, "");
    //   console.log(
    //     "🚀 ~ [I18nMiddleware] ~ pathname ~ inside:",
    //     request.nextUrl.pathname,
    //   );

    //   // console.log("🚀 ~ [I18nMiddleware] ~ request ~ inside:", request);
    //   return middleware(request, event, response);
    // }

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Use full URL (href) to check if the request is for an external URL
    // const isExternalUrl = /^https?:\/\//.test(request.nextUrl.href);

    // const isExternalUrl =
    //   request.nextUrl.origin !==
    //   `${request.headers.get("x-forwarded-proto") || "http"}://${request.headers.get("host")}`;

    // console.log("🚀 ~ [I18nMiddleware] ~ pathname ~ 2nd:", pathname);
    // console.log("🚀 ~ [I18nMiddleware] ~ isExternalUrl:", isExternalUrl);

    // Redirect to the correct locale if missing
    if (
      pathnameIsMissingLocale &&
      !request.isApiAuthRoute &&
      !request.isPosthog
    ) {
      const locale = getLocale(request);
      const { nextUrl } = request;

      const newUrl = new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}${nextUrl.search.includes("password") ? "" : nextUrl.search}`,
        request.url,
      );

      console.log("🚀 ~ [I18nMiddleware] ~ redirecting to:", newUrl.href);
      return NextResponse.redirect(newUrl);
    }

    console.log("🚀 ~ [I18nMiddleware] ~ clear ~ proceed");
    return middleware(request, event, response);
  };
}
