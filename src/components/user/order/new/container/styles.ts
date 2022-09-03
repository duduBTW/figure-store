import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: var(--color-content);
  flex-direction: column-reverse;

  ${mq.fromTabletMd} {
    flex-direction: row;
  }
`;
