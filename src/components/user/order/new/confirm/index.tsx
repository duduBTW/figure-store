// components
import Button from "components/button";
import ListItem from "components/list/item";
import Text from "components/text";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import TruckLineIcon from "remixicon-react/TruckLineIcon";
import useNewOrderState from "state/newOrder";

// styles
import { Section } from "./styles";

const UserOrderNewConfirm = () => {
  const setActiveStep = useNewOrderState((state) => state.setActiveStep);
  const changeAdress = () => setActiveStep("adress");
  const changePayment = () => setActiveStep("payment");

  return (
    <>
      <Text variant="title-1">Confirm</Text>
      <Section>
        <Text variant="title-4">Delivery details</Text>
        <ListItem
          startAction={<MapPinLineIcon color="var(--color-primary)" />}
          hideBorder
          primary="Rua ...."
          secondary="Guarulhos, São Paulo - CEP 000000"
          endAction={
            <Button onClick={changeAdress} dense color="primary-l">
              Change
            </Button>
          }
        />
        <ListItem
          startAction={<TruckLineIcon color="var(--color-primary)" />}
          hideBorder
          primary="Sender name"
          secondary="Will arrive at your address Friday"
          endAction={
            <Button onClick={changeAdress} dense color="primary-l">
              Change
            </Button>
          }
        />
      </Section>
      <Section>
        <Text variant="title-4">Payment details</Text>
        <ListItem
          startAction={<MapPinLineIcon color="var(--color-primary)" />}
          hideBorder
          primary="Sodexo **** 4321"
          secondary="10x"
          endAction={
            <Button onClick={changePayment} dense color="primary-l">
              Change
            </Button>
          }
        />
      </Section>
    </>
  );
};

export default UserOrderNewConfirm;
