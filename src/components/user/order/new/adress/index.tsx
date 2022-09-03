import useNewOrderState from "state/newOrder";

// styles
import { Continue, Section } from "./styles";

// components
import ListItem from "components/list/item";
import Text from "components/text";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import RadioButtonLineIcon from "remixicon-react/RadioButtonLineIcon";
import Button from "components/button";
import RadioList from "components/radio/list";

const OrderNewAdress = () => {
  const { deliver, setDeliver, setActiveStep } = useNewOrderState((state) => ({
    setDeliver: state.setDeliver,
    deliver: state.deliver,
    setActiveStep: state.setActiveStep,
  }));
  const changeDeliver = (id: string) => () => setDeliver(id);
  const nextStep = () => setActiveStep("payment");

  return (
    <>
      <Text variant="title-3">Recive order</Text>
      <Section>
        <Text variant="title-4">Adress</Text>
        <ListItem
          startAction={<MapPinLineIcon color="var(--color-primary)" />}
          primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
          secondary="Guarulhos, São Paulo - CEP 0000000"
          endAction={
            <Button dense color="primary-l">
              Change
            </Button>
          }
        />
      </Section>
      <Section>
        <Text variant="title-4">Sender</Text>
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
            <ListItem
              key={id}
              selected={selected}
              onClick={changeDeliver(id)}
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
      </Section>
      <Continue onClick={nextStep} dense>
        Continue
      </Continue>
    </>
  );
};

export default OrderNewAdress;
