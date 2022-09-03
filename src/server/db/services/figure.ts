import { prisma } from "../client";
import { z } from "zod";

// -- GET figure -- //
export const getProduct = async (id: string) =>
  prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      details: true,
      description: true,
    },
  });

export const getProductList = async ({ name }: { name?: string }) =>
  prisma.product.findMany({
    select: {
      id: true,
      name: true,
      images: true,
      color: true,
    },
    where: name
      ? {
          name: {
            contains: name,
          },
        }
      : undefined,
  });

export const getNewProductList = async () =>
  prisma.product.findMany({
    select: {
      id: true,
      name: true,
      images: true,
      color: true,
      price: true,
    },
  });

// -- MANIPULATE figure -- //
export const figureScheme = z.object({
  name: z.string(),
  price: z.number(),
  color: z.string(),
  description: z
    .object({
      html: z.string(),
      json: z.string(),
    })
    .optional()
    .nullable(),
  details: z
    .object({
      html: z.string(),
      json: z.string(),
    })
    .optional()
    .nullable(),
});

export const insertProduct = async (data: any) => {
  var { description, details, ...rest } = figureScheme.parse(data);

  const defaultEditor = {
    html: "",
    json: "",
  };
  return prisma.product.create({
    data: {
      ...rest,
      description: {
        create: description ?? defaultEditor,
      },
      details: {
        create: details ?? defaultEditor,
      },
    },
  });
};

export const updateProduct = async (id: string, data: any) => {
  var { description, details, ...rest } = figureScheme.parse(data);

  return prisma.product.update({
    where: {
      id,
    },
    data: {
      ...rest,
      description: {
        update: description ?? undefined,
      },
      details: {
        update: details ?? undefined,
      },
    },
  });
};
