import ListItem from "components/list/item";
import RadioList from "components/radio/list";
import Text from "components/text";
import RadioButtonLineIcon from "remixicon-react/RadioButtonLineIcon";
import useNewOrderState from "state/newOrder";
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
          <ListItem
            key={id}
            selected={selected}
            onClick={changePayment(id)}
            startAction={
              selected ? (
                <RadioButtonLineIcon color="var(--color-primary)" />
              ) : (
                <RadioButtonLineIcon />
              )
            }
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
