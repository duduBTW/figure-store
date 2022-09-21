import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.public(async (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        return res.send(await dbServices.getAnnouncementListHome());

      default:
        return res.status(404).send({});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});
