import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/((?!api|trpc))(_next.*|.+.[w]+$)", // API Route
    "/((?!.+\\.[\\w]+$|_next).*)", // Image Routes
    "/", // Home Route
    "/events", // Events Route
    "/events/:id", // Single Event Route
    "/assets",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
