import { api } from "./services";

// -- GET figure -- //
export interface FigureListApiResponse {
  id: string;
  name: string;
  color: string;
  price: number;
  sold?: number;
  stock?: number;
  images: string[];
}
export const getProductList = async (
  searchValue?: string
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

export interface FigureApiResponse {
  id: string;
  name: string;
  color: string;
  price: number;
  description: { html: string };
  details: { html: string };
}
export const getProduct = async (id?: string): Promise<FigureApiResponse> => {
  const response = await api.get<FigureApiResponse>(`/api/figure/${id}`);
  return response.data;
};

// -- MANIPULATE figure -- //
interface EditorContent {
  html: string;
  json: string;
}

export interface FigureApiRequest {
  name: string;
  color: string;
  price: number;
  description: EditorContent;
  details: EditorContent;
}

export const insertProduct = async (
  newFigure: FigureApiRequest
): Promise<FigureApiResponse> => {
  const response = await api.post("/api/figure", newFigure);

  return response.data;
};

export const editProduct =
  (id: string) =>
  async (updatedFaigure: FigureApiRequest): Promise<FigureApiResponse> => {
    const response = await api.put(`/api/figure/${id}`, updatedFaigure);

    return response.data;
  };
