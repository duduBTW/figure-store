import { useFormContext } from "react-hook-form";

// styles
import { Container, Content, Label } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Input = ({ label, name, ...rest }: Props) => {
  const { register } = useFormContext();

  return (
    <Container>
      <Label variant="subtitle-2">{label}</Label>
      <Content {...rest} {...register(name)} />
    </Container>
  );
};

export default Input;
