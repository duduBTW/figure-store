import HomeContainer from "components/home/container";
import AlertCard from "../card";

// styles
import { Container } from "./styles";

const AlertList = ({ alerts }: { alerts: string[] }) => {
  return (
    <HomeContainer>
      <Container>
        {alerts.map((alert) => (
          <AlertCard type="warning" key={alert}>
            {alert}
          </AlertCard>
        ))}
      </Container>
    </HomeContainer>
  );
};

export default AlertList;
