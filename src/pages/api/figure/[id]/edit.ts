import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

const apiGetProduct = apiRoute.admin(async (req, res) => {
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

    default:
      return res.status(404).send({});
  }
});

export default apiGetProduct;
