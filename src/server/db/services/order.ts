import { prisma } from "../client";
import { UserSession } from "pages/api/user";
import { z } from "zod";

export const getOrderList = async ({ user }: { user: UserSession }) =>
  prisma.order.findMany({
    where: {
      user: {
        id: user.userId,
      },
    },
    include: {
      adress: true,
      product: {
        include: {
          images: true,
        },
      },
    },
  });

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
      product: {
        include: {
          images: true,
        },
      },
      payment: true,
    },
  });

export const orderScheme = z.object({
  address: z.string(),
  payment: z.string(),
  figures: z.string().array(),
});

export const insertOrder = async ({
  body,
  user,
}: {
  body: any;
  user: UserSession;
}) => {
  const { address, figures, payment } = orderScheme.parse(body);

  return await prisma.order.create({
    data: {
      status: "",
      adress: {
        connect: {
          id: address,
        },
      },
      payment: {
        connect: {
          id: payment,
        },
      },
      user: {
        connect: {
          id: user.userId,
        },
      },
      product: {
        connect: figures.map((figure) => ({
          id: figure,
        })),
      },
    },
  });
};
