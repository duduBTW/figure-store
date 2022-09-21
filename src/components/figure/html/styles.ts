import styled from "@emotion/styled";
import { Html } from "components/html/styles";
import { mq } from "constants/theme";

export const Container = styled(Html)`
  margin: 3.2rem 2rem 0;

  ${mq.fromDesktopSm} {
    margin: 3.2rem 0 0;
  }
`;
