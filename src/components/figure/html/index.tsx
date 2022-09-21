import { PropsWithChildren } from "react";

// styles
import { Container } from "./styles";

const FigureHtml = ({
  children,
  color,
}: PropsWithChildren<{
  color?: string;
}>) => {
  return <Container figureColor={color}>{children}</Container>;
};

export default FigureHtml;
