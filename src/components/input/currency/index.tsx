import { useController, useFormContext } from "react-hook-form";

// styles
import { Container, Label } from "../styles";
import { Content } from "./styles";

const InputCurrency = ({ label, name }: { label?: string; name: string }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    name,
    defaultValue: 0,
  });

  return (
    <Container>
      {label && <Label variant="subtitle-2">{label}</Label>}
      <Content
        value={value || 0}
        onValueChange={(data) => onChange(data.floatValue)}
        ref={ref}
        onBlur={onBlur}
        displayType={"input"}
        decimalSeparator=","
        decimalScale={2}
        allowNegative={false}
        thousandSeparator="."
        prefix={"R$"}
      />
    </Container>
  );
};

export default InputCurrency;
