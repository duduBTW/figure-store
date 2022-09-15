import ListItem from "components/list/item";
import Text from "components/text";
import UserLayoutProfile from "components/user/layout/profile";
import PaymentList from "components/user/payment/list";
import Link from "next/link";
import AddLineIcon from "remixicon-react/AddLineIcon";
import route from "server/client/routes";
import { useUser } from "pages/_app";
import service from "server/client/services";
import Container from "components/container";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "pages/api/user";

const UserPaymentPage = () => {
  const { data: user } = useUser();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(service.updatePaymentActive, {
    onMutate: async (newActive) => {
      const previousUser = queryClient.getQueryData(["user"]) as User;
      queryClient.setQueryData<User>(["user"], (old) => {
        if (!old) return undefined;

        return {
          ...old,
          activePaymentId: newActive,
        };
      });

      return { previousUser };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData(["user"], context?.previousUser);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  const separator = <div style={{ height: "2rem" }} />;
  return (
    <Container>
      <Text variant="title-3">Payment</Text>
      {separator}
      <PaymentList
        onChange={({ id }) => mutate(id)}
        checked={user?.activePaymentId}
      />
      {separator}
      <Link href="/user/payment/create">
        <ListItem startAction={<AddLineIcon />} primary="Add new payment" />
      </Link>
    </Container>
  );
};

UserPaymentPage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async (_, queryClient) => {
  await queryClient.prefetchQuery(["payment-list"], service.getPaymentList);
});

export default UserPaymentPage;
