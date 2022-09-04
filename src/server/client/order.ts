import { api, FigureApiResponse } from "./services";

export interface OrderListApiResponse {}
export interface OrderApiResponse {
  id: string;
  product: FigureApiResponse[];
  adress: any;
}

export const getOrder = async (id: string) => {
  const response = await api.get<OrderApiResponse>(`api/user/order/${id}`);

  return response.data;
};
