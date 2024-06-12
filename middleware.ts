import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.SECRET });
    const currentOrigin = new URL(request.url).origin;
    const currentPath = new URL(request.url).pathname;

    if (token) {
      if (
        token.role === "GENERAL_ADMIN" &&
        !currentPath.startsWith("/dashboard")
      ) {
        return NextResponse.redirect(`${currentOrigin}/dashboard`);
      } else if (
        (token.role === "COMPANY_ADMIN" || token.role === "COMPANY_STAFF") &&
        !currentPath.startsWith("/company")
      ) {
        return NextResponse.redirect(`${currentOrigin}/company`);
      } else if (
        (token.role === "PRINTING_CENTER_STAFF" ||
          token.role === "PRINTING_CENTER_ADMIN") &&
        !currentPath.startsWith("/printCenter")
      ) {
        return NextResponse.redirect(`${currentOrigin}/printCenter`);
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: async ({ req }) => {
        const token = await getToken({ req, secret: process.env.SECRET });
        return !!token;
      },
    },
  },
);

export const config = {
  matcher: ["/dashboard/:path*", "/company/:path*", "/printCenter/:path*"],
};
