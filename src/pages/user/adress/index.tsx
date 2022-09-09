import service from "server/client/services";
import { AdressApiListResponse } from "server/client/adress";
import route from "server/client/routes";
import { UserPage } from "server/client/routes/user";
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

const UserAdressPage = ({
  data: { adressList },
}: UserPage<{ adressList: AdressApiListResponse[] }>) => {
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
    <>
      <Text variant="title-3">Address</Text>
      {separator}
      <AdressList
        onChange={({ id }) => mutate(id)}
        checked={user!.activeAdressId}
        adressList={adressList}
      />
      {separator}
      <Link href="/user/adress/create">
        <ListItem startAction={<AddLineIcon />} primary="Add new address" />
      </Link>
      <div style={{ height: "4rem" }} />
    </>
  );
};

UserAdressPage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async () => {
  const adressList = await service.getAdressList();

  return {
    adressList,
  };
});

export default UserAdressPage;
