import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.user(async (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        return res.send(
          await dbServices.getUser({
            user: req.session.user!,
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

export type UserSession = {
  userId: string;
  userRole: string;
};

export type User = {
  id: string;
  profilePicture?: string;
  activeAdressId?: string;
  activePaymentId?: string;
  name: string;
  email: string;
  phone: number;
  role: string;
  document: number;
  nacionalitty: string;
};
