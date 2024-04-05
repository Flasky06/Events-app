import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/webhook/clerk",
    "/api/webhook/stripe",
    "api/uploadthing",
    "api/webhook/clerk",
  ],
  ignoredRoutes: [
    "/events/webhook/clerk",
    "/api/webhook/stripe",
    "api/uploadthing",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
