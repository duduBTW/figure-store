import { PropsWithChildren } from "react";

// styles
import { Content } from "./styles";

export type ButtonColor = "primary" | "primary-l" | "secondary";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dense?: boolean;
  loading?: boolean;
  color?: ButtonColor;
}

const Button = ({
  children,
  loading,
  color = "primary",
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <Content color={color} loading={loading} {...rest}>
      {loading ? "Loading..." : children}
    </Content>
  );
};

export default Button;
