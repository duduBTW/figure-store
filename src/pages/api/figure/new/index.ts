import { NextApiRequest, NextApiResponse } from "next";
import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.public(
  async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
      case "GET":
        return res.send(await dbServices.getNewProductList());

      default:
        return res.status(404).send({});
    }
  }
);
