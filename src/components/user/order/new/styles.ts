import styled from "@emotion/styled";
import Button from "components/button";
import { mq } from "constants/theme";

export const Continue = styled(Button)`
  width: 100%;
  box-sizing: border-box;

  ${mq.fromTabletMd} {
    width: auto;
    align-self: flex-end;
    width: 18rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
