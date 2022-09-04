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
  hideBorder,
}: {
  startAction?: ReactElement;
  endAction?: ReactElement;
  primary: string;
  secondary?: string;
  selected?: boolean;
  onClick?: () => void;
  hideBorder?: boolean;
}) => {
  return (
    <ListItemContainer
      tabIndex={onClick ? 0 : -1}
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
