import { prisma } from "../client";

const getProduct = async (id: string) =>
  prisma.product.findUnique({
    where: {
      id,
    },
  });

const getProductList = async () => prisma.product.findMany();

const dbServices = {
  getProduct,
  getProductList,
} as const;

export default dbServices;
