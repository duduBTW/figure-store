import { PropsWithChildren } from "react";

// styles
import { Container } from "./styles";

const FigureHtml = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default FigureHtml;
