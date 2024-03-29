import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

export const Content = styled(Text)`
  margin: 3.2rem 2rem 0;

  ${mq.fromDesktopSm} {
    margin: 2.4rem 0 0;
  }
`;
