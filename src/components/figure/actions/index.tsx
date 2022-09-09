import {
  Container,
  FigureActionsButton,
  FigureActionsCardButton,
} from "./styles";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";
import { useRouter } from "next/router";
import useNewOrderState from "state/newOrder";

const FigureActions = ({
  onClick,
  onBuyClick,
  loading,
}: {
  onBuyClick: () => void;
  onClick: () => void;
  loading: boolean;
}) => {
  return (
    <Container>
      <FigureActionsButton onClick={onBuyClick}>Buy now</FigureActionsButton>
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
