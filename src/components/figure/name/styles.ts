import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

export const Content = styled(Text)`
  margin: 3.2rem 2rem 2rem;

  ${mq.fromDesktopSm} {
    margin: 6rem 0 0;
    max-width: 70%;
  }
`;
