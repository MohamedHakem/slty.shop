import { chain } from "@/middlewares/chain";
import { withAuthMiddleware } from "@/middlewares/withAuthMiddleware";
import { withI18nMiddleware } from "@/middlewares/withI18nMiddleware";
import { withRateLimitMiddleware } from "@/middlewares/withRateLimitMiddleware";

export default chain([
  withRateLimitMiddleware,
  withI18nMiddleware,
  withAuthMiddleware,
]);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
