import { PropsWithChildren } from "react";

// styles
import { Content } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const ButtonIcon = ({
  children,
  active,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <Content active={active} {...rest}>
      {children}
    </Content>
  );
};

export default ButtonIcon;
