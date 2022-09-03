import dbServices from "server/db/services";
import apiRoute from "server/api/routes";

export default apiRoute.admin(async (req, res) => {
  switch (req.method) {
    case "POST":
      try {
        return res.send(await dbServices.insertProduct(req.body));
      } catch (error) {
        console.error(error);
        return res.status(500).send(error);
      }

    case "GET":
      return res.send(await dbServices.getProductList(req.query));

    default:
      return res.status(404).send({});
  }
});
