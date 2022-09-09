import { OrderApiResponse } from "server/client/order";

// styles
import {
  Deliver,
  Miniature,
  Name,
  Status,
  UserOrderCardContainer,
} from "./styles";

const UserOrderCard = ({ order }: { order: OrderApiResponse }) => {
  return (
    <UserOrderCardContainer>
      <Miniature
        src={`/figure/${order.product[0]?.images[0]?.medium}` ?? ""}
        alt="Order miniature"
      />
      <Status>Delivered</Status>
      <Name variant="title-4" color={order.product[0]?.color}>
        {order.product[0]?.name}
      </Name>
      <Deliver>Will arrive at your address Tuesday</Deliver>
    </UserOrderCardContainer>
  );
};

export default UserOrderCard;
