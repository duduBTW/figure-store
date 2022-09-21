import axios from "axios";

import * as figureServices from "./figures";
import * as cartServices from "./cart";
import * as orderServices from "./order";
import * as imagesServices from "./images";
import * as adressServices from "./adress";
import * as userServices from "./user";
import * as paymentServices from "./payment";
import * as announcementServices from "./announcement";

export const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

const service = {
  ...figureServices,
  ...cartServices,
  ...orderServices,
  ...imagesServices,
  ...adressServices,
  ...userServices,
  ...paymentServices,
  ...announcementServices,
};

export type { OrderListApiResponse } from "./order";
export type {
  FigureListApiResponse,
  FigureApiResponse,
  FigureApiRequest,
} from "./figures";
export default service;
