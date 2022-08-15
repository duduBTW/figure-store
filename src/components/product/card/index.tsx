import { useMemo } from "react";
import Text from "components/text";
import { Container, Miniature } from "./styles";
import Link from "next/link";

const ProductCard = ({
  price,
  miniature,
}: {
  price: number;
  miniature: string;
}) => {
  const formatedPrice = useMemo(
    () =>
      Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(price),
    [price]
  );

  return (
    <Link href={"/figure/1"} passHref>
      <Container>
        <Miniature src={miniature} />
        <Text variant="title-5">{formatedPrice}</Text>
      </Container>
    </Link>
  );
};

export default ProductCard;
