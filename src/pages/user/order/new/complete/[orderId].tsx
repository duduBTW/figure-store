import { OrderApiResponse } from "server/client/order";
import route from "server/client/routes";
import service from "server/client/services";

// components
import UserLayout from "components/user/layout";
import UserOderNewComplete from "components/user/order/new/complete";

const UserOrderNewComplete = ({
  data: { order },
}: {
  data: { order: OrderApiResponse };
}) => {
  return <UserOderNewComplete order={order} />;
};

UserOrderNewComplete.Layout = UserLayout;

export default UserOrderNewComplete;

export const getServerSideProps = route.user(async ({ query }) => {
  const id = query["orderId"];
  if (typeof id !== "string")
    return {
      notFound: true,
    };

  const order = await service.getOrder(id);

  return {
    order,
  };
});
