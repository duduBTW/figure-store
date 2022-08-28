import {
  Container,
  FigureActionsButton,
  FigureActionsCardButton,
} from "./styles";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";

const FigureActions = () => {
  return (
    <Container>
      <FigureActionsButton>Buy now</FigureActionsButton>
      <FigureActionsCardButton color="primary-l">
        <span>Add to card</span> <ShoppingBagLineIcon />
      </FigureActionsCardButton>
    </Container>
  );
};

export default FigureActions;
