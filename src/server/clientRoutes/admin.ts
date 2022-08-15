import { unstable_getServerSession as getServerSession } from "next-auth";
import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { prisma } from "server/db/client";
import { authOptions } from "pages/api/auth/[...nextauth]";

export const restrictRouteAdmin = async <T = any>(
  context: GetServerSidePropsContext,
  getProps?: (context: GetServerSidePropsContext) => Promise<T>
): Promise<GetServerSidePropsResult<any>> => {
  const { req, res } = context;

  const session = await getServerSession(req, res, authOptions);
  if (!session)
    return {
      notFound: true,
    };

  const user = prisma.user.findFirst({
    where: {
      id: session?.user?.id,
      role: "amin",
    },
  });
  if (!user)
    return {
      notFound: true,
    };

  const data = await getProps?.(context);

  return {
    props: {
      data,
    },
  };
};
