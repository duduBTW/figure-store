import type { GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "server/session";
import service, { api } from "server/client/services";
import { QueryClient, dehydrate } from "@tanstack/react-query";

export function restrictRouteAdmin<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler: (
    context: GetServerSidePropsContext,
    queryClient: QueryClient
  ) => Promise<P | void | 404>
) {
  return withIronSessionSsr(async (context) => {
    const userSession = context.req.session.user;

    if (!userSession?.userId || userSession.userRole !== "admin") {
      return {
        notFound: true,
      };
    }

    api.defaults.headers.common["Cookie"] = context.req.headers.cookie ?? "";

    // Hydratete user
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["user"], service.getUser);

    const data = await handler(context, queryClient);
    if (data === 404)
      return {
        notFound: true,
      };

    return {
      props: {
        ...(data ?? {}),
        dehydratedState: dehydrate(queryClient),
      },
    };
  }, sessionOptions);
}
