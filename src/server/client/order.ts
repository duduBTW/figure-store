import { AdressApiResponse } from "./adress";
import { api, FigureApiResponse } from "./services";

export interface OrderListApiRequest {
  address: string;
  payment: string;
  figures: string[];
}
export interface OrderListApiResponse {}
export interface OrderApiResponse {
  id: string;
  product: FigureApiResponse[];
  adress: AdressApiResponse;
}

export const getOrder = async (id: string) => {
  const response = await api.get<OrderApiResponse>(`/api/user/order/${id}`);

  return response.data;
};

export const getOrderList = async () => {
  const response = await api.get<OrderApiResponse[]>(`/api/user/order`);

  return response.data;
};

export const insertOrder = async (body: OrderListApiRequest) => {
  const response = await api.post<OrderApiResponse>(`/api/user/order`, body);

  return response.data;
};
