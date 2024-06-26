/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/new-verification",
  "/category/*",
  "/item/*",
  "/"
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password"
];


/**
 * An array of routes that requires authentication
 * These routes will redirect non-logged in users to /settings
 * @type {string[]}
 */
export const requiresAuthRoutes  = [
  "/dashboard",
  "/onboarding",
];


/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
// export const DEFAULT_LOGIN_REDIRECT = "/";
export const DEFAULT_LOGIN_REDIRECT = "/onboarding";