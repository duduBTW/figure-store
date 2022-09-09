import { User } from "pages/api/user";
import { api } from "./services";

export const getUser = async () => {
  const response = await api.get<User>(`/api/user`);
  return response.data;
};
