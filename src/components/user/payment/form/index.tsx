import {
  FormProvider,
  useForm,
  useFormContext,
  UseFormProps,
} from "react-hook-form";

// components
import Input from "components/input";
import Cards, { Focused } from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import InputMask from "components/input/mask";
import InputNumber from "components/input/number";

// styles
import { UserPaymentFormContainer, SubmitButton } from "./styles";
import { PaymentApiRequest } from "server/client/payment";
import { useState } from "react";

const UserPaymentForm = ({
  onSubmit,
  formProps,
  submitLabel,
  loading,
}: {
  onSubmit: (data: PaymentApiRequest) => void;
  formProps?: UseFormProps<PaymentApiRequest>;
  submitLabel?: string;
  loading: boolean;
}) => {
  const [focus, setFocus] = useState<Focused | undefined>(undefined);
  const formMethods = useForm<PaymentApiRequest>(formProps);

  return (
    <FormProvider {...formMethods}>
      <UserPaymentFormContainer
        loading={loading}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <Card focus={focus} />
        <InputMask
          format="#### #### #### ####"
          onClick={() => setFocus("number")}
          label="Card number *"
          name="number"
        />
        <Input
          onClick={() => setFocus("name")}
          label="Full name *"
          name="name"
        />
        <InputMask
          format="##/##"
          output="formattedValue"
          onClick={() => setFocus("expiry")}
          label="Valid Thru *"
          name="validDate"
        />
        <InputNumber onClick={() => setFocus("cvc")} label="CVC *" name="cvc" />
        <SubmitButton loading={loading}>{submitLabel}</SubmitButton>
      </UserPaymentFormContainer>
    </FormProvider>
  );
};

const Card = ({ focus }: { focus: Focused | undefined }) => {
  const { watch } = useFormContext<PaymentApiRequest>();
  const [cvc, number, name, validDate] = watch([
    "cvc",
    "number",
    "name",
    "validDate",
  ]);

  return (
    <Cards
      cvc={cvc ?? ""}
      expiry={validDate ?? ""}
      name={name ?? ""}
      number={number ?? ""}
      focused={focus}
    />
  );
};

export default UserPaymentForm;
