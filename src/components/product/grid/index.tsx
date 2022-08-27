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
  const getFigure = ({ price, color }: FigureListApiResponse) => (
    <ProductCard
      miniature="https://placewaifu.com/image/400/400"
      price={price}
      color={color}
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
