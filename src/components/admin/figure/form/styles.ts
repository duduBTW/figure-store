import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "constants/theme";

interface ContainerProps {
  loading?: boolean;
}
export const Container = styled.form<ContainerProps>`
  box-sizing: border-box;
  background: var(--color-content);
  width: 100%;
  padding: 3.2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  border-top: 1px solid var(--color-divider);
  ${mq.fromTabletMd} {
    margin: 2rem auto;
    max-width: 80rem;
    border-radius: 1.2rem;
    border-color: transparent;
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

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
