import { prisma } from "../db/client";

const getProduct = async (id: string) =>
  prisma.product.findUnique({
    where: {
      id,
    },
  });

const getProductList = async () => prisma.product.findMany();

const services = {
  getProduct,
  getProductList,
} as const;

export default services;
