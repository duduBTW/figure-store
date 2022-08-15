import type { GetServerSideProps, NextPage } from "next";
import route from "server/clientRoutes";
import services from "server/services";

const OrderPage: NextPage = () => {
  return <div>Order</div>;
};

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async ({ query }) => {
    {
      const id = query["figureId"];
      if (typeof id !== "string")
        return {
          notFound: true,
        };

      const figure = await services.getProduct(id);
      if (!figure)
        return {
          notFound: true,
        };

      return {
        figure,
      };
    }
  });

export default OrderPage;
