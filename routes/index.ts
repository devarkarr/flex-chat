/**
 * public routes
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
  "/email-verification",
  "/forgot-password",
  "/new-password",
];

/**
 * authroutes
 * @type {string[]}
 */

export const authRoutes = ["/login", "/register"];

/**
 * apiAuthPthrefix
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * default login redirect route
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/chats";
