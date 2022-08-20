import { PropsWithChildren } from "react";

// styles
import { Content } from "./styles";

export type ButtonColor = "primary" | "primary-l" | "secondary";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dense?: boolean;
  color?: ButtonColor;
}

const Button = ({
  children,
  color = "primary",
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <Content color={color} {...rest}>
      {children}
    </Content>
  );
};

export default Button;
