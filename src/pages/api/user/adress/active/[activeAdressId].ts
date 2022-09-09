import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.user(async (req, res) => {
  const id = req.query["activeAdressId"];
  if (typeof id !== "string") {
    return res.status(401).send({});
  }

  try {
    switch (req.method) {
      case "PUT":
        return res.send(
          await dbServices.updateAdressActive({
            user: req.session.user!,
            id,
          })
        );

      default:
        return res.status(404).send({});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});
