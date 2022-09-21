import { useController, useFormContext } from "react-hook-form";
import { PatternFormat, PatternFormatProps } from "react-number-format";
import { Content } from "../styles";
import { Container, Label, Error } from "../styles";

interface Props extends PatternFormatProps {
  label?: string;
  name: string;
  output?: "floatValue" | "value" | "formattedValue";
}

const InputMask = ({ name, label, output = "floatValue", ...rest }: Props) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <Container error={Boolean(error)}>
      <Label variant="subtitle-2">{label}</Label>
      <PatternFormat
        autoComplete="off"
        {...rest}
        name={name}
        onValueChange={(newValue) => onChange(newValue[output])}
        value={value}
        onBlur={onBlur}
        getInputRef={ref}
        customInput={Content}
      />
      {error && (
        <Error variant="caption" color="error">
          {error.message}
        </Error>
      )}
    </Container>
  );
};

export default InputMask;
