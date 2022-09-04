import { PropsWithChildren } from "react";

// styles
import { Container } from "./styles";

const UserOrderNewContainer = ({
  children,
  confirm,
}: PropsWithChildren<{ confirm: boolean }>) => {
  return <Container confirm={confirm}>{children}</Container>;
};

export default UserOrderNewContainer;
