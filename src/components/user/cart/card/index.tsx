import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "components/button";
import { CartApiItem } from "server/client/cart";
import service from "server/client/services";
import usePrice from "utils/usePrice";

// styles
import { Container, Actions, Miniature, Price, Title } from "./styles";

const UserCartCard = ({
  cart,
  refetch,
}: {
  cart: CartApiItem;
  refetch: () => void;
}) => {
  const { mutate, isLoading, isSuccess } = useMutation(
    () => service.deleteCart(cart.id),
    {
      onSuccess: () => refetch(),
    }
  );
  const formatedPrice = usePrice(cart.product.price);

  return (
    <Container>
      <Miniature src="https://placewaifu.com/image/400/400" />
      <Title color={cart.product.color}>{cart.product.name}</Title>
      <Price variant="body-1">{formatedPrice}</Price>
      <Actions>
        <Button
          loading={isLoading || isSuccess}
          dense
          color="error-l"
          onClick={() => mutate()}
        >
          Delete
        </Button>
        <Button dense color="primary-l">
          Save for later
        </Button>
      </Actions>
    </Container>
  );
};

export default UserCartCard;
