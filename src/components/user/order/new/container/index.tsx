import { PropsWithChildren } from "react";

// styles
import { Container } from "./styles";

const UserOrderNewContainer = ({
  children,
  confirm,
  loading,
}: PropsWithChildren<{ confirm: boolean; loading?: boolean }>) => {
  return (
    <Container loading={loading} confirm={confirm}>
      {children}
    </Container>
  );
};

export default UserOrderNewContainer;
