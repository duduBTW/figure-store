import { useMemo } from "react";
import Link from "next/link";

// styles
import { Container, Miniature, Title } from "./styles";

const ProductCard = ({
  price,
  miniature,
  color,
  id,
}: {
  price: number;
  miniature: string;
  color: string;
  id: string;
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
    <Link href={`/figure/${id}`} passHref>
      <Container figureColor={color}>
        <Miniature src={miniature} />
        <Title variant="title-5">{formatedPrice}</Title>
      </Container>
    </Link>
  );
};

export default ProductCard;
