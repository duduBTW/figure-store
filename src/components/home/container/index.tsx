import { PropsWithChildren } from "react";

// styles
import { Container, Content } from "./styles";

const HomeContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default HomeContainer;
