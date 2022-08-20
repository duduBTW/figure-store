import { PropsWithChildren } from "react";

// styles
import { Content } from "./styles";

const ButtonIcon = ({
  children,
  ...rest
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return <Content {...rest}>{children}</Content>;
};

export default ButtonIcon;
