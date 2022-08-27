import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;

  ${mq.fromTabletMd} {
    margin: 2rem auto;
    max-width: 80rem;
    border-radius: 1.2rem;
    margin-top: 4rem;
  }
`;

export const Nav = styled.nav`
  height: 6rem;
  width: 100%;
  background: var(--color-content);
`;
