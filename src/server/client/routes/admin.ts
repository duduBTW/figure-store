import type { GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "server/session";
import { api } from "server/client/services";

export function restrictRouteAdmin<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(handler: (context: GetServerSidePropsContext) => any) {
  return withIronSessionSsr(async (context) => {
    const user = context.req.session.user;
    if (!user?.userId || user.userRole !== "admin") {
      return {
        notFound: true,
      };
    }

    api.defaults.headers.common["Cookie"] = context.req.headers.cookie ?? "";
    const data = await handler(context);
    if (data === 404)
      return {
        notFound: true,
      };

    return {
      props: {
        data,
      },
    };
  }, sessionOptions);
}
