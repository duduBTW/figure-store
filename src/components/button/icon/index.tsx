import Tooltip from "components/tooltip";
import { PropsWithChildren } from "react";

// styles
import { Content } from "./styles";

export type ButtonIconVariant = "contained" | "icon";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  variant?: ButtonIconVariant;
  tooltip?: string;
}

const ButtonIcon = ({
  children,
  active,
  tooltip,
  variant = "icon",
  ...rest
}: PropsWithChildren<Props>) => {
  const Container = tooltip ? Tooltip : EmptyContainer;

  return (
    <Container placement="bottom" label={tooltip!}>
      <Content active={active} variant={variant} {...rest}>
        {children}
      </Content>
    </Container>
  );
};

const EmptyContainer = ({ children }: PropsWithChildren<any>) => (
  <>{children}</>
);

export default ButtonIcon;
