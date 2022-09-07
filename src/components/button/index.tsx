import { PropsWithChildren } from "react";

// components
import Tooltip from "components/tooltip";

// styles
import { Content } from "./styles";

export type ButtonColor = "primary" | "primary-l" | "secondary" | "error-l";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dense?: boolean;
  loading?: boolean | string;
  tooltip?: string;
  color?: ButtonColor;
}

const getLoadingLabel = (loading: boolean | string) => {
  if (typeof loading === "string") return loading;

  return "Loading...";
};

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
      <Content color={color} loading={Boolean(loading)} {...rest}>
        {loading ? getLoadingLabel(loading) : children}
      </Content>
    </Container>
  );
};

const EmptyContainer = ({ children }: PropsWithChildren<any>) => (
  <>{children}</>
);

export default Button;
