import { FigureListApiResponse } from "server/client/services";

// components
import HomeContainer from "components/home/container";
import Text from "components/text";
import ProductCard from "../card";

// styles
import { Container, ProductContainer } from "./styles";

const ProductGrid = ({
  title,
  figures,
}: {
  title?: string;
  figures: FigureListApiResponse[];
}) => {
  const getFigure = ({
    price,
    color,
    id,
    name,
    images,
  }: FigureListApiResponse) => (
    <ProductCard
      name={name}
      miniature={
        images.length > 0
          ? `/figure/${images[0]?.medium}`
          : "/waifu-placeholder.png"
      }
      price={price}
      color={color}
      id={id}
      key={id}
    />
  );

  return (
    <HomeContainer>
      <Container>
        {title && <Text variant="title-1">{title}</Text>}
        <ProductContainer>{figures.map(getFigure)}</ProductContainer>
      </Container>
    </HomeContainer>
  );
};

export default ProductGrid;
