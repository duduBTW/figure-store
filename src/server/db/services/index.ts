import { prisma } from "../client";
import { z } from "zod";

// -- GET figure -- //
const getProduct = async (id: string) =>
  prisma.product.findUnique({
    where: {
      id,
    },
  });

const getProductList = async () =>
  prisma.product.findMany({
    select: {
      id: true,
      name: true,
      images: true,
    },
  });

// -- MANIPULATE figure -- //
export const figureScheme = z.object({
  name: z.string(),
  price: z.number(),
  description: z.object({
    html: z.string(),
    json: z.string(),
  }),
});

const insertProduct = async (data: any) => {
  var { description, name, price } = figureScheme.parse(data);

  return prisma.product.create({
    data: {
      name,
      price,
      descriptionHtml: description.html,
      descriptionJson: description.json,
    },
  });
};

const updateProduct = async (id: string, data: any) => {
  var { description, name, price } = figureScheme.parse(data);

  return prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      price,
      descriptionHtml: description.html,
      descriptionJson: description.json,
    },
  });
};

const dbServices = {
  getProduct,
  getProductList,
  insertProduct,
  updateProduct,
} as const;

export default dbServices;
