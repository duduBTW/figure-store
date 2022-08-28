import Text from "components/text";
import { PropsWithChildren } from "react";
import { Container } from "./styles";

// icons
import AlertLineIcon from "remixicon-react/AlertLineIcon";
import InformationLineIcon from "remixicon-react/InformationLineIcon";
import CheckLineIcon from "remixicon-react/CheckLineIcon";

export type AlertType = "warning" | "success" | "info";

const getIcon = (type: AlertType) => {
  switch (type) {
    case "warning":
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
}: PropsWithChildren<{
  type: AlertType;
}>) => {
  return (
    <Container type={type}>
      <div>{getIcon(type)}</div>
      <Text variant="body-1">{children}</Text>
    </Container>
  );
};

export default AlertCard;
