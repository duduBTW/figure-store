import { PropsWithChildren } from "react";

// styles
import { Container } from "./styles";

const UserOrderNewContainer = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default UserOrderNewContainer;
