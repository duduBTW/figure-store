import Text from "components/text";

// styles
import { Container, Content } from "./styles";

const AdminLoading = () => {
  return (
    <Container>
      <Content
        src="https://c.tenor.com/mG4E8oJCI2gAAAAM/loading-thinking.gif"
        alt="Loading"
      />
      <Text variant="body-1">Loading...</Text>
    </Container>
  );
};

export default AdminLoading;
