import type { GetServerSidePropsContext } from "next";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "server/session";
import service, { api } from "../services";
import { User } from "pages/api/user";
import { QueryClient, dehydrate } from "@tanstack/react-query";

export interface UserPage<T> {
  data: T;
  user: User;
}

export function restrictRouteUser<
  P extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  handler?: (
    context: GetServerSidePropsContext,
    queryClient: QueryClient
  ) => Promise<P | void>
) {
  return withIronSessionSsr(async (context) => {
    const userSession = context.req.session.user;

    if (!userSession?.userId) {
      return {
        notFound: true,
      };
    }

    api.defaults.headers.common["Cookie"] = context.req.headers.cookie ?? "";

    // Hydratete user
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["user"], service.getUser);

    const data = await handler?.(context, queryClient);
    return {
      props: {
        ...(data ?? {}),
        dehydratedState: dehydrate(queryClient),
      },
    };
  }, sessionOptions);
}
