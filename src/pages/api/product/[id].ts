import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { authOptions as nextAuthOptions } from "../auth/[...nextauth]";
import services from "server/services";

const apiGetProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, nextAuthOptions);
  if (!session)
    res.status(401).send({
      error:
        "You must be signed in to view the protected content on this page.",
    });

  const id = req.query["id"];
  if (typeof id !== "string") {
    return res.status(400).send("id is required");
  }

  return res.send(await services.getProduct(id));
};

export default apiGetProduct;
