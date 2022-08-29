export type UserSession = {
  userId: string;
  userRole: "admin" | "user";
};

export type User = {
  id: string;
  profilePicture?: string;
};
