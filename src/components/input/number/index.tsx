import { useController, useFormContext } from "react-hook-form";
import { NumericFormat, NumericFormatProps } from "react-number-format";

// components
import Text from "components/text";

// styles
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
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <Container error={Boolean(error)}>
      <Label variant="subtitle-2">{label}</Label>
      <NumericFormat
        allowLeadingZeros
        autoComplete="off"
        {...rest}
        name={name}
        onValueChange={({ floatValue }) => onChange(floatValue)}
        value={value}
        onBlur={onBlur}
        getInputRef={ref}
        customInput={Content}
      />
      {error && (
        <Text variant="caption" color="error">
          {error.message}
        </Text>
      )}
    </Container>
  );
};

export default InputNumber;
