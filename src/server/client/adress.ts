import { api } from "./services";

export interface AdressApiListResponse {
  id: string;
  cep: number;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
  userId: string;
}

export interface AdressApiResponse {
  id: string;
  cep: number;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
  userId: string;
}

export interface AdressApiRequest {
  cep: number;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
  userId: string;
}

export const getAdressList = async () => {
  const response = await api.get<AdressApiListResponse[]>("/api/user/adress");
  return response.data;
};

export const getAdress = (id: string) => async () => {
  const response = await api.get<AdressApiResponse>(`/api/user/adress/${id}`);
  return response.data;
};

export const insertAdress = async (data: AdressApiRequest) => {
  const response = await api.post<AdressApiListResponse>(
    "/api/user/adress",
    data
  );
  return response.data;
};

export const updateAdress = (id: string) => async (data: AdressApiRequest) => {
  const response = await api.put<AdressApiListResponse>(
    `/api/user/adress/${id}`,
    data
  );
  return response.data;
};

export const updateAdressActive = async (id: string) => {
  const response = await api.put<AdressApiListResponse>(
    `/api/user/adress/active/${id}`
  );
  return response.data;
};
