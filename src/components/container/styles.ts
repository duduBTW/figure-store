import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "constants/theme";

interface ContainerProps {
  gap: number;
  loading?: boolean;
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

  ${({ loading }) =>
    loading &&
    css`
      position: relative;
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 1.2rem;
        background: rgba(255, 255, 255, 0.6);
      }
    `}
`;
