import styled from "@emotion/styled";
import { title2 } from "components/text/styles";
import CurrencyFormat from "react-currency-format";

export const Content = styled(CurrencyFormat)`
  outline: none;
  padding: 0;
  border: none;
  color: var(--text-primary);

  ${title2}
`;
