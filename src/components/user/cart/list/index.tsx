import { CartApiItem } from "server/client/cart";

// components
import UserCartCard from "../card";

// styles
import { Container } from "./styles";

const UserCartList = ({
  cartList,
  refetch,
}: {
  cartList: CartApiItem[];
  refetch: () => void;
}) => {
  const getCart = (cart: CartApiItem) => (
    <UserCartCard refetch={refetch} cart={cart} key={cart.id} />
  );

  return <Container>{cartList.map(getCart)}</Container>;
};

export default UserCartList;
