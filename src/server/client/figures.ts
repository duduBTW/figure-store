import { api } from "./services";

export interface FigureListApiResponse {
  id: string;
  name: string;
  color: string;
  price: number;
  sold?: number;
  stock?: number;
  images: Image[];
}

export interface EditorContent {
  html: string;
  json: string;
}

export interface Image {
  default: string;
  id: string;
  large: string;
  medium: string;
  small: string;
}

export interface FigureApiRequest {
  name: string;
  color: string;
  price: number;
  description: EditorContent;
  details: EditorContent;
}

export interface FigureApiResponse {
  id: string;
  name: string;
  color: string;
  price: number;
  description: { html: string };
  details: { html: string };
  images: Image[];
}

export const getProductList = async (
  searchValue: string = ""
): Promise<FigureListApiResponse[]> => {
  const response = await api.get<FigureListApiResponse[]>(
    `/api/figure?name=${searchValue}`
  );
  return response.data;
};

export const getNewProductList = async (): Promise<FigureListApiResponse[]> => {
  const response = await api.get<FigureListApiResponse[]>(`/api/figure/new`);
  return response.data;
};

export const getProduct =
  (id: string) => async (): Promise<FigureApiResponse> => {
    const response = await api.get<FigureApiResponse>(`/api/figure/${id}`);
    return response.data;
  };

export const insertProduct = async (
  newFigure: FigureApiRequest
): Promise<FigureApiResponse> => {
  const response = await api.post("/api/figure", newFigure);

  return response.data;
};

export const editProduct =
  (id: string) =>
  async (updatedFaigure: FigureApiRequest): Promise<FigureApiResponse> => {
    const response = await api.put(`/api/figure/${id}/edit`, updatedFaigure);
    return response.data;
  };
