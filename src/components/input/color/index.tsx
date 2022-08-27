import { BlockPickerProps } from "react-color";
import { useFormContext, useController } from "react-hook-form";

// styles
import { Content } from "./styles";

interface Props extends BlockPickerProps {
  name: string;
}

const InputColor = ({ name, ...rest }: Props) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value, ref },
  } = useController({
    control,
    name,
    defaultValue: "#383838",
  });

  return (
    <Content
      colors={[]}
      {...rest}
      ref={ref}
      onChange={(color) => onChange(color.hex)}
      color={value}
      triangle="hide"
    />
  );
};

export default InputColor;
