import { adminApiRoute } from "./admin";
import { publicRoute } from "./public";
import { userRoute } from "./user";

const apiRoute = {
  public: publicRoute,
  user: userRoute,
  admin: adminApiRoute,
};

export default apiRoute;
