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
import InputColor from "components/input/color";

const AdminFigureForm = ({
  submitButtonLabel,
  onSubmit,
  formProps,
  loading,
}: {
  loading?: boolean;
  submitButtonLabel: string;
  onSubmit: (data: FigureApiRequest) => void;
  formProps?: UseFormProps<FigureApiRequest>;
}) => {
  const descDefaultValue = formProps?.defaultValues?.description?.json;
  const detDefaultValue = formProps?.defaultValues?.details?.json;
  const formMethods = useForm<FigureApiRequest>(formProps);

  return (
    <FormProvider {...formMethods}>
      <Container
        onSubmit={formMethods.handleSubmit(onSubmit)}
        loading={loading}
      >
        <Input data-tcy="form-name" label="Name *" name="name" />
        <div data-tcy="form-price-container">
          <InputCurrency label="Price *" name="price" />
        </div>

        <Section data-tcy="form-color-container">
          <Text variant="subtitle-2">Color</Text>
          <InputColor name="color" />
        </Section>

        <Section data-tcy="form-description-container">
          <Text variant="subtitle-2">Description</Text>
          <InputEditor
            defaultValue={descDefaultValue ? JSON.parse(descDefaultValue) : ""}
            name="description"
          />
        </Section>

        <Section data-tcy="form-details-container">
          <Text variant="subtitle-2">Product Details</Text>
          <InputEditor
            defaultValue={detDefaultValue ? JSON.parse(detDefaultValue) : ""}
            name="details"
          />
        </Section>

        <Button data-tcy="form-submit-button" loading={loading} type="submit">
          {submitButtonLabel}
        </Button>
      </Container>
    </FormProvider>
  );
};

export default AdminFigureForm;
