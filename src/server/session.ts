// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from "iron-session";
import type { UserSession } from "pages/api/user";

export const sessionOptions: IronSessionOptions = {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "figure-store/auth-token",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    user?: UserSession;
  }
}
