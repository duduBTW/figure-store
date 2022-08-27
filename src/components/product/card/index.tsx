import { useMemo } from "react";
import Link from "next/link";

// styles
import { Container, Miniature, Title } from "./styles";

const ProductCard = ({
  price,
  miniature,
  color,
}: {
  price: number;
  miniature: string;
  color: string;
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
      <Container figureColor={color}>
        <Miniature src={miniature} />
        <Title variant="title-5">{formatedPrice}</Title>
      </Container>
    </Link>
  );
};

export default ProductCard;
