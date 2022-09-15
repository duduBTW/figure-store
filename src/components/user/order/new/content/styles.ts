import styled from "@emotion/styled";
import { mq } from "constants/theme";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-1.2rem);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
 }
`;

export const Container = styled.div`
  animation: ${fadeIn} 0.3s ease forwards;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 2rem;

  ${mq.fromTabletMd} {
    max-width: 80rem;
    margin-top: 8rem;
    padding-right: 4rem;
    gap: 4rem;
  }
`;
