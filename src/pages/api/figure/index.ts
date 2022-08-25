import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { authOptions as nextAuthOptions } from "../auth/[...nextauth]";
import dbServices from "server/db/services";

const apiGetProductList = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getServerSession(req, res, nextAuthOptions);
  // if (!session)
  //   res.send({
  //     error:
  //       "You must be signed in to view the protected content on this page.",
  //   });

  switch (req.method) {
    case "POST":
      try {
        return res.send(await dbServices.insertProduct(req.body));
      } catch (error) {
        console.error(error);
        return res.status(500).send(error);
      }

    case "GET":
      return res.send(await dbServices.getProductList());

    default:
      return res.status(404).send({});
  }
};

export default apiGetProductList;
