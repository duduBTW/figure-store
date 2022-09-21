import styled from "@emotion/styled";
import { InputBase } from "components/input";
import Text from "components/text";

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const SearchInput = styled(InputBase)`
  flex: 1;
`;

export const Filters = styled(Text)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.8rem;
`;
