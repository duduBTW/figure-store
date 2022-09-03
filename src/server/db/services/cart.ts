import { prisma } from "../client";
import { z } from "zod";
import { UserSession } from "pages/api/user";

export const getCartList = ({ user }: { user: UserSession }) => {
  return prisma.cart.findMany({
    where: {
      user: {
        id: user.userId,
      },
    },
    include: {
      product: {
        select: {
          price: true,
          id: true,
          images: true,
          color: true,
          name: true,
        },
      },
      user: false,
    },
  });
};

// -- MANIPULATE figure -- //
export const cartScheme = z.object({
  figureId: z.string(),
});
export const insertCard = ({
  body,
  user,
}: {
  body: any;
  user: UserSession;
}) => {
  const { figureId } = cartScheme.parse(body);

  return prisma.cart.create({
    data: {
      product: {
        connect: {
          id: figureId,
        },
      },
      user: {
        connect: {
          id: user.userId,
        },
      },
    },
  });
};

export const deleteCart = (id: string) =>
  prisma.cart.delete({
    where: {
      id,
    },
  });
