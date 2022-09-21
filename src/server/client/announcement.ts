import { EditorContent } from "./figures";
import { api } from "./services";

export interface AnnouncementResponse {
  id: string;
  title: string;
  type: "success" | "info" | "error";
  description: EditorContent;
}

export interface AnnouncementRequest {
  title: string;
  type: "success" | "info" | "error";
  description: EditorContent;
}

export const insertAnnouncement = async (data: AnnouncementRequest) => {
  const response = await api.post<AnnouncementResponse>(
    "/api/admin/announcement",
    data
  );

  return response.data;
};

export const editAnnouncement =
  (id: string) => async (data: AnnouncementRequest) => {
    const response = await api.put<AnnouncementResponse>(
      `/api/admin/announcement/${id}`,
      data
    );

    return response.data;
  };

export const getAnnouncementList = async () => {
  const response = await api.get<AnnouncementResponse[]>(
    "/api/admin/announcement"
  );

  return response.data;
};

export const getAnnouncementListHome = async () => {
  const response = await api.get<AnnouncementResponse[]>(
    "/api/admin/announcement/home"
  );

  return response.data;
};

export const getAnnouncement = (id: string) => async () => {
  const response = await api.get<AnnouncementResponse>(
    `/api/admin/announcement/${id}`
  );

  return response.data;
};
