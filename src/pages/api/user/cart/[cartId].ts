import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.user(async (req, res) => {
  try {
    switch (req.method) {
      case "DELETE":
        const id = req.query["cartId"];
        if (typeof id !== "string") {
          return res.status(401).send({});
        }

        return res.send(await dbServices.deleteCart(id));

      default:
        return res.status(404).send({});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});
