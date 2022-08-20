import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.form`
  box-sizing: border-box;
  background: var(--color-content);
  width: 100%;
  padding: 3.2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${mq.fromTabletMd} {
    margin: 2rem auto;
    max-width: 80rem;
    border-radius: 1.2rem;
  }

  ${mq.fromMobileLg} {
    padding: 4rem 3.2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
