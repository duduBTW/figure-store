import { useMutation } from "@tanstack/react-query";
import ListItem from "components/list/item";
import RadioList from "components/radio/list";
import RadioButtonLineIcon from "remixicon-react/RadioButtonLineIcon";
import AddCircleLineIcon from "remixicon-react/RadioButtonFillIcon";

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
        <ListItem
          key={id}
          selected={selected}
          onClick={mutate}
          startAction={
            selected ? (
              <RadioButtonLineIcon color="var(--color-primary)" />
            ) : (
              <AddCircleLineIcon />
            )
          }
          primary={name}
          secondary={price}
        />
      )}
    </RadioList>
  );
};

export default AdressList;
