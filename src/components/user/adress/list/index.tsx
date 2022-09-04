import { useMutation } from "@tanstack/react-query";

// components
import RadioList from "components/radio/list";
import DeleteBin7LineIcon from "remixicon-react/DeleteBin7LineIcon";
import Edit2LineIcon from "remixicon-react/Edit2LineIcon";
import Button from "components/button";
import RadioItem from "components/radio/item";

const AdressList = () => {
  const { mutate } = useMutation(() => {
    return new Promise((res) => res(""));
  });

  return (
    <RadioList
      validadeSelection={({ id }, checked) => checked === id}
      checked={"1"}
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
          onClick={mutate}
          primary={name}
          secondary={price}
          endAction={
            <>
              <Button dense color="primary-l">
                <Edit2LineIcon />
              </Button>
              <Button dense color="error-l">
                <DeleteBin7LineIcon />
              </Button>
            </>
          }
        />
      )}
    </RadioList>
  );
};

export default AdressList;
