import { PropsWithChildren } from "react";
import { Container } from "./styles";

const UserOrderNewContent = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default UserOrderNewContent;
