import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const zoomIn = keyframes`
  0% {
    transform: scale(0.94);
  }
  
  100% {
    transform: scale(1);
  }
`;

export const Content = styled.div`
  animation: ${zoomIn} 0.2s ease-in-out forwards;
  background: #222;
  pointer-events: none;
  border-radius: 1.2rem;
  padding: 1.6rem 2rem;
  width: 24rem;

  background-color: var(--color-content);
  filter: drop-shadow(0px 4px 8px rgba(108, 8, 45, 0.14));
  z-index: 2;
`;
