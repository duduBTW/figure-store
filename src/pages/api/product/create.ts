import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { authOptions as nextAuthOptions } from "../auth/[...nextauth]";
import dbServices from "server/db/services";

const apiGetProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.body["id"];
  if (typeof id !== "string") {
    return res.status(400).send("id is required");
  }

  return res.send(await dbServices.getProduct(id));
};

export default apiGetProduct;
