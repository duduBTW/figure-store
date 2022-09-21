import { OrderApiResponse } from "server/client/order";
import route from "server/client/routes";
import service from "server/client/services";

// components
import UserOrderInformation from "components/user/order/information";
import UserLayoutProfile from "components/user/layout/profile";

const UserOrderNewComplete = ({ order }: { order: OrderApiResponse }) => {
  return <UserOrderInformation order={order} />;
};

UserOrderNewComplete.Layout = UserLayoutProfile;

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
