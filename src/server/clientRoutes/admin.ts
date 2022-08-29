import type { GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "server/session";

export function restrictRouteAdmin<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(handler: (context: GetServerSidePropsContext) => Promise<P>) {
  return withIronSessionSsr(async (context) => {
    const user = context.req.session.user;
    const data = await handler(context);

    if (!user?.userId || user.userRole !== "admin") {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
      },
    };
  }, sessionOptions);
}
