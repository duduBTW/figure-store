import { UserSession } from "pages/api/user";
import { prisma } from "server/db/client";

export const getUser = async ({ user }: { user: UserSession }) => {
  return await prisma.user.findFirst({
    where: {
      id: user.userId,
    },
  });
};
