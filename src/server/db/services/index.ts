import * as figureEndpoints from "./figure";
import * as cartEndpoints from "./cart";
import * as orderEndpoints from "./order";
import * as adressEndpoints from "./adress";
import * as userEndpoints from "./user";
import * as paymentEndpoints from "./payment";

const dbServices = {
  ...figureEndpoints,
  ...cartEndpoints,
  ...orderEndpoints,
  ...adressEndpoints,
  ...userEndpoints,
  ...paymentEndpoints,
} as const;

export default dbServices;
