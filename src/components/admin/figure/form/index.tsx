import { useForm, FormProvider, UseFormProps } from "react-hook-form";
import { FigureApiRequest } from "server/client/figures";

// components
import Button from "components/button";
import Input from "components/input";
import InputCurrency from "components/input/currency";
import InputEditor from "components/input/editor";
import Text from "components/text";

// styles
import { Container, Section } from "./styles";

const AdminFigureForm = ({
  submitButtonLabel,
  onSubmit,
  formProps,
}: {
  submitButtonLabel: string;
  onSubmit: (data: FigureApiRequest) => void;
  formProps?: UseFormProps<FigureApiRequest>;
}) => {
  const editorDefaultValue = formProps?.defaultValues?.description?.json;
  const formMethods = useForm<FigureApiRequest>(formProps);

  return (
    <FormProvider {...formMethods}>
      <Container onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Input label="Name *" name="name" />
        <InputCurrency label="Price *" name="price" />

        <Section>
          <Text variant="subtitle-2">Details</Text>
          <InputEditor
            defaultValue={
              editorDefaultValue ? JSON.parse(editorDefaultValue) : ""
            }
            name="description"
          />
        </Section>

        <Button type="submit">{submitButtonLabel}</Button>
      </Container>
    </FormProvider>
  );
};

export default AdminFigureForm;
