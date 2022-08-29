import type { UserSession } from "./user";

import { NextApiRequest, NextApiResponse } from "next";
import apiRoute from "server/api/routes";

export default apiRoute.public(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { role } = req.query;

    try {
      const user = {
        userId: "1",
        userRole: role ?? "user",
      } as UserSession;

      req.session.user = user;
      await req.session.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
);
