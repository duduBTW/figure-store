import { useMutation, useQuery } from "@tanstack/react-query";
import route from "server/client/routes";
import service from "server/client/services";
import toast from "react-hot-toast";

// components
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import UserLayoutProfile from "components/user/layout/profile";
import Text from "components/text";
import UserPaymentForm from "components/user/payment/form";
import ButtonIcon from "components/button/icon";
import Link from "next/link";
import Container from "components/container";
import NotFound from "components/notFound";
import Header from "components/header";
import Separator from "components/separator";

const usePaymentItem = (id: string) =>
  useQuery(["payment-item", id], service.getPayment(id), {
    enabled: false,
  });
const UserPaymentCreatePage = ({ id }: { id: string }) => {
  const { data: address } = usePaymentItem(id);
  const { mutate, isLoading } = useMutation(service.updatePayment(id), {
    onSuccess: () => toast.success("Payment changed with success"),
    onError: () => toast.error("Error while updating payment"),
  });

  if (!address) {
    return (
      <NotFound
        back={{
          label: "Return to the payment list",
          url: "/user/payment",
        }}
      >
        Payment method not found
      </NotFound>
    );
  }
  return (
    <Container>
      <Header backHref="/user/payment">Edit payment</Header>
      <Separator height={3.2} />
      <UserPaymentForm
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

UserPaymentCreatePage.Layout = UserLayoutProfile;

export default UserPaymentCreatePage;

export const getServerSideProps = route.user(async ({ query }, queryClient) => {
  const id = query["paymentId"];
  if (typeof id !== "string")
    return {
      notFound: true,
    };

  await queryClient.prefetchQuery(["payment-item", id], service.getPayment(id));

  return {
    id,
  };
});
