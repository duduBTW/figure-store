import route from "server/client/routes";
import { useQuery } from "@tanstack/react-query";

// components

import UserLayout from "components/user/layout";
import service from "server/client/services";
import { CartApiListResponse } from "server/client/cart";
import UserCartList from "components/user/cart/list";
import Container from "components/container";
import Text from "components/text";
import UserCartFooter from "components/user/cart/footer";
import Button from "components/button";
import Link from "next/link";
import useNewOrderState from "state/newOrder";
import { useRouter } from "next/router";

const useCartList = ({
  initialData,
}: { initialData?: CartApiListResponse } = {}) => {
  return useQuery(["cart-list"], service.getCartLit, {
    initialData,
  });
};

const UserCartPage = ({
  data: { cart: initialData },
}: {
  data: {
    cart: CartApiListResponse;
  };
}) => {
  const { push } = useRouter();
  const addFigures = useNewOrderState((state) => state.addFigures);
  const { data, isLoading, refetch } = useCartList({
    initialData,
  });

  const startOder = () => {
    addFigures(data!.cartList.map((cart) => cart.product));
    push("/user/order/new");
  };

  if (isLoading) return <div>...</div>;
  if (data!.cartList.length <= 0) {
    return (
      <Container gap={4}>
        <div>
          <Text variant="title-1">Cart Empty</Text>
          <Text color="textSecondary" variant="body-2">
            (＃°Д°)
          </Text>
        </div>
        <Link href="/">
          <Button color="primary-l" dense>
            Return to shopping
          </Button>
        </Link>
      </Container>
    );
  }
  return (
    <Container gap={2}>
      <Text variant="title-1">Cart</Text>
      <UserCartList refetch={refetch} cartList={data!.cartList} />
      <UserCartFooter onClick={startOder} total={data!.total} />
    </Container>
  );
};

UserCartPage.Layout = UserLayout;

export const getServerSideProps = route.user(async () => {
  const cart = await service.getCartLit();

  return {
    cart,
  };
});

export default UserCartPage;
