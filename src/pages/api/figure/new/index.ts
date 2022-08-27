import { NextApiRequest, NextApiResponse } from "next";
import dbServices from "server/db/services";

const apiGetProductList = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getServerSession(req, res, nextAuthOptions);
  // if (!session)
  //   res.send({
  //     error:
  //       "You must be signed in to view the protected content on this page.",
  //   });

  switch (req.method) {
    case "GET":
      return res.send(await dbServices.getNewProductList());

    default:
      return res.status(404).send({});
  }
};

export default apiGetProductList;
