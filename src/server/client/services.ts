import axios from "axios";
import * as figureServices from "./figures";
import * as cartServices from "./cart";
import { getOrderList } from "./order";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const service = {
  ...figureServices,
  ...cartServices,
  getOrderList,
};

export type { OrderListApiResponse } from "./order";
export type {
  FigureListApiResponse,
  FigureApiResponse,
  FigureApiRequest,
} from "./figures";
export default service;
