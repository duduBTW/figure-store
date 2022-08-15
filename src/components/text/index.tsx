import { PropsWithChildren } from "react";
import { Container } from "./styles";

export type TextVariant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "title-5"
  | "title-4"
  | "subtitle-1"
  | "subtitle-2"
  | "body-1"
  | "body-2";

const Text = ({
  variant = "body-1",
  children,
  className,
}: PropsWithChildren<{ variant?: TextVariant; className?: string }>) => {
  return (
    <Container className={className} variant={variant}>
      {children}
    </Container>
  );
};

export default Text;
