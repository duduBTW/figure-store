import { FormProvider, useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import Input from "components/input";

// styles
import { UserAdressFormContainer, SubmitButton } from "./styles";
import { AdressApiRequest } from "server/client/adress";
import InputSelect from "components/input/select";
import InputMask from "components/input/mask";
import InputNumber from "components/input/number";
import { z } from "zod";

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

const message = "Field is required";
export const adressScheme = z.object({
  cep: z.number().refine((zip) => /^[0-9]{5}[0-9]{3}$/.test(String(zip)), {
    message: "Invalid CEP",
  }),
  street: z.string().min(1, {
    message,
  }),
  state: z.string().min(1, {
    message,
  }),
  city: z.string().min(1, {
    message,
  }),
  neighborhood: z.string().min(1, {
    message,
  }),
  number: z.number().min(0, {
    message,
  }),
});

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
  const formMethods = useForm<AdressApiRequest>({
    ...formProps,
    resolver: zodResolver(adressScheme),
  });

  return (
    <FormProvider {...formMethods}>
      <UserAdressFormContainer
        loading={loading}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <UserAddressFormInputs />
        <SubmitButton type="submit" loading={loading}>
          {submitLabel}
        </SubmitButton>
      </UserAdressFormContainer>
    </FormProvider>
  );
};

export const UserAddressFormInputs = () => {
  return (
    <>
      <InputMask
        format="#####-###"
        placeholder="00000-000"
        label="CEP *"
        name="cep"
      />
      <Input label="Street *" name="street" />
      <InputNumber placeholder="0000" label="Number *" name="number" />
      <Input label="Neighborhood *" name="neighborhood" />
      <Input label="City *" name="city" />
      <InputSelect
        options={states}
        label="State *"
        placeholder="Select a state..."
        name="state"
      />
    </>
  );
};

export default UserAdressForm;
