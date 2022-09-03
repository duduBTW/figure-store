import { api, FigureApiResponse } from "./services";

export interface CartApiResponse {}
export interface CartApiItem {
  id: string;
  productId: string;
  userId: string;
  product: FigureApiResponse;
}
export interface CartApiListResponse {
  cartList: CartApiItem[];
  total: number;
}
export interface CartApiRequest {
  figureId: string;
}

export const insertCart = async (
  newFigure: CartApiRequest
): Promise<CartApiResponse> => {
  const response = await api.post("/api/user/cart", newFigure);

  return response.data;
};

export const getCartLit = async (): Promise<CartApiListResponse> => {
  const response = await api.get("/api/user/cart");

  return response.data;
};

export const deleteCart = async (id: string): Promise<CartApiListResponse> => {
  const response = await api.delete(`/api/user/cart/${id}`);

  return response.data;
};
