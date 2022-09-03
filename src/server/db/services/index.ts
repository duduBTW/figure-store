import * as figureEndpoints from "./figure";
import * as cartEndpoints from "./cart";

const dbServices = {
  ...figureEndpoints,
  ...cartEndpoints,
} as const;

export default dbServices;
