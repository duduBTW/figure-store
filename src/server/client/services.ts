import axios from "axios";
import {
  getProductList,
  getProduct,
  insertProduct,
  editProduct,
} from "./figures";
import { getOrderList } from "./order";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const service = {
  getProductList,
  getProduct,
  insertProduct,
  editProduct,
  getOrderList,
};

export type { OrderListApiResponse } from "./order";
export type {
  FigureListApiResponse,
  FigureApiResponse,
  FigureApiRequest,
} from "./figures";
export default service;
