import Button from "components/button";
import Text from "components/text";
import Link from "next/link";
import { OrderApiResponse } from "server/client/order";

// styles
import {
  UserOderNewCompleteContainer,
  Content,
  Title,
  Banner,
  Yay,
  Divider,
  ProductList,
  ProductContainer,
  ProductMiniature,
  Price,
  Section,
} from "./styles";

const UserOderNewComplete = ({ order }: { order: OrderApiResponse }) => {
  return (
    <UserOderNewCompleteContainer>
      <Banner src="/order_sucess_banner.png" alt="Bannners" />
      <Content>
        <Yay src="/order_sucess.png" />
        <Title color="" variant="title-1">
          Order complete!
        </Title>
        <Divider />
        <ProductList>
          {order.product.map(({ id, name, color, images }) => (
            <ProductContainer key={id}>
              <ProductMiniature
                src={
                  images.length > 0
                    ? `/figure/${images[0]?.medium}`
                    : "/waifu-placeholder.png"
                }
              />
              <Text variant="title-5" color={color}>
                {name}
              </Text>
            </ProductContainer>
          ))}
        </ProductList>
        <Divider />
        <Text variant="subtitle-1">Shipping to</Text>
        <div>
          <Text variant="body-1">{order.adress.street}</Text>
          <Text variant="body-2" color="textSecondary">
            {order.adress.province} - CEP {order.adress.cep}
          </Text>
        </div>
        <Divider />
        <Text variant="subtitle-1">Order overview</Text>
        <Section>
          <Price>
            <Text variant="body-1">Productus ({order.product.length})</Text>
            <Text variant="subtitle-1">00</Text>
          </Price>
          <Price>
            <Text variant="body-1">Deliver</Text>
            <Text variant="subtitle-1">00</Text>
          </Price>
          <Divider />
        </Section>
        <Price>
          <Text variant="body-1">Total</Text>
          <Text variant="subtitle-1">00</Text>
        </Price>
        <Section>
          <Button>View order</Button>
          <Link href={"/"}>
            <Button color="primary-l">Back to shopping</Button>
          </Link>
        </Section>
      </Content>
    </UserOderNewCompleteContainer>
  );
};

export default UserOderNewComplete;
