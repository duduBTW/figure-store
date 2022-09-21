import { UserSession } from "pages/api/user";
import { prisma } from "server/db/client";
import { z } from "zod";
import dbServices from ".";
import { adressScheme } from "./adress";

export const getUser = async ({ user }: { user: UserSession }) => {
  const data = await prisma.user.findFirst({
    where: {
      id: user.userId,
    },
    select: {
      email: true,
      id: true,
      document: true,
      name: true,
      activeAdressId: true,
      activePaymentId: true,
      profilePicture: true,
      phone: true,
      role: true,
      nacionalitty: true,
    },
  });

  return {
    ...data,
    document:
      data && data.document
        ? `***-***-***-${data.document.substr(data.document.length - 2)}`
        : "",
    phone:
      data && data.phone
        ? `*****-${data.phone.substr(data.phone.length - 4)}`
        : "",
    email:
      data && data.email
        ? `${data.email.split("")[0]}*****@${data.email.split("@")[1]}`
        : "",
  };
};

export const authenticateScheme = z.object({
  username: z.string(),
  password: z.string(),
});
export const authenticate = async ({ body }: { body: any }) => {
  const { username, password } = authenticateScheme.parse(body);

  // DO NOT DO THIS
  // this is a front end mainly app,
  // NEVER do this kinda stuff for authentication pls ヽ（≧□≦）ノ
  return await prisma.user.findFirst({
    where: {
      AND: [
        {
          OR: [
            {
              email: username,
            },
            {
              document: username,
            },
          ],
        },
        {
          password,
        },
      ],
    },
    select: {
      email: true,
      id: true,
      document: true,
      name: true,
      activeAdressId: true,
      activePaymentId: true,
      profilePicture: true,
      phone: true,
      role: true,
      nacionalitty: true,
    },
  });
};

export const registerScheme = z
  .object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    password: z.string(),
    document: z.string(),
    nacionalitty: z.string(),
  })
  .merge(adressScheme);
export const register = async ({ body }: { body: any }) => {
  const { document, email, nacionalitty, password, name, phone, ...rest } =
    registerScheme.parse(body);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
      nacionalitty,
      document,
      phone,
    },
  });

  const address = await dbServices.insertAdress({
    body: rest,
    user: {
      userId: user.id,
      userRole: user.role as "admin" | "user",
    },
  });

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      activeAdressId: address.id,
    },
  });

  return user;
};
