import { useQuery } from "@tanstack/react-query";
import Container from "components/container";
import Text from "components/text";
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
  return (
    <Container gap={2}>
      <Text variant="title-3">Orders</Text>
      {data && data.length > 0 ? (
        <UserOrderList orders={data} />
      ) : (
        <Text color="textSecondary" variant="body-2">
          No orders
        </Text>
      )}
    </Container>
  );
};

UserOrderPage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async (_, queryClient) => {
  await queryClient.prefetchQuery(["order-list"], service.getOrderList);
});

export default UserOrderPage;
