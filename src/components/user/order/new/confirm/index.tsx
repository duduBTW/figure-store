import useNewOrderState from "state/newOrder";
import service from "server/client/services";
import { useQuery } from "@tanstack/react-query";

// components
import Button from "components/button";
import ListItem from "components/list/item";
import Text from "components/text";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import TruckLineIcon from "remixicon-react/TruckLineIcon";

// styles
import { Section } from "./styles";

const useAdress = ({ id }: { id: string }) => {
  return useQuery(["address-list", id], () => service.getAdress(id));
};

const UserOrderNewConfirm = () => {
  const { setActiveStep, address } = useNewOrderState((state) => ({
    setActiveStep: state.setActiveStep,
    address: state.address,
  }));
  const changeAdress = () => setActiveStep("adress");
  const changeDeliver = () => setActiveStep("deliver");
  const changePayment = () => setActiveStep("payment");

  const { data: addressData } = useAdress({ id: address });

  return (
    <>
      <Text variant="title-1">Confirm</Text>
      <Section>
        <Text variant="title-4">Delivery details</Text>
        {addressData && (
          <ListItem
            startAction={<MapPinLineIcon color="var(--color-primary)" />}
            hideBorder
            primary={`${addressData.street}, ${addressData.number}`}
            secondary={`${addressData.city}, ${addressData.state} - CEP ${addressData.cep}`}
            endAction={
              <Button onClick={changeAdress} dense color="primary-l">
                Change
              </Button>
            }
          />
        )}
        <ListItem
          startAction={<TruckLineIcon color="var(--color-primary)" />}
          hideBorder
          primary="Sender name"
          secondary="Will arrive at your address Friday"
          endAction={
            <Button onClick={changeDeliver} dense color="primary-l">
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
