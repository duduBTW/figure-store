import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "components/text";

interface ContainerProps {
  error?: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  margin-bottom: ${({ error }) => error && "-1.8rem"};
`;

export const ContentContainer = styled.div`
  position: relative;
`;

export const EndIconContainer = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: cenetr;
  color: var(--color-divider);
  pointer-events: none;
`;

export const inputStyles = css`
  transition: box-shadow 0.1s ease-in-out;
  border: 0.1rem solid var(--color-divider);
  outline: none;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 1.4em;
  border-radius: 0.8rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.02em;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0.2rem var(--color-primary);
  }
`;

export const Content = styled.input`
  ${inputStyles}
`;
export const Label = styled(Text)``;
export const Error = styled(Text)``;
