import { PropsWithChildren } from "react";

// styles
import { Container, Nav } from "./styles";

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AdminNav />
      <Container>{children}</Container>
    </>
  );
};

const AdminNav = () => <Nav />;

export default AdminLayout;
