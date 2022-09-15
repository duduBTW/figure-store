import { NextApiRequest, NextApiResponse } from "next";
import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.public(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      switch (req.method) {
        case "POST":
          return res.status(200).send(
            await dbServices.register({
              body: req.body,
            })
          );

        default:
          return res.status(404).send({});
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send(error);
    }
  }
);
