import { useQuery } from "@tanstack/react-query";
import UserLayoutProfile from "components/user/layout/profile";
import UserOrderList from "components/user/order/list";
import route from "server/client/routes";
import service from "server/client/services";

const useOrderList = () => {
  return useQuery(["order-list"], service.getOrderList);
};

const UserOrderPage = () => {
  const { data, isLoading } = useOrderList();

  if (isLoading) return <div></div>;
  return <UserOrderList orders={data!} />;
};

UserOrderPage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async () => {
  return {};
});

export default UserOrderPage;
