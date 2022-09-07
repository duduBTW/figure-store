import { api } from "./services";

export const uploadImage = async (figureId: string, data: FormData) => {
  return api({
    method: "post",
    url: `/api/figure/${figureId}/images`,
    data,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
