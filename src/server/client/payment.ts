import { api } from "./services";

export interface PaymentApiResponse {
  id: string;
  number: string;
  name: string;
  validDate: string;
  cvc: number;
}

export interface PaymentApiListResponse {
  id: string;
  number: string;
  name: string;
  validDate: string;
  cvc: number;
}

export interface PaymentApiRequest {
  number: string;
  name: string;
  validDate: string;
  cvc: number;
}

export const getPaymentList = async () => {
  const response = await api.get<PaymentApiListResponse[]>("/api/user/payment");
  return response.data;
};

export const getPayment = (id: string) => async () => {
  const response = await api.get<PaymentApiResponse>(`/api/user/payment/${id}`);
  return response.data;
};

export const insertPayment = async (data: PaymentApiRequest) => {
  const response = await api.post<PaymentApiListResponse>(
    "/api/user/payment",
    data
  );
  return response.data;
};

export const updatePayment =
  (id: string) => async (data: PaymentApiRequest) => {
    const response = await api.put<PaymentApiResponse>(
      `/api/user/payment/${id}`,
      data
    );
    return response.data;
  };

export const updatePaymentActive = async (id: string) => {
  const response = await api.put<PaymentApiResponse>(
    `/api/user/payment/active/${id}`
  );
  return response.data;
};
