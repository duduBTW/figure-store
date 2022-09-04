import { prisma } from "../client";
import { UserSession } from "pages/api/user";

export const getOrder = async ({
  id,
  user,
}: {
  id: string;
  user: UserSession;
}) =>
  prisma.order.findFirst({
    where: {
      id,
      user: {
        id: user.userId,
      },
    },
    include: {
      adress: true,
      product: true,
    },
  });
