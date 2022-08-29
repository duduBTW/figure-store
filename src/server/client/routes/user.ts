import type { GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "server/session";
import { api } from "../services";

export function restrictRouteUser<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(handler: (context: GetServerSidePropsContext) => Promise<P>) {
  return withIronSessionSsr(async (context) => {
    const user = context.req.session.user;

    if (!user?.userId) {
      return {
        notFound: true,
      };
    }

    api.defaults.headers.common["Cookie"] = context.req.headers.cookie ?? "";
    const data = await handler(context);
    return {
      props: {
        data,
      },
    };
  }, sessionOptions);
}
