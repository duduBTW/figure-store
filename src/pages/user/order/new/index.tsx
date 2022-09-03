import { useEffect } from "react";
import { useRouter } from "next/router";
import route from "server/client/routes";
import useNewOrderState, { NewOrderSteps } from "state/newOrder";

//components
import UserLayout from "components/user/layout";
import UserOrderNewContainer from "components/user/order/new/container";
import UserOrderNewContent from "components/user/order/new/content";
import UserOrderNewOverview from "components/user/order/new/overview";
import OrderNewAdress from "components/user/order/new/adress";
import OrderNewPayment from "components/user/order/new/payment";

const getOrderContent = (activeStep: NewOrderSteps) => {
  switch (activeStep) {
    case "adress":
      return <OrderNewAdress />;
    case "payment":
      return <OrderNewPayment />;

    default:
      break;
  }
};

const UserNewOrderPage = () => {
  const { push } = useRouter();
  const activeStep = useNewOrderState((state) => state.activeStep);
  const figures = useNewOrderState((state) => state.figures);
  useEffect(() => {
    if (figures.length <= 0) push("/user/cart");
  }, [figures, push]);

  if (figures.length <= 0) return <></>;
  return (
    <UserOrderNewContainer>
      <UserOrderNewContent key={activeStep}>
        {getOrderContent(activeStep)}
      </UserOrderNewContent>
      <UserOrderNewOverview />
    </UserOrderNewContainer>
  );
};

UserNewOrderPage.Layout = UserLayout;

export const getServerSideProps = route.user(async () => {
  return {};
});

export default UserNewOrderPage;
