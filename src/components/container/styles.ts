import styled from "@emotion/styled";
import { mq } from "constants/theme";

interface ContainerProps {
  gap: number;
}
export const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  background: var(--color-content);
  width: 100%;
  padding: 3.2rem 2rem;
  display: flex;
  gap: ${({ gap }) => `${gap}rem`};
  flex-direction: column;

  ${mq.fromTabletMd} {
    margin: 2rem auto;
    max-width: 80rem;
    border-radius: 1.2rem;
  }

  ${mq.fromMobileLg} {
    padding: 3.2rem;
  }
`;