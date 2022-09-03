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
