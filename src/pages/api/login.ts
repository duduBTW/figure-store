import type { UserSession } from "./user";

import { NextApiRequest, NextApiResponse } from "next";
import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.public(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      switch (req.method) {
        case "POST":
          const user = await dbServices.authenticate({ body: req.body });
          if (!user) return res.status(401).send({});

          req.session.user = {
            userId: user.id,
            userRole: user.role ?? "user",
          };
          await req.session.save();
          res.json(user);
        default:
          return res.status(404).send({});
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send(error);
    }
  }
);
