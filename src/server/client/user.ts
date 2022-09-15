import { User } from "pages/api/user";
import { AdressApiRequest } from "./adress";
import { api } from "./services";

export const getUser = async () => {
  const response = await api.get<User>(`/api/user`);
  return response.data;
};

export interface LoginReqest {
  username: string;
  password: string;
}
export const login = async (body: LoginReqest) => {
  const response = await api.post<User>(`/api/login`, body);
  return response.data;
};

export const logout = async () => {
  const response = await api.post(`/api/logout`);
  return response.data;
};

export interface RegisterRequest extends AdressApiRequest {
  name: string;
  email: string;
  password: string;
  document: number;
  nacionalitty: string;
}
export const register = async (body: RegisterRequest) => {
  const response = await api.post(`/api/register`, body);
  return response.data;
};
