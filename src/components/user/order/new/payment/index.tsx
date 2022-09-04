import useNewOrderState from "state/newOrder";

// components
import RadioItem from "components/radio/item";
import RadioList from "components/radio/list";
import Text from "components/text";

// styles
import { Continue } from "./styles";

const OrderNewPayment = () => {
  const { payment, setPayment, setActiveStep } = useNewOrderState((state) => ({
    payment: state.payment,
    setPayment: state.setPayment,
    setActiveStep: state.setActiveStep,
  }));
  const changePayment = (id: string) => () => setPayment(id);
  const nextStep = () => setActiveStep("confirm");

  return (
    <>
      <Text variant="title-3">Payment method</Text>
      <RadioList
        validadeSelection={({ id }, checked) => checked === id}
        checked={payment}
        items={[
          {
            id: "1",
            name: "Sodexo **** 4321",
            price: "3x",
          },
          {
            id: "2",
            name: "Mastercard **** 1234",
            price: "10x no fees",
          },
          {
            id: "3",
            name: "PIX",
            price: "Instant payment",
          },
          {
            id: "4",
            name: "Paypal",
            price: "Easy",
          },
        ]}
      >
        {({ name, price, id }, selected) => (
          <RadioItem
            key={id}
            selected={selected}
            onClick={changePayment(id)}
            primary={name}
            secondary={price}
          />
        )}
      </RadioList>
      <Continue onClick={nextStep} dense>
        Continue
      </Continue>
    </>
  );
};

export default OrderNewPayment;
