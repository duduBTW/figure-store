import { useEffect } from "react";
import { useRouter } from "next/router";
import route from "server/client/routes";
import useNewOrderState, { NewOrderSteps } from "state/newOrder";
import dynamic from "next/dynamic";

//components
import UserLayout from "components/user/layout";
import OrderNewAdress from "components/user/order/new/adress";
import OrderNewPayment from "components/user/order/new/payment";
import UserOrderNewConfirm from "components/user/order/new/confirm";
import Button from "components/button";
import { useMutation } from "@tanstack/react-query";
import service from "server/client/services";

const UserOrderNewContainer = dynamic(
  () => import("components/user/order/new/container"),
  {
    ssr: false,
  }
);
const UserOrderNewContent = dynamic(
  () => import("components/user/order/new/content"),
  {
    ssr: false,
  }
);
const UserOrderNewOverview = dynamic(
  () => import("components/user/order/new/overview"),
  {
    ssr: false,
  }
);
const UserOrderNewDeliver = dynamic(
  () => import("components/user/order/new/deliver"),
  {
    ssr: false,
  }
);

const getOrderContent = (activeStep: NewOrderSteps) => {
  switch (activeStep) {
    case "adress":
      return <OrderNewAdress />;
    case "deliver":
      return <UserOrderNewDeliver />;
    case "payment":
      return <OrderNewPayment />;
    case "confirm":
      return <UserOrderNewConfirm />;

    default:
      break;
  }
};

const UserNewOrderPage = () => {
  const { push } = useRouter();
  const activeStep = useNewOrderState((state) => state.activeStep);
  const figures = useNewOrderState((state) => state.figures);
  const { mutate, isLoading } = useMutation(service.insertOrder, {
    onSuccess: (order) => {
      push(`/user/order/new/complete/${order.id}`);
    },
  });
  const finish = () => {
    const newOder = useNewOrderState.getState();

    mutate({
      address: newOder.address,
      figures: newOder.figures.map((figure) => figure.id),
    });
  };

  useEffect(() => {
    if (figures.length <= 0) push("/user/cart");
  }, [figures, push]);

  if (figures.length <= 0) return <></>;

  const confirm = activeStep === "confirm";
  return (
    <UserOrderNewContainer loading={isLoading} confirm={confirm}>
      <UserOrderNewContent key={activeStep}>
        {getOrderContent(activeStep)}
      </UserOrderNewContent>
      <UserOrderNewOverview confirm={confirm}>
        {confirm && (
          <Button loading={isLoading} onClick={finish}>
            Finish
          </Button>
        )}
      </UserOrderNewOverview>
    </UserOrderNewContainer>
  );
};

UserNewOrderPage.Layout = UserLayout;

export const getServerSideProps = route.user(async () => {
  return {};
});

export default UserNewOrderPage;
