import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";

// styles
import {
  Container,
  Content,
  ContentContainer,
  EndIconContainer,
  Label,
} from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  endIcon?: ReactElement;
}

const Input = ({ label, name, ...rest }: Props) => {
  const { register } = useFormContext();

  return (
    <Container>
      <Label variant="subtitle-2">{label}</Label>
      <Content autoComplete="off" {...rest} {...register(name)} />
    </Container>
  );
};

export const InputBase = ({
  label,
  name,
  endIcon,
  className,
  ...rest
}: Props) => {
  return (
    <Container className={className}>
      {label && <Label variant="subtitle-2">{label}</Label>}
      <ContentContainer>
        <Content {...rest} />
        <EndIconContainer>{endIcon}</EndIconContainer>
      </ContentContainer>
    </Container>
  );
};

export default Input;
