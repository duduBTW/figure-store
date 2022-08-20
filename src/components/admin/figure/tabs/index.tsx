// styles
import { Container, TabItem } from "components/tabs/styles";

const AdminTabs = () => {
  return (
    <Container>
      <TabItem selected>Products</TabItem>
      <TabItem>Orders</TabItem>
      <TabItem>Users</TabItem>
    </Container>
  );
};

export default AdminTabs;
