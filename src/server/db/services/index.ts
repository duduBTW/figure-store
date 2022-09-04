import * as figureEndpoints from "./figure";
import * as cartEndpoints from "./cart";
import * as orderEndpoints from "./order";

const dbServices = {
  ...figureEndpoints,
  ...cartEndpoints,
  ...orderEndpoints,
} as const;

export default dbServices;
