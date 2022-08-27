import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  padding-top: 2rem;
  background: var(--color-content);
`;

export const Content = styled.div`
  max-width: 120rem;
  margin: 0 2rem;

  ${mq.fromDesktopSm} {
    margin: 0 auto;
  }
`;
