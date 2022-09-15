import { UserSession } from "pages/api/user";
import { prisma } from "server/db/client";
import { z } from "zod";

export const getAdressList = async ({ user }: { user: UserSession }) => {
  return await prisma.adress.findMany({
    where: {
      user: {
        id: user.userId,
      },
    },
  });
};

export const getAdress = async ({
  user,
  id,
}: {
  user: UserSession;
  id: string;
}) => {
  return await prisma.adress.findFirst({
    where: {
      user: {
        id: user.userId,
      },
      id,
    },
  });
};

export const adressScheme = z.object({
  cep: z.number(),
  state: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  street: z.string(),
  number: z.number(),
});

export const insertAdress = async ({
  user,
  body,
}: {
  user: UserSession;
  body: any;
}) => {
  const data = adressScheme.parse(body);

  const active = await prisma.user.findFirst({
    where: {
      id: user.userId,
    },
    select: {
      activeAdressId: true,
    },
  });

  const createAddress = await prisma.adress.create({
    data: {
      ...data,
      cep: Number(data.cep),
      number: Number(data.number),
      user: {
        connect: {
          id: user.userId,
        },
      },
    },
  });

  if (!active?.activeAdressId)
    await prisma.user.update({
      where: {
        id: user.userId,
      },
      data: {
        activeAdressId: createAddress.id,
      },
    });

  return createAddress;
};

export const updateAdress = async ({
  user,
  body,
  id,
}: {
  user: UserSession;
  body: any;
  id: string;
}) => {
  const data = adressScheme.parse(body);

  return await prisma.adress.update({
    where: {
      id,
    },
    data: {
      ...data,
      cep: Number(data.cep),
      number: Number(data.number),
    },
  });
};

export const updateAdressActive = async ({
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
      activeAdressId: id,
    },
  });
};
