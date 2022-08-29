import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";
import { sessionOptions } from "server/session";

export function adminApiRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(async (req, res) => {
    console.log("req.session", req);

    if (!req.session.user?.userId || req.session.user.userRole !== "admin")
      return res.status(401).send({ message: "Bad user ~(>_<。)＼" });

    return await handler(req, res);
  }, sessionOptions);
}
