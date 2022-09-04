import axios from "axios";
import * as figureServices from "./figures";
import * as cartServices from "./cart";
import * as orderServices from "./order";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const service = {
  ...figureServices,
  ...cartServices,
  ...orderServices,
};

export type { OrderListApiResponse } from "./order";
export type {
  FigureListApiResponse,
  FigureApiResponse,
  FigureApiRequest,
} from "./figures";
export default service;
