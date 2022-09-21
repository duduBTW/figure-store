import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.admin(async (req, res) => {
  try {
    switch (req.method) {
      case "POST":
        return res.send(
          await dbServices.insertAnnouncement({
            body: req.body,
          })
        );

      case "GET":
        return res.send(await dbServices.getAnnouncementList());

      default:
        return res.status(404).send({});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});
