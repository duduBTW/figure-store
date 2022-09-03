import useNewOrderState from "state/newOrder";

// components
import Text from "components/text";

// styles
import {
  Container,
  Divider,
  FigureOverviewContainer,
  FigureOverviewMiniature,
  FigureOverviewName,
  InfoOverviewContainer,
} from "./styles";
import { FigureApiResponse } from "server/client/figures";
import usePrice from "utils/usePrice";

const UserOrderNewOverview = () => {
  const figures = useNewOrderState((state) => state.figures);
  const total = useNewOrderState((state) => state.total);
  const deliver = useNewOrderState((state) => state.deliverPrice);

  return (
    <Container>
      <Text variant="subtitle-1">Order overview</Text>
      <Divider />
      {figures.map((figure) => (
        <FigureOverview key={figure.id} figure={figure} />
      ))}
      <InfoOverview label="Deliver" value={deliver} />
      <Divider />
      <InfoOverview label="Total" value={total} />
    </Container>
  );
};

const InfoOverview = ({ label, value }: { label: string; value: number }) => {
  const formattedValue = usePrice(value);

  return (
    <InfoOverviewContainer>
      <Text variant="body-2">{label}</Text>
      <Text variant="subtitle-1">{formattedValue}</Text>
    </InfoOverviewContainer>
  );
};

const FigureOverview = ({ figure }: { figure: FigureApiResponse }) => {
  const formattedPrice = usePrice(figure.price);

  return (
    <FigureOverviewContainer>
      <FigureOverviewMiniature src="https://placewaifu.com/image/40/40" />
      <FigureOverviewName variant="body-2" color={figure.color}>
        {figure.name}
      </FigureOverviewName>
      <Text variant="subtitle-2">{formattedPrice}</Text>
    </FigureOverviewContainer>
  );
};

export default UserOrderNewOverview;
