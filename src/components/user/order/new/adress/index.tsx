import { useUser } from "pages/_app";
import useNewOrderState from "state/newOrder";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

// styles
import { Continue } from "../styles";

// components
import Text from "components/text";
import AdressList from "components/user/adress/list";

const OrderNewAdress = () => {
  const { data } = useUser();
  const { setActiveStep, address, setAddress } = useNewOrderState((state) => ({
    setActiveStep: state.setActiveStep,
    address: state.address,
    setAddress: state.setAddress,
  }));
  const nextStep = () => setActiveStep("deliver");

  useEffect(() => {
    if (!address && data?.activeAdressId) {
      setAddress(data.activeAdressId);
    }
  }, [data?.activeAdressId, address, setAddress]);

  return (
    <>
      <Text variant="title-3">Address</Text>
      <AdressList
        checked={address}
        onChange={({ id }) => setAddress(id)}
        hideActions
      />
      <Continue onClick={nextStep} dense>
        Continue
      </Continue>
    </>
  );
};

export default OrderNewAdress;
