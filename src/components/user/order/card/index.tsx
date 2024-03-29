import Button from "components/button";
import Text from "components/text";
import Link from "next/link";
import { OrderApiResponse } from "server/client/order";

// styles
import {
  Miniature,
  Name,
  Status,
  UserOrderCardContainer,
  UserOrderCardProduct,
} from "./styles";

const UserOrderCard = ({ order }: { order: OrderApiResponse }) => {
  return (
    <UserOrderCardContainer>
      <Text variant="subtitle-1">
        Will arrive at {order.adress.street} Tuesday
      </Text>
      {order.product.map((product) => (
        <UserOrderCardProduct key={product.id}>
          <Miniature
            src={`/figure/${product.images[0]?.medium}` ?? ""}
            alt="Order miniature"
          />
          <Status>Delivered</Status>
          <Name variant="title-4" color={product.color}>
            {product.name}
          </Name>
        </UserOrderCardProduct>
      ))}
      <Link href={`/user/order/${order.id}`}>
        <Button dense color="primary-l">
          View order
        </Button>
      </Link>
    </UserOrderCardContainer>
  );
};

export default UserOrderCard;
