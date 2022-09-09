import { OrderApiResponse } from "server/client/order";
import UserOrderCard from "../card";
import { UserOrderListContainer } from "./styles";

const UserOrderList = ({ orders }: { orders: OrderApiResponse[] }) => {
  return (
    <UserOrderListContainer>
      {orders.map((order) => (
        <UserOrderCard key={order.id} order={order} />
      ))}
    </UserOrderListContainer>
  );
};

export default UserOrderList;
