import apiRoute from "server/api/routes";
import dbServices from "server/db/services";

export default apiRoute.user(async (req, res) => {
  try {
    switch (req.method) {
      case "POST":
        return res.send(
          await dbServices.insertCard({
            user: req.session.user!,
            body: req.body,
          })
        );

      case "GET":
        const cartList = await dbServices.getCartList({
          user: req.session.user!,
        });

        return res.send({
          cartList,
          total: cartList.reduce<number>(
            (acc, cart) => acc + cart.product.price,
            0
          ),
        });

      default:
        return res.status(404).send({});
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
});
