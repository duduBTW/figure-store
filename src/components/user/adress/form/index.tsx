import { FormProvider, useForm, UseFormProps } from "react-hook-form";

// components
import Input from "components/input";

// styles
import { UserAdressFormContainer, SubmitButton } from "./styles";
import { AdressApiRequest } from "server/client/adress";
import InputSelect from "components/input/select";

const states = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goías" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraíma" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

const UserAdressForm = ({
  onSubmit,
  formProps,
  submitLabel,
  loading,
}: {
  onSubmit: (data: AdressApiRequest) => void;
  formProps?: UseFormProps<AdressApiRequest>;
  submitLabel?: string;
  loading: boolean;
}) => {
  const formMethods = useForm<AdressApiRequest>(formProps);

  return (
    <FormProvider {...formMethods}>
      <UserAdressFormContainer
        loading={loading}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <Input placeholder="00000-000" label="CEP *" name="cep" />
        <Input label="Street *" name="street" />
        <Input placeholder="000" label="Number *" name="number" />
        <Input label="City *" name="city" />
        <Input label="Neighborhood *" name="neighborhood" />
        <InputSelect
          options={states}
          label="State *"
          placeholder="Select a state..."
          name="state"
        />
        <SubmitButton loading={loading}>{submitLabel}</SubmitButton>
      </UserAdressFormContainer>
    </FormProvider>
  );
};

export default UserAdressForm;
