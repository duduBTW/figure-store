import { getProductList, getProduct } from "./figures";

const service = {
  getProductList,
  getProduct,
};

export type { FigureListApiResponse, FigureApiResponse } from "./figures";
export default service;
