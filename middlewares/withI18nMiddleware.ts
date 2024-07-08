import { NextResponse } from "next/server";
import type { NextFetchEvent } from "next/server";
import { i18n } from "@/i18n.config";
import { CustomMiddleware } from "@/middlewares/chain";
import { getLocale } from "@/lib/getLocale";
import { EnhancedNextRequest } from "@/types/enhancedNextRequest";

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    request: EnhancedNextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

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

    console.log("🚀 ~ [I18nMiddleware] ~ done");
    return middleware(request, event, response);
  };
}
