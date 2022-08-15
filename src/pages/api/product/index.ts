import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { authOptions as nextAuthOptions } from "../auth/[...nextauth]";
import services from "server/services";

const apiGetProductList = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, nextAuthOptions);
  if (!session)
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });

  return res.send(await services.getProductList());
};

export default apiGetProductList;
