import { useMutation } from "@tanstack/react-query";
import route from "server/client/routes";
import service from "server/client/services";
import { AdressApiResponse } from "server/client/adress";

// components
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import UserLayoutProfile from "components/user/layout/profile";
import Text from "components/text";
import UserAdressForm from "components/user/adress/form";
import ButtonIcon from "components/button/icon";
import Link from "next/link";

const UserAdressCreatePage = ({
  data: { address, id },
}: {
  data: { address: AdressApiResponse; id: string };
}) => {
  const { mutate, isLoading } = useMutation(service.updateAdress(id), {
    onSuccess: () => {},
  });

  return (
    <>
      <Link href="/user/adress">
        <ButtonIcon>
          <ArrowLeftLineIcon />
        </ButtonIcon>
      </Link>
      <div style={{ height: "1.2rem" }} />
      <Text variant="title-3">Edit address</Text>
      <div style={{ height: "4rem" }} />
      <UserAdressForm
        loading={isLoading}
        onSubmit={mutate}
        formProps={{
          defaultValues: address,
        }}
        submitLabel="Save changes"
      />
    </>
  );
};

UserAdressCreatePage.Layout = UserLayoutProfile;

export default UserAdressCreatePage;

export const getServerSideProps = route.user(async ({ query }) => {
  const id = query["addressId"];
  if (typeof id !== "string")
    return {
      notFound: true,
    };

  return {
    address: await service.getAdress(id),
    id,
  };
});
