import { PropsWithChildren } from "react";
import { Container } from "./styles";

export type TextVariant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "title-4"
  | "title-5"
  | "title-6"
  | "button-outlined"
  | "subtitle-1"
  | "subtitle-2"
  | "body-1"
  | "body-2";

export type ColorVariant =
  | (string & {})
  | "textPrimary"
  | "primary"
  | "textSecondary";

const Text = ({
  color = "textPrimary",
  variant = "body-1",
  children,
  className,
}: PropsWithChildren<{
  variant?: TextVariant;
  className?: string;
  color?: ColorVariant;
}>) => {
  return (
    <Container className={className} variant={variant} colorText={color}>
      {children}
    </Container>
  );
};

export default Text;
