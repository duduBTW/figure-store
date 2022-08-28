import { useMemo } from "react";
import Link from "next/link";

// styles
import { Container, Miniature, Title } from "./styles";
import FigureTooltip from "components/figure/tooltip";

const ProductCard = ({
  price,
  miniature,
  color,
  id,
  name,
}: {
  price: number;
  name: string;
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
      <a>
        <FigureTooltip
          placement="right-start"
          figureColor={color}
          figureName={name}
        >
          <Container figureColor={color}>
            <Miniature src={miniature} />
            <Title variant="title-5">{formatedPrice}</Title>
          </Container>
        </FigureTooltip>
      </a>
    </Link>
  );
};

export default ProductCard;
