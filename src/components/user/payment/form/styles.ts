import styled from "@emotion/styled";
import Button from "components/button";
import { loadingContainer } from "components/container/styles";

interface UserAdressFormContainer {
  loading?: boolean;
}
export const UserPaymentFormContainer = styled.form<UserAdressFormContainer>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${({ loading }) => loading && loadingContainer}
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1.2rem;
`;
