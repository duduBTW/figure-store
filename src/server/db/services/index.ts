import * as figureEndpoints from "./figure";
import * as cartEndpoints from "./cart";
import * as orderEndpoints from "./order";
import * as adressEndpoints from "./adress";
import * as userEndpoints from "./user";

const dbServices = {
  ...figureEndpoints,
  ...cartEndpoints,
  ...orderEndpoints,
  ...adressEndpoints,
  ...userEndpoints,
} as const;

export default dbServices;
