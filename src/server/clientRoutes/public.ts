import type { GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "server/session";
import { prisma } from "server/db/client";

export function publicRoute<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(handler: (context: GetServerSidePropsContext) => Promise<any>) {
  return withIronSessionSsr(async (context) => {
    const userSession = context.req.session.user;
    const data = await handler(context);
    let user = null;
    if (data === 404)
      return {
        notFound: true,
      };

    if (userSession?.userId) {
      user = await prisma.user.findFirst({
        where: {
          id: userSession?.userId,
        },
      });
    }

    return {
      props: {
        data,
        user,
      },
    };
  }, sessionOptions);
}
