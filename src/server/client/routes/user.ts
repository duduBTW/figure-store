import type { GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "server/session";
import { api } from "../services";
import { prisma } from "server/db/client";
import { User } from "pages/api/user";

export interface UserPage<T> {
  data: T;
  user: User;
}

export function restrictRouteUser<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(handler: (context: GetServerSidePropsContext) => Promise<P>) {
  return withIronSessionSsr(async (context) => {
    const userSession = context.req.session.user;

    if (!userSession?.userId) {
      return {
        notFound: true,
      };
    }

    const user = await prisma.user.findFirst({
      where: {
        id: userSession?.userId,
      },
    });

    api.defaults.headers.common["Cookie"] = context.req.headers.cookie ?? "";
    const data = await handler(context);
    return {
      props: {
        data,
        user,
      },
    };
  }, sessionOptions);
}
