import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { i18n } from "@/i18n.config";
import { CustomMiddleware } from "@/middlewares/chain";
import { getLocale } from "@/lib/getLocale";
import { apiAuthPrefix } from "@/routes";

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    const pathname = request.nextUrl.pathname;
    const isApiAuthRoute = request.nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPosthog = request.nextUrl.pathname.startsWith("/ingest");
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    if (pathnameIsMissingLocale && !isApiAuthRoute && !isPosthog) {
      const locale = getLocale(request);
      console.log("🚀 ~ withI18nMiddleware ~ locale:", locale)
      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          request.url,
        ),
      );
    }

    return middleware(request, event, response);
  };
}
