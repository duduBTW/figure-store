import { Container, FigureActionsButton } from "./styles";

const FigureActions = () => {
  return (
    <Container>
      <FigureActionsButton>Buy now</FigureActionsButton>
      <FigureActionsButton color="primary-l">Add to cart</FigureActionsButton>
    </Container>
  );
};

export default FigureActions;
