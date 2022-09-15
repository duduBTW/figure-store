import { useMutation } from "@tanstack/react-query";
import route from "server/client/routes";
import service from "server/client/services";
import { useRouter } from "next/router";

// components
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import UserLayoutProfile from "components/user/layout/profile";
import Text from "components/text";
import ButtonIcon from "components/button/icon";
import Link from "next/link";
import UserPaymentForm from "components/user/payment/form";
import Container from "components/container";
import toast from "react-hot-toast";

const UserPaymentCreatePage = () => {
  const { push } = useRouter();

  const { mutate, isLoading, isSuccess } = useMutation(service.insertPayment, {
    onError: () => toast.error("Error when inseting payment method"),
    onSuccess: () => {
      toast.success("Payment inserted with success");
      push("/user/payment");
    },
  });

  return (
    <Container>
      <Link href="/user/payment">
        <ButtonIcon>
          <ArrowLeftLineIcon />
        </ButtonIcon>
      </Link>
      <div style={{ height: "1.2rem" }} />
      <Text variant="title-3">Add new payment</Text>
      <div style={{ height: "3.2rem" }} />
      <UserPaymentForm
        loading={isLoading || isSuccess}
        onSubmit={mutate}
        submitLabel="Add"
      />
    </Container>
  );
};

UserPaymentCreatePage.Layout = UserLayoutProfile;

export default UserPaymentCreatePage;

export const getServerSideProps = route.user();
