import Button from "components/button";
import Input from "components/input";
import InputEditor from "components/input/editor";
import InputSelect from "components/input/select";
import { FormProvider, useForm, UseFormProps } from "react-hook-form";
import { AnnouncementRequest } from "server/client/announcement";
import { AnnouncementFormContainer } from "./styles";

const AnnouncementForm = ({
  onSubmit,
  loading,
  formProps,
  submitButtonLabel,
}: {
  loading: boolean;
  onSubmit: (data: AnnouncementRequest) => void;
  formProps?: UseFormProps<AnnouncementRequest>;
  submitButtonLabel: string;
}) => {
  const formMethods = useForm<AnnouncementRequest>(formProps);

  return (
    <FormProvider {...formMethods}>
      <AnnouncementFormContainer onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Input name="title" label="Title" />
        <InputSelect
          name="type"
          label="Type"
          placeholder="Select type"
          options={[
            {
              label: "Good",
              value: "success",
            },
            {
              label: "Information",
              value: "info",
            },
            {
              label: "Bad",
              value: "error",
            },
          ]}
        />
        <InputEditor name="description" label="Description" />
        <Button type="submit" loading={loading}>
          {submitButtonLabel}
        </Button>
      </AnnouncementFormContainer>
    </FormProvider>
  );
};

export default AnnouncementForm;
