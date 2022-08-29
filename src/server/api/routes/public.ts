import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";
import { sessionOptions } from "server/session";

export function publicRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}
