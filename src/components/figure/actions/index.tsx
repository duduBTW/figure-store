import {
  Container,
  FigureActionsButton,
  FigureActionsCardButton,
} from "./styles";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";

const FigureActions = ({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading: boolean;
}) => {
  return (
    <Container>
      <FigureActionsButton>Buy now</FigureActionsButton>
      <FigureActionsCardButton
        onClick={onClick}
        loading={loading}
        color="primary-l"
      >
        <span>Add to card</span> <ShoppingBagLineIcon />
      </FigureActionsCardButton>
    </Container>
  );
};

export default FigureActions;
