import { ReactElement } from "react";

// styles
import {
  EndAction,
  ListItemContainer,
  PrimaryText,
  SecondaryText,
  StartAction,
} from "./styles";

export interface ListItemProps {
  startAction?: ReactElement;
  endAction?: ReactElement;
  primary: string;
  secondary?: string;
  selected?: boolean;
  onClick?: () => void;
  hideBorder?: boolean;
}

const ListItem = ({
  startAction,
  endAction,
  primary,
  secondary,
  selected,
  onClick,
  hideBorder,
}: ListItemProps) => {
  // const Container = ListItemContainer.withComponent(onClick ? "button" : "div");

  return (
    <ListItemContainer
      clickable={Boolean(onClick)}
      onClick={onClick}
      selected={selected}
      hideBorder={hideBorder}
    >
      {startAction && <StartAction>{startAction}</StartAction>}
      <PrimaryText variant="subtitle-1">{primary}</PrimaryText>
      {endAction && <EndAction>{endAction}</EndAction>}
      {secondary && (
        <SecondaryText color="textSecondary" variant="body-2">
          {secondary}
        </SecondaryText>
      )}
    </ListItemContainer>
  );
};

export default ListItem;
