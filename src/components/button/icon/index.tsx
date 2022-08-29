import Tooltip from "components/tooltip";
import { PropsWithChildren } from "react";

// styles
import { Content } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  tooltip?: string;
}

const ButtonIcon = ({
  children,
  active,
  tooltip,
  ...rest
}: PropsWithChildren<Props>) => {
  const Container = tooltip ? Tooltip : EmptyContainer;

  return (
    <Container placement="bottom" label={tooltip!}>
      <Content active={active} {...rest}>
        {children}
      </Content>
    </Container>
  );
};

const EmptyContainer = ({ children }: PropsWithChildren<any>) => (
  <>{children}</>
);

export default ButtonIcon;
