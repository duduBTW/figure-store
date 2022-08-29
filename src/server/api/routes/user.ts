import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";
import { sessionOptions } from "server/session";

export function userRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(async (req, res) => {
    if (!req.session.user?.userId)
      return res.status(401).send({ message: "Bad user ~(>_<。)＼" });

    return await handler(req, res);
  }, sessionOptions);
}
