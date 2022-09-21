import { AnnouncementResponse } from "server/client/announcement";
import AlertCard from "../card";

// styles
import { Container } from "./styles";

const AlertList = ({
  alerts,
  onAlertClcik,
}: {
  alerts: AnnouncementResponse[];
  onAlertClcik?: (alert: AnnouncementResponse) => void;
}) => {
  return (
    <Container>
      {alerts.map((alert) => (
        <AlertCard
          onClick={() => onAlertClcik?.(alert)}
          type={alert.type}
          key={alert.id}
        >
          {alert.title}
        </AlertCard>
      ))}
    </Container>
  );
};

export default AlertList;
