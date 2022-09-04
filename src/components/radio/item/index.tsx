import ListItem, { ListItemProps } from "components/list/item";
import CheckboxBlankCircleLineIcon from "remixicon-react/CheckboxBlankCircleLineIcon";
import RadioButtonLineIcon from "remixicon-react/RadioButtonLineIcon";

const RadioItem = (props: ListItemProps) => {
  return (
    <ListItem
      {...props}
      startAction={
        props.selected ? (
          <RadioButtonLineIcon color="var(--color-primary)" />
        ) : (
          <CheckboxBlankCircleLineIcon />
        )
      }
    />
  );
};

export default RadioItem;
