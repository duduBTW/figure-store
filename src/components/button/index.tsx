import { PropsWithChildren } from "react";

// components
import Tooltip from "components/tooltip";

// styles
import { Content } from "./styles";

export type ButtonColor = "primary" | "primary-l" | "secondary" | "error-l";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dense?: boolean;
  loading?: boolean;
  tooltip?: string;
  color?: ButtonColor;
}

const Button = ({
  children,
  loading,
  tooltip,
  color = "primary",
  ...rest
}: PropsWithChildren<Props>) => {
  const Container = tooltip ? Tooltip : EmptyContainer;

  return (
    <Container placement="bottom" label={tooltip!}>
      <Content color={color} loading={loading} {...rest}>
        {loading ? "Loading..." : children}
      </Content>
    </Container>
  );
};

const EmptyContainer = ({ children }: PropsWithChildren<any>) => (
  <>{children}</>
);

export default Button;
