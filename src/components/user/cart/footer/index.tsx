import usePrice from "utils/usePrice";

// components
import Text from "components/text";

// styles
import { Container, Continue, Total } from "./styles";

const UserCartFooter = ({
  total,
  onClick,
}: {
  total: number;
  onClick: () => void;
}) => {
  const totalFormatted = usePrice(total);

  return (
    <Container>
      <Total>
        <Text variant="title-5">Total:</Text>
        <Text variant="title-5">{totalFormatted}</Text>
      </Total>
      <Continue onClick={onClick} dense>
        Continue order
      </Continue>
    </Container>
  );
};

export default UserCartFooter;
