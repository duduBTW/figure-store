import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ContentProps {
  active?: boolean;
}
export const Content = styled.button<ContentProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.6rem;
  margin: -0.6rem;
  border-radius: 222rem;

  ${({ active }) => {
    if (active)
      return css`
        color: var(--color-primary);
        background: var(--color-primary-l);
      `;

    return "";
  }}

  &:hover {
    background: var(--color-primary-l);
  }
`;
