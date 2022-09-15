import { useController, useFormContext } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Content } from "../styles";
import { Container, Label } from "../styles";

interface Props extends NumericFormatProps {
  label?: string;
  name: string;
}

const InputNumber = ({ name, label, ...rest }: Props) => {
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
      <NumericFormat
        autoComplete="off"
        {...rest}
        name={name}
        onValueChange={({ floatValue }) => onChange(floatValue)}
        value={value}
        onBlur={onBlur}
        getInputRef={ref}
        customInput={Content}
      />
    </Container>
  );
};

export default InputNumber;
