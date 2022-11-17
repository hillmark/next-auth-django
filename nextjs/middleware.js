import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth(
  function middleware(req) {
    console.log("authorized");
  },
  {
    callbacks: {
      authorized({ req, token }) {
        // `/admin` requires is_superuser
        if (req.nextUrl.pathname === "/admin") {
          return token?.is_superuser;
        }
        // `/me` only requires the user to be logged in
        return !!token;
      },
    },
  }
);

export const config = { matcher: ["/admin", "/me"] };
