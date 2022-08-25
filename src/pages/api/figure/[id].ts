import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { authOptions as nextAuthOptions } from "../auth/[...nextauth]";
import dbServices from "server/db/services";

const apiGetProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getServerSession(req, res, nextAuthOptions);
  // if (!session)
  //   res.status(401).send({
  //     error:
  //       "You must be signed in to view the protected content on this page.",
  //   });

  const id = req.query["id"];
  if (typeof id !== "string") {
    return res.status(400).send("id is required");
  }

  switch (req.method) {
    case "PUT":
      try {
        return res.send(await dbServices.updateProduct(id, req.body));
      } catch (error) {
        console.error(error);
        return res.status(500).send(error);
      }

    case "GET":
      const figure = await dbServices.getProduct(id);
      if (!figure) return res.status(404).send({});

      return res.send({
        id: figure.id,
        name: figure.name,
        price: figure.price,
        description: {
          html: figure.descriptionHtml,
          json: figure.descriptionJson,
        },
      });

    default:
      return res.status(404).send({});
  }
};

export default apiGetProduct;
