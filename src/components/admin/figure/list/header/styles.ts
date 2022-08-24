import styled from "@emotion/styled";
import { InputBase } from "components/input";
import Text from "components/text";

export const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const SearchInput = styled(InputBase)`
  flex: 1;
`;

export const Filters = styled(Text)`
  color: var(--color-primary);
  text-align: right;
  margin-top: 0.8rem;
`;
