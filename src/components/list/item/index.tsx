import { ReactElement } from "react";

// styles
import {
  EndAction,
  ListItemContainer,
  PrimaryText,
  SecondaryText,
  StartAction,
} from "./styles";

const ListItem = ({
  startAction,
  endAction,
  primary,
  secondary,
  selected,
  onClick,
}: {
  startAction?: ReactElement;
  endAction?: ReactElement;
  primary: string;
  secondary?: string;
  selected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <ListItemContainer
      tabIndex={onClick ? 0 : -1}
      clickable={Boolean(onClick)}
      onClick={onClick}
      selected={selected}
    >
      {startAction && <StartAction>{startAction}</StartAction>}
      <PrimaryText variant="subtitle-1">{primary}</PrimaryText>
      {secondary && (
        <SecondaryText color="textSecondary" variant="body-2">
          {secondary}
        </SecondaryText>
      )}
      {endAction && <EndAction>{endAction}</EndAction>}
    </ListItemContainer>
  );
};

export default ListItem;
