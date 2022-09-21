import Container from "components/container";
import Header from "components/header";
import Text from "components/text";
import Tooltip from "components/tooltip";
import { PropsWithChildren } from "react";
import { FigureApiResponse } from "server/client/figures";
import { OrderApiResponse } from "server/client/order";
import {
  DeliverStatusContainer,
  DeliverStep,
  DeliverSteps,
  SectionContainer,
  SectionContent,
  FigureItem,
  FigureListContainer,
  FigureDivider,
  FigureTitle,
  FigureMiniature,
} from "./styles";

const UserOrderInformation = ({ order }: { order: OrderApiResponse }) => {
  return (
    <Container gap={2}>
      <Header backHref="/user/order">Order</Header>
      <Section title="Order overview">
        <FigureList products={order.product} />
      </Section>
      <Section title="Deliver status">
        <DeliverStatus />
      </Section>
      <Section title="Shipping to">
        <Text variant="body-1">
          {order.adress.street}, {order.adress.number}
        </Text>
        <Text variant="body-2" color="textSecondary">
          {order.adress.city}, {order.adress.state} - CEP {order.adress.cep}
        </Text>
      </Section>
      <Section title="Payment">
        <Text variant="body-1">{order.payment.number}</Text>
        <Text variant="body-2" color="textSecondary">
          10x
        </Text>
      </Section>
    </Container>
  );
};

const FigureList = ({ products }: { products: FigureApiResponse[] }) => {
  return (
    <FigureListContainer>
      {products.map((product) => (
        <FigureItem key={product.id}>
          <FigureMiniature src={`/figure/${product.images[0]?.medium}`} />
          <FigureTitle variant="title-5" color={product.color}>
            {product.name}
          </FigureTitle>
          <Text>{product.price}</Text>
        </FigureItem>
      ))}
      <FigureItem>
        <Text>Deliver</Text>
        <Text>Free</Text>
      </FigureItem>
      <FigureDivider />
      <FigureItem>
        <Text>Total</Text>
        <Text>R$ 449,99</Text>
      </FigureItem>
    </FigureListContainer>
  );
};

const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <SectionContainer>
      <Text variant="subtitle-2">{title}</Text>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

const step = 1;
const deliverStatuses = [
  "payment confirmation",
  "store to packege the order",
  "in route",
  "delivered",
];
const DeliverStatus = () => {
  const currentStep = deliverStatuses[step];

  return (
    <DeliverStatusContainer>
      <DeliverSteps>
        {deliverStatuses.map((deliverStatus, index) => (
          <Tooltip label={` ${deliverStatus}`} key={index}>
            <DeliverStep active={index <= step} />
          </Tooltip>
        ))}
      </DeliverSteps>
      <Text variant="body-1" color="primary">
        Waiting for {currentStep}
      </Text>
    </DeliverStatusContainer>
  );
};

export default UserOrderInformation;
