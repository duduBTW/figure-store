import type { GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "server/session";

export function restrictRouteUser<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(handler: (context: GetServerSidePropsContext) => Promise<P>) {
  return withIronSessionSsr(async (context) => {
    const user = context.req.session.user;
    const data = await handler(context);
    console.log("user", user);
    console.log("data", data);

    if (!user?.userId) {
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
