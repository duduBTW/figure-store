import useNewOrderState from "state/newOrder";

// components
import PaymentList from "components/user/payment/list";
import Text from "components/text";

// styles
import { Continue } from "./styles";
import { useUser } from "pages/_app";
import { useEffect } from "react";

const OrderNewPayment = () => {
  const { data: user } = useUser();

  const { payment, setPayment, setActiveStep } = useNewOrderState((state) => ({
    payment: state.payment,
    setPayment: state.setPayment,
    setActiveStep: state.setActiveStep,
  }));
  const nextStep = () => setActiveStep("confirm");

  useEffect(() => {
    if (!payment && user?.activePaymentId) {
      setPayment(user.activePaymentId);
    }
  }, [user?.activePaymentId, payment, setPayment]);

  return (
    <>
      <Text variant="title-3">Payment method</Text>
      <PaymentList
        checked={payment}
        onChange={({ id }) => setPayment(id)}
        hideActions
      />
      <Continue onClick={nextStep} dense>
        Continue
      </Continue>
    </>
  );
};

export default OrderNewPayment;
