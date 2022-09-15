import { useMutation, useQuery } from "@tanstack/react-query";
import route from "server/client/routes";
import service from "server/client/services";
import toast from "react-hot-toast";

// components
import UserLayoutProfile from "components/user/layout/profile";
import UserAdressForm from "components/user/adress/form";
import Container from "components/container";
import NotFound from "components/notFound";
import Header from "components/header";
import Separator from "components/separator";

const useAdressItem = (id: string) =>
  useQuery(["address-item", id], service.getAdress(id), {
    enabled: false,
  });
const UserAdressCreatePage = ({ id }: { id: string }) => {
  const { data: address } = useAdressItem(id);
  const { mutate, isLoading } = useMutation(service.updateAdress(id), {
    onSuccess: () => toast.success("Address changed with success"),
  });

  if (!address)
    return (
      <NotFound
        back={{
          label: "Return to the address list",
          url: "/user/adress",
        }}
      >
        Address not found
      </NotFound>
    );
  return (
    <Container>
      <Header backHref="/user/adress">Edit address</Header>
      <Separator height={3.2} />
      <UserAdressForm
        loading={isLoading}
        onSubmit={mutate}
        formProps={{
          defaultValues: address,
        }}
        submitLabel="Save changes"
      />
    </Container>
  );
};

UserAdressCreatePage.Layout = UserLayoutProfile;

export default UserAdressCreatePage;

export const getServerSideProps = route.user(async ({ query }, queryClient) => {
  const id = query["addressId"];
  if (typeof id !== "string")
    return {
      notFound: true,
    };

  await queryClient.prefetchQuery(["address-item", id], service.getAdress(id));

  return {
    id,
  };
});
