import { useMutation } from "@tanstack/react-query";
import route from "server/client/routes";
import service from "server/client/services";
import { useRouter } from "next/router";

// components
import UserLayoutProfile from "components/user/layout/profile";
import UserPaymentForm from "components/user/payment/form";
import Container from "components/container";
import toast from "react-hot-toast";
import Separator from "components/separator";
import Header from "components/header";

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
      <Header backHref="/user/payment">Add new payment</Header>
      <Separator height={3.2} />
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
