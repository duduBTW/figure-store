import { NextApiRequest, NextApiResponse } from "next";
import apiRoute from "server/api/routes";

export default apiRoute.public((req: NextApiRequest, res: NextApiResponse) => {
  req.session.destroy();
  res.send({ ok: true });
});
