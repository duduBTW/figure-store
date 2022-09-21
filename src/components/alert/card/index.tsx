import Text from "components/text";
import { PropsWithChildren } from "react";
import { AlertCardContainer, IconContainer } from "./styles";

// icons
import AlertLineIcon from "remixicon-react/AlertLineIcon";
import InformationLineIcon from "remixicon-react/InformationLineIcon";
import CheckLineIcon from "remixicon-react/CheckLineIcon";

export type AlertType = "success" | "info" | "error";

const getIcon = (type: AlertType) => {
  switch (type) {
    case "error":
      return <AlertLineIcon />;
    case "info":
      return <InformationLineIcon />;
    case "success":
      return <CheckLineIcon />;

    default:
      break;
  }
};

const AlertCard = ({
  children,
  type,
  onClick,
}: PropsWithChildren<{
  type: AlertType;
  onClick?: () => void;
}>) => {
  return (
    <AlertCardContainer onClick={onClick} type={type}>
      <IconContainer>{getIcon(type)}</IconContainer>
      <Text variant="body-1">{children}</Text>
    </AlertCardContainer>
  );
};

export default AlertCard;
