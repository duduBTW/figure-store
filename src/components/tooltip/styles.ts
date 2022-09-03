import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const zoomIn = keyframes`
  0% {
    transform: translateY(0.2rem);
  }
  
  100% {
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  animation: ${zoomIn} 0.2s ease-in-out forwards;
  background: var(--color-content);
  color: var(--color-primary-d);
  pointer-events: none;
  border-radius: 0.6rem;
  padding: 0.4rem 0.8rem;
  font-size: 1.4rem;
  letter-spacing: 0.02rem;
  border: 0.1rem solid var(--color-primary-l);
`;
