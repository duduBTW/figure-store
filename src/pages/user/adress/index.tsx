import service from "server/client/services";
import route from "server/client/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "pages/_app";
import { User } from "pages/api/user";

// components
import UserLayoutProfile from "components/user/layout/profile";
import Text from "components/text";
import AddLineIcon from "remixicon-react/AddLineIcon";
import AdressList from "components/user/adress/list";
import ListItem from "components/list/item";
import Link from "next/link";
import Container from "components/container";

const UserAdressPage = () => {
  const { data: user } = useUser();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(service.updateAdressActive, {
    onMutate: async (newActive) => {
      const previousUser = queryClient.getQueryData(["user"]) as User;
      queryClient.setQueryData<User>(["user"], (old) => {
        if (!old) return undefined;

        return {
          ...old,
          activeAdressId: newActive,
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
      <Text variant="title-3">Address</Text>
      {separator}
      <AdressList
        onChange={({ id }) => mutate(id)}
        checked={user?.activeAdressId}
      />
      {separator}
      <Link href="/user/adress/create">
        <ListItem startAction={<AddLineIcon />} primary="Add new address" />
      </Link>
    </Container>
  );
};

UserAdressPage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async (_, queryClient) => {
  await queryClient.prefetchQuery(["address-list"], service.getAdressList);
});

export default UserAdressPage;
