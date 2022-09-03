import Text from "components/text";
import { Container } from "./styles";
import AddLineIcon from "remixicon-react/AddLineIcon";

const UserAdressAddButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Container onClick={onClick}>
      <AddLineIcon />
      <Text variant="title-5">Add new adress</Text>
    </Container>
  );
};

export default UserAdressAddButton;
