import { restrictRouteAdmin } from "./admin";
import { publicRoute } from "./public";
import { restrictRouteUser } from "./user";

const route = {
  user: restrictRouteUser,
  admin: restrictRouteAdmin,
  public: publicRoute,
};

export default route;
