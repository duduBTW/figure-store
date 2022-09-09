import { useMutation } from "@tanstack/react-query";
import route from "server/client/routes";
import service from "server/client/services";
import { useRouter } from "next/router";

// components
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import UserLayoutProfile from "components/user/layout/profile";
import Text from "components/text";
import UserAdressForm from "components/user/adress/form";
import ButtonIcon from "components/button/icon";
import Link from "next/link";

const UserAdressCreatePage = () => {
  const { push } = useRouter();
  const { mutate, isLoading } = useMutation(service.insertAdress, {
    onSuccess: () => push("/user/adress"),
  });

  return (
    <>
      <Link href="/user/adress">
        <ButtonIcon>
          <ArrowLeftLineIcon />
        </ButtonIcon>
      </Link>
      <div style={{ height: "1.2rem" }} />
      <Text variant="title-3">Add new address</Text>
      <div style={{ height: "4rem" }} />
      <UserAdressForm
        loading={isLoading}
        onSubmit={mutate}
        submitLabel="Create"
      />
    </>
  );
};

UserAdressCreatePage.Layout = UserLayoutProfile;

export default UserAdressCreatePage;

export const getServerSideProps = route.user(async () => {
  return {};
});
