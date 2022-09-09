import { useController, useFormContext } from "react-hook-form";
import { Props as InputMaskProps } from "react-input-mask";
import { Container, Label } from "../styles";
import { Content } from "./styles";

interface Props extends InputMaskProps {
  label?: string;
  name: string;
}

const InputMask = ({ name, label, ...rest }: Props) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    name,
  });

  return (
    <Container>
      <Label variant="subtitle-2">{label}</Label>
      <Content
        autoComplete="off"
        {...rest}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        inputRef={ref}
      />
    </Container>
  );
};

export default InputMask;
