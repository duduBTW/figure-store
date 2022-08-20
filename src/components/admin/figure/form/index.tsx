import { useForm, FormProvider, UseFormProps } from "react-hook-form";

// components
import Button from "components/button";
import ImageUploadList from "components/image/upload/list";
import Input from "components/input";
import InputCurrency from "components/input/currency";
import InputEditor from "components/input/editor";
import Text from "components/text";

// styles
import { Container, Section } from "./styles";

interface IAdminFigureForm {
  name: string;
  price: number;
  info: string;
}

const AdminFigureForm = ({
  title,
  submitButtonLabel,
  onSubmit,
  formProps,
}: {
  title: string;
  submitButtonLabel: string;
  onSubmit: (data: any) => void;
  formProps?: UseFormProps<IAdminFigureForm>;
}) => {
  const formMethods = useForm<IAdminFigureForm>(formProps);

  return (
    <FormProvider {...formMethods}>
      <Container onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Text variant="title-3">{title}</Text>
        <Input label="Product name *" name="name" />
        <InputCurrency label="Price *" name="price" />

        <Section>
          <Text variant="title-4">Images</Text>
          <ImageUploadList />
        </Section>

        <Section>
          <Text variant="title-4">Information</Text>
          <InputEditor name="info" />
        </Section>

        <Button type="submit">{submitButtonLabel}</Button>
      </Container>
    </FormProvider>
  );
};

export default AdminFigureForm;
