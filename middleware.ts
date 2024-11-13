import { chain } from "@/middlewares/chain";
import { withAuthMiddleware } from "@/middlewares/withAuthMiddleware";
import { withI18nMiddleware } from "@/middlewares/withI18nMiddleware";
import { withRateLimitMiddleware } from "@/middlewares/withRateLimitMiddleware";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.cachedFixedWindow(10, "10 s"),
  ephemeralCache: new Map(),
  prefix: "ratelimit",
});

export default chain([
  withRateLimitMiddleware(ratelimit),
  withAuthMiddleware,
  withI18nMiddleware, // maybe this should be before auth
]);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
