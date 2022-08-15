import { unstable_getServerSession as getServerSession } from "next-auth";
import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { prisma } from "server/db/client";
import { authOptions } from "pages/api/auth/[...nextauth]";

export const publicRoute = async <T = any>(
  context: GetServerSidePropsContext,
  getProps?: (context: GetServerSidePropsContext) => Promise<T>
): Promise<GetServerSidePropsResult<any>> => {
  const { req, res } = context;

  const session = await getServerSession(req, res, authOptions);

  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id,
      role: "user",
    },
  });

  const data = await getProps?.(context);

  return {
    props: {
      data,
      user,
    },
  };
};
