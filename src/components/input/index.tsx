import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// styles
import {
  Container,
  Content,
  ContentContainer,
  EndIconContainer,
  Label,
  Error,
} from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  endIcon?: ReactElement;
}

const Input = ({ label, name, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Container error={Boolean(errors[name])}>
      <Label variant="subtitle-2">{label}</Label>
      <Content autoComplete="off" {...rest} {...register(name)} />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Error color="error" variant="caption">
            {message}
          </Error>
        )}
      />
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
