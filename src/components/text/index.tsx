import { PropsWithChildren } from "react";
import { TextContainer } from "./styles";

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
  | "body-2"
  | "caption";

export type ColorVariant =
  | (string & {})
  | "error"
  | "textPrimary"
  | "primary"
  | "textSecondary";

const getComponent = (variant: TextVariant): keyof JSX.IntrinsicElements => {
  if (
    variant === "body-1" ||
    variant === "body-2" ||
    variant === "subtitle-1" ||
    variant === "caption" ||
    variant === "subtitle-2"
  ) {
    return "p";
  }

  if (variant === "button-outlined") {
    return "span";
  }

  switch (variant) {
    case "title-1":
      return "h1";
    case "title-2":
      return "h2";
    case "title-3":
      return "h3";
    case "title-4":
      return "h4";
    case "title-5":
      return "h5";
    case "title-6":
      return "h6";
    default:
      break;
  }

  return "p";
};

const Text = ({
  color = "textPrimary",
  variant = "body-1",
  children,
  name,
  className,
}: PropsWithChildren<{
  variant?: TextVariant;
  className?: string;
  name?: string;
  color?: ColorVariant;
}>) => {
  const Container = TextContainer.withComponent(getComponent(variant));

  return (
    <Container
      className={className}
      name={name}
      variant={variant}
      colorText={color}
    >
      {children}
    </Container>
  );
};

export default Text;
