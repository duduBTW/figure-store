import useNewOrderState from "state/newOrder";

// components
import PaymentList, { usePaymentList } from "components/user/payment/list";
import Text from "components/text";
import AddLineIcon from "remixicon-react/AddLineIcon";

// styles
import { Continue } from "./styles";
import { useUser } from "pages/_app";
import { useEffect } from "react";
import ListItem from "components/list/item";
import Link from "next/link";

const OrderNewPayment = () => {
  const { data: paymentList } = usePaymentList();
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
      <Link href="/user/adress/create">
        <ListItem startAction={<AddLineIcon />} primary="Add new address" />
      </Link>
      {paymentList && paymentList.length > 0 ? (
        <Continue onClick={nextStep} dense>
          Continue
        </Continue>
      ) : null}
    </>
  );
};

export default OrderNewPayment;
