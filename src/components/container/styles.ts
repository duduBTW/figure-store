import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "constants/theme";

interface ContainerProps {
  gap: number;
  loading?: boolean;
}
export const loadingContainer = css`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1.2rem;
    background: rgba(255, 255, 255, 0.6);
  }
`;

export const Container = styled.div<ContainerProps>`
  transition: margin 0.2s ease, padding 0.2s ease;
  box-sizing: border-box;
  background: var(--color-content);
  width: 100%;
  padding: 3.2rem 2rem;
  display: flex;
  gap: ${({ gap }) => `${gap}rem`};
  flex-direction: column;
  margin-bottom: 12rem;

  ${mq.fromTabletMd} {
    margin: 2rem auto;
    max-width: 80rem;
    border-radius: 1.2rem;
    padding: 3.2rem;
  }

  ${({ loading }) => loading && loadingContainer}
`;
