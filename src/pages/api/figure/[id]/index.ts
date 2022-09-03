import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

const apiGetProduct = apiRoute.public(async (req, res) => {
  const id = req.query["id"];
  if (typeof id !== "string") {
    return res.status(400).send("id is required");
  }

  switch (req.method) {
    case "GET":
      const figure = await dbServices.getProduct(id);
      if (!figure) return res.status(404).send({});

      return res.send(figure);

    default:
      return res.status(404).send({});
  }
});

export default apiGetProduct;
