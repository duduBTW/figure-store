import { UserSession } from "pages/api/user";
import { prisma } from "server/db/client";
import { z } from "zod";

export const getPayment = async ({
  user,
  id,
}: {
  user: UserSession;
  id: string;
}) => {
  return await prisma.payment.findFirst({
    where: {
      user: {
        id: user.userId,
      },
      id,
    },
  });
};

export const getPaymentList = async ({ user }: { user: UserSession }) => {
  return await prisma.payment.findMany({
    where: {
      user: {
        id: user.userId,
      },
    },
  });
};

export const paymentScheme = z.object({
  number: z.number(),
  cvc: z
    .number()
    .or(z.string().regex(/\d+/).transform(Number))
    .refine((n) => n >= 0),
  validDate: z.string(),
  name: z.string(),
});

export const insertPayment = async ({
  user,
  body,
}: {
  user: UserSession;
  body: any;
}) => {
  const data = paymentScheme.parse(body);

  const active = await prisma.user.findFirst({
    where: {
      id: user.userId,
    },
    select: {
      activePaymentId: true,
    },
  });

  const createdPayment = await prisma.payment.create({
    data: {
      ...data,
      number: String(data.number),
      user: {
        connect: {
          id: user.userId,
        },
      },
    },
  });

  if (!active?.activePaymentId)
    await prisma.user.update({
      where: {
        id: user.userId,
      },
      data: {
        activePaymentId: createdPayment.id,
      },
    });

  return createdPayment;
};

export const updatePayment = async ({
  user,
  body,
  id,
}: {
  user: UserSession;
  body: any;
  id: string;
}) => {
  const data = paymentScheme.parse(body);

  return await prisma.payment.update({
    where: {
      id,
    },
    data: {
      ...data,
      number: String(data.number),
    },
  });
};

export const updatePaymentActive = async ({
  user,
  id,
}: {
  user: UserSession;
  id: string;
}) => {
  return await prisma.user.update({
    where: {
      id: user.userId,
    },
    data: {
      activePaymentId: id,
    },
  });
};
