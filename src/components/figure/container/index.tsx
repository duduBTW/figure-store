import { PropsWithChildren } from "react";

// styles
import { Container, Content } from "./styles";

const FigureContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default FigureContainer;
