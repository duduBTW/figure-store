import { PropsWithChildren } from "react";

// styles
import { Content } from "./styles";

const Button = ({
  children,
  ...rest
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <Content {...rest}>{children}</Content>;
};

export default Button;
