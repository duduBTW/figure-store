import apiRoute from "server/api/routes";
import formidable from "formidable";
import dbServices from "server/db/services";

export default apiRoute.admin(async (req, res) => {
  const id = req.query["id"];
  if (typeof id !== "string") {
    return res.status(400).send("id is required");
  }

  try {
    switch (req.method) {
      case "POST":
        const form = new formidable.IncomingForm({
          uploadDir: "./public/figure",
          keepExtensions: true,
        });
        form.parse(req, async (err, fields, files) => {
          return (
            res
              .status(200)
              // @ts-ignore
              .send(await dbServices.addImageFigure(id, files.file.newFilename))
          );
        });
        break;

      default:
        return res.status(404).send({});
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};
