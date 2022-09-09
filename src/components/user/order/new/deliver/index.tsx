import useNewOrderState from "state/newOrder";

// styles
import { Continue } from "../styles";

// components
import Text from "components/text";
import RadioList from "components/radio/list";
import RadioItem from "components/radio/item";

const OrderNewDeliver = () => {
  const { deliver, setDeliver, setActiveStep } = useNewOrderState((state) => ({
    setDeliver: state.setDeliver,
    deliver: state.deliver,
    setActiveStep: state.setActiveStep,
  }));
  const changeDeliver = (id: string) => () => setDeliver(id);
  const nextStep = () => setActiveStep("payment");

  return (
    <>
      <Text variant="title-3">Deliver</Text>
      <RadioList
        validadeSelection={({ id }, checked) => checked === id}
        checked={deliver}
        items={[
          {
            id: "1",
            name: "Sender name  . Will arrive at your address Friday",
            price: "R$ 449,99",
          },
          {
            id: "2",
            name: "Sender name",
            price: "R$ 249,99",
          },
        ]}
      >
        {({ name, price, id }, selected) => (
          <RadioItem
            key={id}
            selected={selected}
            onClick={changeDeliver(id)}
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

export default OrderNewDeliver;
